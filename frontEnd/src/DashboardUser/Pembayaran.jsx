import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import axios from "axios";
import DashboardUser from "../assets/img/dashboarduser.png";
import PembayaranIcon from "../assets/img/dollar.png";
import Pengaturan from "../assets/img/setting.png";
import Keluar from "../assets/img/keluar.png";
import Paper from "../assets/img/paper.png";
import rincianbiaya from "../assets/img/syarat-biaya.pdf";

const Pembayaran = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [profilePicture, setProfilePicture] = useState(DashboardUser);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleAccountClick = () => {
    alert("Nomor rekening BCA: 356373738833338");
  };

  const handleDetailsClick = () => {
    window.open(rincianbiaya, "_blank");
  };

  const handleUploadBuktiPembayaran = () => {
    fileInputRef.current.click();
  };

  const handleHapusAkun = () => {
    setShowPopup(true);
  };

  const handleConfirmHapus = () => {
    // Add logic to delete account here
    alert("Akun Anda akan dihapus.");
    setShowPopup(false);
  };

  const handleCancelHapus = () => {
    setShowPopup(false);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.status === 200) {
          setUploadStatus("Upload successful");
          setIsFileUploaded(true);
        } else {
          setUploadStatus("Upload failed");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        setUploadStatus("Upload failed");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center min-h-screen px-10 py-8">
        <div className="mt-20 mb-10 item-center">
          <div className="flex items-center p-4 mb-5 mr-10 bg-white shadow-xl rounded-xl">
            <div className="relative w-16 h-16">
              <img src={profilePicture} alt="Profile" className="object-cover w-16 h-16 rounded-full" />
              <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} accept="image/*" />
              <div className="absolute bottom-0 right-0 p-1 bg-white border rounded-full cursor-pointer" onClick={handleUploadBuktiPembayaran}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <span className="text-xl font-bold text-gray-800">Farhan Alamsyah</span>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col mr-10 bg-white rounded-lg shadow-xl w-1/8 max-h-96">
              <nav className="p-6">
                <ul>
                  <li>
                    <button
                      className={`flex items-center py-2 px-8 mt-3 w-full text-left ${
                        window.location.pathname === "/formulirpendaftaran" ? "bg-teal-600 text-white" : "text-gray-600"
                      } hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                      onClick={() => window.location.assign("/formulirpendaftaran")}
                    >
                      <img src={Paper} alt="Formulir Pendaftaran" className="w-6 h-6 mr-4" />
                      <span className="font-bold">Formulir Pendaftaran</span>
                    </button>
                  </li>
                  <li>
                    <NavLink to="/pembayaran" activeClassName="bg-teal-600 text-white" className="flex items-center justify-start w-full px-8 py-2 mt-3 text-left text-gray-600 rounded-lg hover:bg-teal-600 hover:text-white">
                      <img src={PembayaranIcon} alt="Pembayaran" className="w-6 h-6 mr-4" />
                      <span className="font-bold">Pembayaran</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/pengaturan" activeClassName="bg-teal-600 text-white" className="flex items-center justify-start w-full px-8 py-2 mt-3 text-left text-gray-600 rounded-lg hover:bg-teal-600 hover:text-white">
                      <img src={Pengaturan} alt="Pengaturan Profil" className="w-6 h-6 mr-4" />
                      <span className="font-bold">Pengaturan Profil</span>
                    </NavLink>
                  </li>
                  <li>
                    <button className={`flex items-center py-2 px-8 mt-3 w-full text-left ${showPopup ? "bg-teal-600 text-white" : "text-gray-600"} hover:bg-teal-600 hover:text-white rounded-lg justify-start`} onClick={handleHapusAkun}>
                      <img src={Keluar} alt="Keluar" className="w-6 h-6 mr-4" />
                      <span className="font-bold">Keluar</span>
                    </button>
                    {showPopup && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                        <div className="p-10 bg-white shadow-lg rounded-3xl w-96">
                          <h2 className="mb-4 text-xl font-bold text-center">Keluar dari Akun Anda?</h2>
                          <div className="flex justify-center">
                            <button className="px-6 py-2 mr-3 font-bold text-gray-800 border border-gray-400 rounded hover:bg-gray-200" onClick={handleCancelHapus}>
                              Tidak
                            </button>
                            <button className="px-6 py-2 font-bold text-white bg-teal-600 rounded hover:bg-teal-700" onClick={handleConfirmHapus}>
                              Keluar
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="w-3/4 mx-auto mt-20">
          <div className="px-4 py-5 text-left text-white bg-teal-600 rounded-xl">
            <h1 className="text-base font-bold">Upload dan klik Simpan Perubahan </h1>
          </div>
          <div className="min-h-screen p-6 mt-5 bg-white shadow-md rounded-xl">
            <h1 className="ml-0 text-xl font-bold text-black">Admin UNSIQ II</h1>
            <h4 className="mb-2 text-gray-500">04 Mei 2024</h4>
            <p>
              Untuk calon santri 2024/2025 silahkan membayar daftar ulang paling lambat Senin, 19 Agustus 2024 untuk biaya daftar ulang silahkan transfer ke no rek BCA berikut{" "}
              <button onClick={handleAccountClick} className="font-bold text-teal-600">
                356373738833338
              </button>
              .
            </p>
            <p>
              Untuk rincian biaya bisa lihat{" "}
              <button onClick={handleDetailsClick} className="font-bold text-teal-600">
                disini
              </button>
            </p>

            <button className="flex items-center justify-center px-4 py-2 mt-4 text-white bg-teal-600 rounded-md shadow-xl" onClick={handleUploadBuktiPembayaran}>
              Upload Bukti Pembayaran
            </button>
            <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />
            {uploadStatus && <p className="mt-2 text-red-500">{uploadStatus}</p>}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pembayaran;
