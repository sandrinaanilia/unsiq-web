import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import ImageCard from "../Components/ImageCard.jsx";
import foto1 from "../assets/img/foto 1.jpg";
import foto2 from "../assets/img/foto2.png";
import foto3 from "../assets/img/foto3.png";
import foto10 from "../assets/img/foto10.png";
import foto11 from "../assets/img/foto11.png";
import foto12 from "../assets/img/foto12.png";
import foto13 from "../assets/img/foto13.png";

const Galeri = () => {
  return (
    <>
      <Navbar />
      <div className="bg-teal-600 h-80 flex items-center justify-center">
        <h1 className="text-white py-36 h-10 font-bold text-4xl md:text-4xl text-center">Galeri</h1>
      </div>
      <section className="galeri py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 mx-auto ">
              <ImageCard image={foto1} title="" className="w-full h-96 rounded-lg" />
            </div>
            <div className="grid grid-cols-3 gap-1 justify-center">
              <ImageCard image={foto2} title="" className="w-full h-40 rounded-lg" />
              <ImageCard image={foto3} title="" className="w-full h-40 rounded-lg" />
              <ImageCard image={foto10} title="" className="w-full h-40 rounded-lg" />
            </div>
            <div className="grid grid-cols-3 gap-1 justify-center">
              <ImageCard image={foto11} title="" className="w-full h-40 rounded-lg" />
              <ImageCard image={foto12} title="" className="w-full h-40 rounded-lg" />
              <ImageCard image={foto13} title="" className="w-full h-40 rounded-lg" />
            </div>
          </div>
        </div>
        <div className="next-content flex justify-center mt-8">
          <a href="#" className="bg-teal-600 hover:bg-white text-white hover:text-black border hover:border-black font-semibold transition p-2 rounded">
            Selanjutnya
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Galeri;
