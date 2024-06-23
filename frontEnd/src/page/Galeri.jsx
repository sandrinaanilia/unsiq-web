import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import ImageCard from "../Components/ImageCard.jsx";
import galeribsr from "../assets/img/galerigede.png";
import galeri1 from "../assets/img/galeri1.png";
import galeri3 from "../assets/img/galeri3.png";
import galeri2 from "../assets/img/galeri2.png";
import galeri4 from "../assets/img/galeri4.png";
import galeri5 from "../assets/img/galeri5.png";
import galeri6 from "../assets/img/galeri6.png";
import galeri7 from "../assets/img/galeri7.png";
import galeri8 from "../assets/img/galeri8.png";
import galeri9 from "../assets/img/galeri9.png";

const Galeri = () => {
  return (
    <>
      <Navbar />
      <div className="bg-teal-600 h-80 flex items-center justify-center">
        <h1 className="text-white py-36 h-10 font-bold text-4xl md:text-4xl text-center">Galeri</h1>
      </div>
      <section className="galeri py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex justify-center">
              <ImageCard image={galeribsr} title="" className="h-120 w-full rounded-lg mt-8" />
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-4">
                <ImageCard image={galeri1} title="" className="w-full h-80 rounded-lg" />
                <ImageCard image={galeri2} title="" className="w-full h-80 rounded-lg" />
                <ImageCard image={galeri3} title="" className="w-full h-80 rounded-lg" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-4">
                <ImageCard image={galeri4} title="" className="w-full h-80 rounded-lg" />
                <ImageCard image={galeri5} title="" className="w-full h-80 rounded-lg" />
                <ImageCard image={galeri6} title="" className="w-full h-80 rounded-lg" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-4">
                <ImageCard image={galeri7} title="" className="w-full h-100 rounded-lg" />
                <ImageCard image={galeri8} title="" className="w-full h-80 rounded-lg" />
                <ImageCard image={galeri9} title="" className="w-full h-80 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        <div className="next-content flex justify-center mt-8">
          <a href="#" className="bg-teal-600 hover:bg-white text-white hover:text-black border hover:border-black font-semibold transition p-2 rounded-full">
            Selanjutnya
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Galeri;
