import React, { useState } from "react";
import arrow from "../assets/img/arrow.png";
import Sidebar from "../Components/sidebar";
import Profil from "../assets/img/hamam.png";
import searchIcon from "../assets/img/search.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Pengumuman = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [announcements, setAnnouncements] = useState([
    { id: 1, text: "Silakan lakukan pembayaran daftar ulang dan upload bukti pembayaran sebelum 20 Mei 2024", date: "2024-05-04", autoMessage: "Pesan Otomatis" },
    { id: 2, text: "Pendaftaran Anda sudah berhasil", date: "2024-05-04", autoMessage: "Pesan Otomatis" },
  ]);

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(null);
  const [newAnnouncementText, setNewAnnouncementText] = useState("");
  const [newAnnouncementDate, setNewAnnouncementDate] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [announcementToDelete, setAnnouncementToDelete] = useState(null);

  const openSettingsPopup = () => {
    setIsSettingsPopupOpen(true);
  };

  const closeSettingsPopup = () => {
    setIsSettingsPopupOpen(false);
  };

  const openLogoutPopup = () => {
    setIsLogoutPopupOpen(true);
  };

  const closeLogoutPopup = () => {
    setIsLogoutPopupOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const toggleChangePassword = () => {
    setIsChangePasswordOpen(!isChangePasswordOpen);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordError("Kata sandi baru tidak cocok");
      return;
    }

    setPasswordError("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsChangePasswordOpen(false);
  };

  const handleEditAnnouncement = (announcement) => {
    setCurrentAnnouncement(announcement);
    setNewAnnouncementText(announcement.text);
    setNewAnnouncementDate(announcement.date);
    setIsEditPopupOpen(true);
  };

  const handleDeleteAnnouncement = (announcementId) => {
    setAnnouncements(announcements.filter((ann) => ann.id !== announcementId));
    setShowDeleteConfirmation(false);
  };

  const handleAddAnnouncement = () => {
    setCurrentAnnouncement(null);
    setNewAnnouncementText("");
    setNewAnnouncementDate("");
    setIsEditPopupOpen(true);
  };

  const handleSaveAnnouncement = (e) => {
    e.preventDefault();

    if (currentAnnouncement) {
      setAnnouncements(announcements.map((ann) => (ann.id === currentAnnouncement.id ? { ...ann, text: newAnnouncementText, date: newAnnouncementDate } : ann)));
    } else {
      const newAnnouncement = {
        id: announcements.length + 1,
        text: newAnnouncementText,
        date: newAnnouncementDate,
        autoMessage: "Pesan Otomatis",
      };
      setAnnouncements([...announcements, newAnnouncement]);
    }
    setIsEditPopupOpen(false);
  };

  const handleConfirmDelete = (announcementId) => {
    setAnnouncementToDelete(announcementId);
    setShowDeleteConfirmation(true);
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between bg-white shadow-lg p-4">
          <div className="relative">
            <button className="absolute left-2 top-2">
              <img src={searchIcon} alt="Search" className="w-6 h-6" />
            </button>
            <input type="text" placeholder="Search..." className="bg-gray-100 pl-10 p-2 rounded-lg focus:outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="relative">
            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
              <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full mr-2" />
              <span className="text-black">Abdurohman Hamam</span>
              <img src={arrow} alt="Dropdown Arrow" className={`w-2 h-2 ml-2 ${isDropdownOpen ? "rotate-0" : "rotate-180"}`} />
            </div>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openPopup}>
                  Profile
                </li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openSettingsPopup}>
                  Pengaturan
                </li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openLogoutPopup}>
                  Keluar
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="p-4 font-poppins min-h-screen">
          <div className="bg-white shadow-md rounded-lg overflow-x-auto p-4 h-full">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-bold mb-4 text-black">
                <span style={{ backgroundColor: "teal-600", padding: "0.2rem 0.5rem", borderRadius: "3rem", color: "black" }}>Pengumuman</span>
              </h1>
            </div>
            <button className="text-teal-600 font-bold mb-4" onClick={handleAddAnnouncement} style={{ display: "block", textAlign: "right" }}>
              + Tambah Pengumuman
            </button>
            <div className="space-y-2">
              <div className="space-y-4">
                {announcements.map((ann) => (
                  <div key={ann.id} className="bg-gray-200 p-4 rounded-lg shadow-md flex justify-between items-center">
                    <div>
                      <p>{ann.text}</p>
                      <p className="text-sm text-black font-bold mb-4">{ann.date}</p>
                    </div>
                    <div className="flex space-x-4">
                      <button onClick={() => handleEditAnnouncement(ann)} className="bg-green-500 text-white px-2 py-1 rounded">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button onClick={() => handleConfirmDelete(ann.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {isPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Profil</h2>
              <form className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full" />
                  <span className="text-black font-bold">Admin</span>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="namaLengkap">Nama Lengkap:</label>
                  <input type="text" id="namaLengkap" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Abdurohman Hamam" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="abdurohman@gmail.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="telepon">No Telepon:</label>
                  <input type="tel" id="telepon" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="081234567890" />
                </div>
                <div className="flex justify-between">
                  <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={closePopup}>
                    Tutup
                  </button>
                  <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isSettingsPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Pengaturan</h2>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="bahasa">Bahasa:</label>
                  <select id="bahasa" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option value="indonesia">Indonesia</option>
                    <option value="english">English</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="notifikasi">Notifikasi:</label>
                  <select id="notifikasi" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option value="aktif">Aktif</option>
                    <option value="nonaktif">Nonaktif</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="tema">Tema:</label>
                  <select id="tema" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option value="terang">Terang</option>
                    <option value="gelap">Gelap</option>
                  </select>
                </div>
                <div className="flex justify-between">
                  <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={closeSettingsPopup}>
                    Tutup
                  </button>
                  <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isLogoutPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Keluar</h2>
              <p>Anda yakin ingin keluar?</p>
              <div className="flex justify-between mt-4">
                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={closeLogoutPopup}>
                  Tidak
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Ya, Keluar</button>
              </div>
            </div>
          </div>
        )}

        {isEditPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">{currentAnnouncement ? "Edit Pengumuman" : "Tambah Pengumuman"}</h2>
              <form className="flex flex-col gap-4" onSubmit={handleSaveAnnouncement}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="pengumuman">Pengumuman:</label>
                  <textarea id="pengumuman" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" value={newAnnouncementText} onChange={(e) => setNewAnnouncementText(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="tanggal">Tanggal:</label>
                  <input type="date" id="tanggal" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" value={newAnnouncementDate} onChange={(e) => setNewAnnouncementDate(e.target.value)} />
                </div>
                <div className="flex justify-between">
                  <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setIsEditPopupOpen(false)}>
                    Batal
                  </button>
                  <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDeleteConfirmation && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Konfirmasi Hapus</h2>
              <p>Apakah Anda yakin ingin menghapus pengumuman ini?</p>
              <div className="flex justify-between mt-4">
                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setShowDeleteConfirmation(false)}>
                  Batal
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDeleteAnnouncement(announcementToDelete)}>
                  Hapus
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pengumuman;
