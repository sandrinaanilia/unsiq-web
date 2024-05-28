import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import ImageCard from "../Components/ImageCard.jsx";
import foto1 from "../assets/img/foto 1.jpg";
import foto2 from "../assets/img/foto 2.jpg";
import foto3 from "../assets/img/foto 3.png";
import foto4 from "../assets/img/foto 4.jpg";
import foto5 from "../assets/img/foto5.jpg";
import foto6 from "../assets/img/foto6.jpg";

const Galeri = () => {
  return (
    <>
      <Navbar />
      <div className="bg-teal-600 h-80 flex items-center justify-center text-white font-bold text-5xl">Galeri</div>
      <section className="galeri py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 mx-auto ">
              <ImageCard image={foto1} title="" className="w-full h-96 rounded-lg" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <ImageCard image={foto2} title="" className="w-full h-48 rounded-lg" />
              <ImageCard image={foto3} title="" className="w-full h-48 rounded-lg" />
              <ImageCard image={foto4} title="" className="w-full h-20 rounded-lg" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageCard image={foto5} title="" className="w-full h-40 rounded-lg" />
              <ImageCard image={foto6} title="" className="w-full h-20 rounded-lg" />
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
