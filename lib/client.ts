import { createClient } from 'microcms-js-sdk';
import { Event } from '@/types/events';


const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!
});

export const getEvents = async () => {
  try {
      const response = await client.getList<Event>({
      endpoint: 'events',
      customRequestInit: {
          cache: "no-store",
      },
      });
      return response;
} catch (error) {
  console.error('Error:', error);
  throw new Error('Failed');
}
};

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