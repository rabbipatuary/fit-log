import Image from "next/image";
import banner from "@/assets/banner.png"

const Banner = () => {
  return (
    <div className="flex justify-between items-center gap-4 container mx-auto p-4  rounded-4xl bg-[#15171d] ">
        <div className="space-y-6">
      <p className="text-[#c2f800]">WORKOUT LIBRARY</p>
      <h1 className="text-[40px]  font-bold">TRAIN WITH INTENT. LOG EVERY SET.</h1>
     <p className="text-[#787e87]">
  FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
  <br />
  into today&apos;s plan, and watch the week&apos;s work add up.
</p>
     <a href="#library"><button className="btn text-black btn-warning bg-[#c2f800]">Browse Workouts</button></a>
    </div>
    <div>
       <Image src={banner} alt="banner" width={400} height={400}
/>
    </div>
    </div>
  );
};

export default Banner;
