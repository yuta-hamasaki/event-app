import { createClient } from 'microcms-js-sdk';
import { Event } from '@/types/events';
import Stripe from 'stripe';

interface Product extends Event {
  price?: {
    unit_amount: number;
    currency: string;
    id: string;
  };
}


const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!
});

export async function getEvents(): Promise<Product[]> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const { contents } = await client.get<{ contents: Event[] }>({
    endpoint: 'events',
  });

  const data = await Promise.all(
    contents.map(async (content): Promise<Product> => {
      try {
        const price = await stripe.prices.retrieve(content.stripe_price_id);
        return {
          ...content,
          price: {
            unit_amount: price.unit_amount || 0,
            currency: price.currency,
            id: price.id,
          },
        };
      } catch (e) {
        console.error(`Error fetching price for product ${content.id}:`, e);
        return content as Product;
      }
    })
  );

  return data;
}

export const getBlogDetail = async (contentId: string): Promise<Product> => {
  try {
    const response = await client.getListDetail<Event>({
      endpoint: 'events',
      contentId,
      customRequestInit: {
        cache: "no-store",
      },
    });

    // Check if stripe_price_id exists before attempting to retrieve
    if (response.stripe_price_id) {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
      
      try {
        const price = await stripe.prices.retrieve(response.stripe_price_id);
        return {
          ...response,
          price: {
            unit_amount: price.unit_amount || 0,
            currency: price.currency,
            id: price.id,
          },
        } as Product;
      } catch (priceError) {
        console.error(`Error retrieving price for event ${contentId}:`, priceError);
        // Return response without price if price retrieval fails
        return response as Product;
      }
    }

    // Return response if no stripe_price_id
    return response as Product;
  } catch (error) {
    console.error('Error fetching blog detail:', error);
    throw new Error(`Failed to fetch blog with ID: ${contentId}`);
  }
};