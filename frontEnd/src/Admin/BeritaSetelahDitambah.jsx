import React, { useState } from "react";
import arrow from "../assets/img/arrow.png";
import Sidebar from "../Components/sidebar";
import Profil from "../assets/img/hamam.png";
import searchIcon from "../assets/img/search.png";
import fotoberita1 from "../assets/img/foto besar.jpg";
import fotoberita2 from "../assets/img/berita1.jpg";
import fotoberitabaru from "../assets/img/berita4.jpg";
import view from "../assets/img/view.png";
import edit from "../assets/img/edit.png";
import deleteicon from "../assets/img/delete.png";

const BeritaSetelahDitambah = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  const handleDeleteConfirm = () => {
    // Logic to handle delete action
    setShowDeletePopup(false);
  };

  const handleDeleteCancel = () => {
    setShowDeletePopup(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        {/* Top Bar */}
        <div className="flex items-center justify-between bg-white shadow-lg p-4">
          <div className="relative">
            <button className="absolute left-2 top-2">
              <img src={searchIcon} alt="Search" className="w-6 h-6" />
            </button>
            <input type="text" placeholder="Search..." className="bg-gray-100 pl-10 p-2 rounded-lg focus:outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="flex items-center cursor-pointer">
            <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full mr-2" />
            <span className="text-black">Abdurohman Hamam</span>
            <img src={arrow} alt="Dropdown Arrow" className="w-2 h-2 rotate-180 ml-2" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">Berita</h1>
            <span className="text-teal-600 font-bold cursor-pointer">+ Tambah Berita</span>
          </header>

          <div className="bg-white p-6 rounded-lg shadow">
            {/* News Item 1 */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={fotoberitabaru} alt="News 1" className="h-16 w-16 rounded mr-4" />
                <div>
                  <h2 className="text-lg font-medium">PPTQ Unsiq 2 Berhasil Membawa 2 Piala di ajang lomba Hari Santri</h2>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button>
                  <img src={view} alt="View" className="h-6 w-6" />
                </button>
                <button>
                  <img src={edit} alt="Edit" className="h-6 w-6" />
                </button>
                <button>
                  <img src={deleteicon} alt="Delete" className="h-6 w-6" />
                </button>
              </div>
            </div>
            {/* News Item 2 */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={fotoberita1} alt="News 2" className="h-16 w-16 rounded mr-4" />
                <div>
                  <h2 className="text-lg font-medium">Pelaksanaan Pengajian Malam Nuzulul Qur'an</h2>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button>
                  <img src={view} alt="View" className="h-6 w-6" />
                </button>
                <button>
                  <img src={edit} alt="Edit" className="h-6 w-6" />
                </button>
                <button>
                  <img src={deleteicon} alt="Delete" className="h-6 w-6" />
                </button>
              </div>
            </div>
            {/* News Item 3 */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={fotoberita2} alt="News 3" className="h-16 w-16 rounded mr-4" />
                <div>
                  <h2 className="text-lg font-medium">PPTQ Unsiq 2 Berhasil Membawa 2 Piala di ajang lomba Hari Santri</h2>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button>
                  <img src={view} alt="View" className="h-6 w-6" />
                </button>
                <button>
                  <img src={edit} alt="Edit" className="h-6 w-6" />
                </button>
                <button>
                  <img src={deleteicon} alt="Delete" className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Popup */}
      {showDeletePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>Apakah Anda yakin ingin menghapus postingan ini?</p>
            <div className="flex justify-end mt-4">
              <button className="mr-2 text-red-500" onClick={handleDeleteConfirm}>
                Ya
              </button>
              <button onClick={handleDeleteCancel}>Tidak</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeritaSetelahDitambah;
