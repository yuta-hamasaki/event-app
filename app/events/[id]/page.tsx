import { getBlogDetail } from "@/lib/client";
import EventDetail from "@/components/EventDetail";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function page(props: PageProps) {
  const params = await props.params;
  const data = await getBlogDetail(params.id);
  return <EventDetail data={data} />;
}