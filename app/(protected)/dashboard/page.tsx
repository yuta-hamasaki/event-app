import AccountForm from '@/components/dashboard/dashboardForm'
import { EventsList } from '@/components/landing/event-list'
import { getEvents } from '@/lib/client'
import { createClient } from '@/utils/supabase/server'
import Tickets from './components/Tickets'

export default async function Account() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const contents = await getEvents();

  return (
    <section className="w-full px-9">
      <div className="flex flex-col items-center gap-10 m-auto py-16 px-12 lg:px-72">
        <h1 className="text-4xl font-bold font-plus-jakarta-sans tracking-tight">
          My Page
        </h1>
        <div className="flex flex-col w-full">
          <h2 className="pb-3 font-semibold font-plus-jakarta-sans text-lg">
            Profile
          </h2>
          <p className="border-b-0.5 border-gray-400"></p>
          <AccountForm user={user} />
        </div>
        <div className='w-full'>
          <Tickets />
          <EventsList initialEvents={contents} />
        </div>
      </div>
    </section>
  );
}
