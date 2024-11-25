"use client";
import { parseISO, format } from 'date-fns'
import Image from "next/image";

interface eyecatch{
  width:number;
  height:number;
  url:string;
}

interface Blog {
  title: any;
  detail: any;
  price:any;
  img:any;
  location:any;
  address:any;
  date:any
}

interface BlogContentProps {
  data: Blog;
}

export default function BlogContent({ data }: BlogContentProps) {
  console.log(data)
  const img = data.img.url
  const date = parseISO(data.date['en-date'])
  return (
<> 
    <article className="max-w-4xl mx-auto px-4 py-8">
      {data.img? 
        <Image src={img} height={data.img.height} width={data.img.width} alt="eyecatch"/> : <></>
      } 
      <h1 className="text-3xl font-bold mb-4">{data.title['en-title']}</h1>

      <div className="flex items-center space-x-4 mb-4">
        <p>{format(date, 'yyyy-MM-dd HH:mm')}</p>
      <div className="bg-purple-500 text-white px-3 py-1 rounded-full">{data.address['en-address']}</div>
      <div className="bg-purple-500 text-white px-3 py-1 rounded-full">{data.location['en-location']}</div>
  </div>
      {data.price? (
          <p>
            {(data.price.unit_amount / 100).toLocaleString()}
            {data.price.currency.toUpperCase()}
          </p>
      ): <>Free</>}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: data.detail['en-detail']!
        }}
      />
    </article>
</>
  );
}