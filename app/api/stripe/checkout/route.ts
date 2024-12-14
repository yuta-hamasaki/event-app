import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

interface CheckoutRequest {
  price_id: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: CheckoutRequest = await req.json();
    const priceId = body.price_id;

    if (!priceId) {
      return NextResponse.json(
        { message: "商品が選択されていません" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      // customer_creation: 'if_required',
      line_items: [{
        price: priceId,
        quantity: 1,
      }],

      success_url:  "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      mode: 'payment',
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { message: '決済の作成に失敗しました' },
      { status: 500 }
    );
  }
}