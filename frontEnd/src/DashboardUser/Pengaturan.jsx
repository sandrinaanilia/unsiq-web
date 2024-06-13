import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import DashboardUser from "../assets/img/dashboarduser.png";
import Pembayaran from "../assets/img/dollar.png";
import Pengaturan from "../assets/img/setting.png";
import Keluar from "../assets/img/keluar.png";
import Paper from "../assets/img/paper.png";

const PengaturanPage = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleHapusAkun = () => {
    setShowPopup(true);
  };

  const handleConfirmHapus = () => {
    // Tambahkan logika untuk menghapus akun di sini
    alert("Akun Anda akan dihapus.");
    setShowPopup(false);
  };

  const handleCancelHapus = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center py-8 px-10 min-h-screen">
        <div className="mb-10 mt-20 item-center">
          <div className="bg-white mb-5 mr-10 shadow-xl rounded-xl flex items-center p-4">
            <div className="relative w-16 h-16">
              <img
                src={DashboardUser}
                alt="Profile"
                className="rounded-full w-16 h-16 object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <span className="text-xl font-bold text-gray-800">
                Farhan Alamsyah
              </span>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/8 bg-white shadow-xl rounded-lg mr-10 flex flex-col max-h-96">
              <nav className="p-6">
                <ul>
                  <li>
                    <button
                      className={`flex items-center py-2 px-8 mt-3 w-full text-left ${
                        window.location.pathname === "/formulirpendaftaran"
                          ? "bg-teal-600 text-white"
                          : "text-gray-600"
                      } hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                      onClick={() =>
                        window.location.assign("/formulirpendaftaran")
                      }
                    >
                      <img
                        src={Paper}
                        alt="Formulir Pendaftaran"
                        className="w-6 h-6 mr-4"
                      />
                      <span className="font-bold">
                        Formulir Pendaftaran
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      className={`flex items-center py-2 px-8 mt-3 w-full text-left ${
                        window.location.pathname === "/pembayaran"
                          ? "bg-teal-600 text-white"
                          : "text-gray-600"
                      } hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                      onClick={() => window.location.assign("/pembayaran")}
                    >
                      <img
                        src={Pembayaran}
                        alt="Pembayaran"
                        className="w-6 h-6 mr-4"
                      />
                      <span className="font-bold">Pembayaran</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className={`flex items-center py-2 px-8 mt-3 w-full text-left ${
                        window.location.pathname === "/pengaturanprofil"
                          ? "bg-teal-600 text-white"
                          : "text-gray-600"
                      } hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                      onClick={() => window.location.assign("/pengaturan")}
                    >
                      <img
                        src={Pengaturan}
                        alt="Pengaturan Profil"
                        className="w-6 h-6 mr-4"
                      />
                      <span className="font-bold">Pengaturan Profil</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className={`flex items-center py-2 px-8 mt-3 w-full text-left ${
                        window.location.pathname === "/keluar"
                          ? "bg-teal-600 text-white"
                          : "text-gray-600"
                      } hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                      onClick={() => window.location.assign("/keluar")}
                    >
                      <img
                        src={Keluar}
                        alt="Keluar"
                        className="w-6 h-6 mr-4"
                      />
                      <span className="font-bold">Keluar</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="w-3/4 mx-auto mt-20">
          <div className="bg-teal-600 text-white text-left py-5 px-4 rounded-xl">
            <h1 className="text-base font-bold">
              Ubahlah dan klik Simpan Perubahan
            </h1>
          </div>
          <div className="bg-white p-6 mt-5 rounded-xl min-h-screen shadow-md">
            <form className="grid gap-4">
              <div className="col-span-2">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),_0_4px_6px_-2px_rgba(0,0,0,0.05)]"
                  defaultValue="farhanalamsyah@gmail.com"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700">No.Telp</label>
                <input
                  type="tel"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),_0_4px_6px_-2px_rgba(0,0,0,0.05)]"
                  defaultValue="farhanalamsyah@gmail.com"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700">
                  Ubah Kata Sandi
                </label>
                <button
                  type="button"
                  className="mt-1 px-4 py-1 bg-green-200 text-green-600 font-bold text-sm rounded-2xl"
                  onClick={() => navigate("/ubahsandi")}
                >
                  Ubah Kata Sandi
                </button>
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700">Hapus Akun</label>
                <button
                  type="button"
                  className="mt-1 px-4 py-1 bg-red-200 text-red-500 font-bold text-sm rounded-2xl"
                  onClick={handleHapusAkun}
                >
                  Hapus Akun
                </button>
              </div>
              <div className="col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>

            {/* Pop Up Konfirmasi Hapus Akun */}
            {showPopup && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
              <div className="bg-white rounded-3xl shadow-lg p-10 w-96">
                <h2 className="text-xl text-center font-bold mb-4">
                  Hapus Akun Anda
                </h2>
               
            
            
                  <div className="flex justify-center">
                    <button
                      className="border border-gray-400 hover:bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded mr-3"
                      onClick={handleCancelHapus}
                    >
                      Tidak
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
                      onClick={handleConfirmHapus}
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PengaturanPage;