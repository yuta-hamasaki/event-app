import { STUFFS } from '@/lib/constats.index'
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="text-center">
      {/* hero */}
      <section>
        <h1 className='text-black text-5xl font-bold'>Discover. Connect. Experience.</h1>
        <p className='font-normal'>
        some text is here some text is here somesome text is here some text is here some text is here some text  text is here some text  text is here some text  text is here
        </p>
      </section>
      {/* Event section */}
      <section>
        <div>
          <h2>Discover Events</h2>
          <p>some text  text is heres ome text  text is here some text  text is here</p>
        </div>

        {/* event cards */}
        <div className="">
          {/* 
          {events.map((event)=>(
            <EventCards
              priceTag={data.tag}
              title={data.title}
              date={data.date}
              location={data.location}
            />
          ))}
           */}
        </div>

        <Button>View More</Button>
      </section>

      {/* About us */}
      <section>
        <h3>About Us</h3>
        <p>
        Our team consists of event planners, developers, and customer support specialists who believe in the power of live experiences. 
        We’ve built this platform to help event organizers easily create, manage, and promote their events while providing attendees with a hassle-free ticketing experience. Our mission is to connect people with the events they love in the simplest way possible, ensuring a smooth and enjoyable journey from start to finish.
        </p>
        <Button>Contact Us</Button>
      </section>

      {/* stuff section */}
      <section>
        <h3>Our Team</h3>
        <p>some text  text is heres ome text  text is here some text  text is here</p>

        {/* stuff cards */}
        <div className="">
          {STUFFS.map((item)=>(
            <>
              <h1>{item.name}</h1>
              <p>{item.role}</p>
            </>
          ))}
        </div>
      </section>

    </div>
  );
}
