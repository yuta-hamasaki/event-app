import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const session_id = requestUrl.searchParams.get('session_id');

  if (code) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    
    await supabase.auth.exchangeCodeForSession(code);
  }

  // // If there's a session_id, the user completed Stripe checkout
  // if (session_id) {
  //   // You can handle post-payment logic here
  // }

  return NextResponse.redirect(requestUrl.origin);
}