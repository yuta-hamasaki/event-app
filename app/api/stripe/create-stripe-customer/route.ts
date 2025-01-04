import {createClient} from "@/utils/supabase/client"
import { NextRequest, NextResponse } from "next/server";
import initStripe from "stripe";

// 型定義
interface RequestBody {
  record: {
    id: string;
    email: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    // APIシークレットの検証
    const query = req.nextUrl.searchParams.get("API_ROUTE_SECRET");
    if (query !== process.env.API_ROUTE_SECRET) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 }
      );
    }

    // リクエストボディの検証
    const data = await req.json() as RequestBody;
    if (!data?.record?.id || !data?.record?.email) {
      return NextResponse.json(
        { error: "Invalid request body. Missing id or email." },
        { status: 400 }
      );
    }

    const { id, email } = data.record;

      const supabase = createClient()
    // ユーザープロフィールの確認
    const { data: profile, error: profileError } = await supabase
      .from("client_profile")
      .select("stripe_customer_id")
      .eq("id", id)
      .single();

    if (profileError) {
      return NextResponse.json(
        { error: "User profile not found" },
        { status: 404 }
      );
    }

    // 既存のStripeカスタマーIDをチェック
    if (profile?.stripe_customer_id) {
      return NextResponse.json(
        { message: "Stripe customer already exists", customerId: profile.stripe_customer_id },
        { status: 200 }
      );
    }

    // Stripeクライアントの初期化
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("Missing Stripe secret key");
    }
    const stripe = new initStripe(process.env.STRIPE_SECRET_KEY);

    // Stripeカスタマーの作成
    const customer = await stripe.customers.create({
      email,
      metadata: {
        supabaseUserId: id
      }
    });

    // プロフィールの更新
    const { error: updateError } = await supabase
      .from("client_profile")
      .update({
        stripe_customer_id: customer.id,
      })
      .eq("id", id);

    if (updateError) {
      // Stripeカスタマーの作成は成功したが、プロフィールの更新に失敗した場合
      await stripe.customers.del(customer.id);
      throw new Error("Failed to update user profile");
    }

    return NextResponse.json({
      message: "Stripe customer created successfully",
      customerId: customer.id
    });

  } catch (error) {
    console.error("Error creating Stripe customer:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}