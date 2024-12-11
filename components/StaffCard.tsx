import Image from "next/image";
import { StaffInfo } from "@/types/staff";

type StaffCardProps = {
  staff: StaffInfo;
};

const StaffCard = ({ staff }: StaffCardProps) => {
  console.log("staff", staff);

  return (
    <div
      className="flex flex-col justify-end bg-cover bg-center text-center rounded-md w-[320px] h-[350px]"
      style={{
        backgroundImage: `url(${staff.img})`,
      }}
    >
      <div className="py-1 text-white bg-gray-800 opacity-70 rounded-b-md">
        <h3 className="text-2xl font-bold">{staff.name}</h3>
        <p className="text-sm">{staff.role}</p>
      </div>
    </div>
  );
};

export default StaffCard;
