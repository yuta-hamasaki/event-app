'use client';

interface EventPriceProps {
  price?: {
    unit_amount: number;
    currency: string;
  };
}

export default function EventPrice({ price }: EventPriceProps) {
  if (!price || price.unit_amount === 0) {
    return (
      <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
        Free Event
      </div>
    );
  }

  return (
    <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
      {(price.unit_amount / 100).toLocaleString()} {price.currency.toUpperCase()}
    </div>
  );
}