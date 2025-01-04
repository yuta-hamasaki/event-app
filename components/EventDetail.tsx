'use client';

import { parseISO } from 'date-fns';
import EventHeader from '@/components/EventHeader';
import EventPrice from '@/components/EventPrice';
import PurchaseButton from '@/components/PurchaseBtn';
import {Product} from '@/lib/client'

interface BlogContentProps {
  data: Product
}

export default function EventDetail({ data }: BlogContentProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <EventHeader
        title={data.title['en-title']}
        date={data.date['en-date']}
        location={data.location['en-location']}
        address={data.address['en-address']}
        imageUrl={data.img.url}
      />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-8 text-center space-y-4">
            <EventPrice price={data.price} />
            {data.price?.id && (
              <PurchaseButton 
                price={data.price} 
            />
            )}

          </div>
          
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600"
            dangerouslySetInnerHTML={{
              __html: data.detail['en-detail']
            }}
          />
        </div>
      </main>
    </div>
  );
}