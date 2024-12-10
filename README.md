**サービス開発の経緯**
イベントを主催することになり、チケット購入ページを作成する必要がありました。また、バンクーバーには多くの日系イベントが開催されているため、それらをまとめたサイトがあれば便利だと考えました。

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


##今後の展望
stripe connect用いて豊富な決済機能を導入してユーザー体験向上を目指していきたい。
