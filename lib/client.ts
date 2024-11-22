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

export async function getEvents(): Promise<Event[]> {
  const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN!,
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
  });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const { contents } = await client.get<{ contents:Event[] }>({
    endpoint: 'events',
  });

  const data = await Promise.all(
    contents.map(async (content) => {
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
        return content;
      }
    })
  );

  return data;
}

export const getBlogDetail = async (contentId: string) => {
try {
  const response = await client.getListDetail<Event>({
  endpoint: 'events',
  contentId,
  customRequestInit: {
      cache: "no-store",
  },
  });
  return response;
} catch (error) {
  console.error('Error fetching blog detail:', error);
  throw new Error(`Failed to fetch blog with ID: ${contentId}`);
}
};