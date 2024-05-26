import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import DashboardUser from "../assets/img/dashboarduser";

const Pembayaran = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-64 bg-white h-screen shadow-lg">
          <div className="p-4">
            <h2 className="text-xl font-semibold">PPTQ UNSIQ II</h2>
          </div>
          <nav className="mt-10">
            <a href="#" className="flex items-center py-2 px-8 text-gray-700 bg-gray-200 rounded-lg">
              <span className="mx-4 font-medium">Formulir Pendaftaran</span>
            </a>
            <a href="#" className="flex items-center py-2 px-8 mt-3 text-gray-600 hover:bg-gray-200 hover:text-gray-700 rounded-lg">
              <span className="mx-4 font-medium">Pembayaran</span>
            </a>
            <a href="#" className="flex items-center py-2 px-8 mt-3 text-gray-600 hover:bg-gray-200 hover:text-gray-700 rounded-lg">
              <span className="mx-4 font-medium">Pengaturan Profil</span>
            </a>
            <a href="#" className="flex items-center py-2 px-8 mt-3 text-gray-600 hover:bg-gray-200 hover:text-gray-700 rounded-lg">
              <span className="mx-4 font-medium">Keluar</span>
            </a>
          </nav>
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold">Admin UNSIQ II</h1>
            <div className="flex items-center">
              <img src={DashboardUser} alt="Profile" className="rounded-full" />
              <span className="ml-2 text-gray-700">Farhan Alamsyah</span>
            </div>
          </div>

          <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
            <p>04 Mei 2024</p>
            <p>
              Untuk calon santri 2024/2025 silahkan membayar daftar ulang maksimal Senin, 20 Mei 2024 untuk biaya daftar ulang silahkan transfer ke no rek BCA berikut 36537373883338. Untuk rincian biaya bisa lihat di{" "}
              <a href="#" className="text-blue-500">
                sini
              </a>
              .
            </p>
            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-600">Upload Bukti Pembayaran</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pembayaran;
