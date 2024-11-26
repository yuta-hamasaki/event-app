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
  // console.log(data)
  const img = data.img.url
  const date = parseISO(data.date['en-date'])
  return (
<div className='flex flex-col items-center justify-center text-center w-full'> 
      {data.img? 
      <div className="object-cover w-full h-[300px] flex justify-center items-center fixed z-1 top-[100px]">
        <Image src={img} 
        height={200}
        // height={data.img.height}
        width={400}
        alt="eyecatch"/>

      </div> : <></>
      } 
<div className='flex justify-center items-center bg-white'>
<article className="max-w-4xl mx-auto px-4 py-8 absolute bg-slate-50 top-[300px]">
      <h1 className="text-3xl font-bold mb-4">{data.title['en-title']}</h1>

      <div className="flex items-center flex-col space-x-4 mb-4">
        <p>{format(date, 'yyyy-MM-dd HH:mm')}</p>
        <div className="font-bold text-slate-700 px-3 py-1">{data.location['en-location']}</div>
        <div className="font-bold text-slate-700 px-3 py-1 rounded-full">{data.address['en-address']}</div>
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
</div>
</div>
  );
}