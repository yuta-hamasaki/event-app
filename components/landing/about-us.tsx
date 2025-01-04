import Button from "../Button"
import { STUFFS  } from '@/lib/constats.index';
import StaffCard from '@/components/StaffCard';


export function AboutUs() {
  return (
  <>
    <section className="flex flex-col items-center justify-center gap-8 py-32 bg-linkWater">
      <h3 className="text-4xl font-bold px-9 font-plus-jakarta-sans tracking-tight">
        About{" "}
        <span className="text-blue-700 font-plus-jakarta-sans tracking-tight">
          Us
        </span>
      </h3>
      <p className="w-full md:w-1/2 text-center px-9">
        Our team consists of event planners, developers, and customer support
        specialists who believe in the power of live experiences. We've built
        this platform to help event organizers easily create, manage, and
        promote their events while providing attendees with a hassle-free
        ticketing experience. Our mission is to connect people with the events
        they love in the simplest way possible, ensuring a smooth and
        enjoyable journey from start to finish.
      </p>
      <Button variant="yellow"
      >Contact Us</Button>
    </section>
        <section className="w-full h-screen flex flex-col items-center px-9">
        <div className="flex flex-col gap-2 items-center py-16">
          <h3 className="text-4xl font-bold font-plus-jakarta-sans tracking-tight">
            Our Team
          </h3>
          <p className="text-center text-gray-600">
            some text text is here some text text is here some text text is here
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          {STUFFS.map((staff) => (
            <StaffCard staff={staff} key={staff.id} />
          ))}
        </div>
      </section>
    </> 
  );
}
