import Banner from "@/homepage/Banner";
import FitlogData from "@/homepage/FitlogData";


export default function Home() {

  return (
    <div  >
      <Banner></Banner>
      <div className="container mx-auto p-4 ">
     <h1 className="text-[30px] ">THE LIBRARY</h1>
     <p>Twelve lifts covering every major muscle group.</p>
    </div>
    <FitlogData></FitlogData>
    </div>
  );
}
