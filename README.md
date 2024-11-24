**サービス開発の経緯**

イベントを主催することになり、チケット購入ページが必要になったため

**使用技術**
| フロントエンド | Next.js(App router),Tailwindcss |
| バックエンド | Next.js Supabase |
| データベース | PostgresQL (Supabase) |
| ホスティング | |
| その他 | MicroCMS, Stripe api |

将来的に開発したい機能：

全ての機能を一括管理できる画面

物販機能

## システム構造

![Screenshot 2024-11-12 at 10.23.45.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/9e1aeda9-c1e7-4c12-bee0-8886f89a5858/2665b0c2-30d0-4d85-bcfd-fb68aa003926/Screenshot_2024-11-12_at_10.23.45.png)

## データ構造（ER図）

![Screenshot 2024-11-22 at 18.42.11.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/9e1aeda9-c1e7-4c12-bee0-8886f89a5858/24064b14-af5c-43e4-a3bc-9517ebcb5d28/Screenshot_2024-11-22_at_18.42.11.png)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
