import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import MainProduct from "@/components/MainProduct";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";




export default function Home() {

  

  return (
    <div className='w-full h-dvh'>
      <Navbar />
      <div className="z-10 w-full absolute top-16 flex flex-col items-center bg-slate-800">
        <Banner />
        <MainProduct />
        <div className="bg-img-2 w-full flex justify-center">
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  );
}
