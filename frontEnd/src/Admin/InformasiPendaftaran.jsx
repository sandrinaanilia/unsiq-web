import React, { useState } from "react";
import arrow from "../assets/img/arrow.png";
import Sidebar from "../Components/sidebar";
import Profil from "../assets/img/hamam.png";
import searchIcon from "../assets/img/search.png";
import doc from "../assets/img/doc.png";

const InformasiPendaftaran = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false); // State for logout popup
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false); // State for change password popup
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  const [judul, setJudul] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleJudulChange = (e) => setJudul(e.target.value);
  const handleTanggalChange = (e) => setTanggal(e.target.value);
  const handleDeskripsiChange = (e) => setDeskripsi(e.target.value);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const onClose = () => setShowEditConfirmation(false);

  const handleDelete = () => {
    console.log("Deleting santri:", selectedSantri);
    setShowDeleteConfirmation(false);
  }

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  }
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
    // Lakukan validasi kata sandi baru
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
                {/* Open logout popup */}
              </ul>
            )}
          </div>
        </div>

        {/* Popup for Profile */}
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
                  <input type="text" id="namaLengkap" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Abdurohman Hamam" value="Abdurohman Hamam" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="abdurohman@gmail.com" value="Abdurohman@gmail.com" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="noTelp">Nomor Telepon:</label>
                  <input type="tel" id="noTelp" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="08977654323" value="08977654323" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="jabatan">Jabatan:</label>
                  <input type="text" id="jabatan" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Sekretaris 2" value="Sekretaris 2" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="kataSandi">Kata Sandi:</label>
                  <input type="password" id="kataSandi" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="*********" value="Abd*******98" readOnly />
                </div>
                <div className="flex justify-end">
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={closePopup}>
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {/* Popup for Settings */}
        {isSettingsPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Pengaturan</h2>
              <form className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full" />
                  <span className="text-black font-bold">Admin</span>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="namaLengkap">Nama Lengkap:</label>
                  <input type="text" id="namaLengkap" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Abdurohman Hamam" value="Abdurohman Hamam" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Ubah Kata Sandi:</label>
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={toggleChangePassword}>
                    Ubah Kata Sandi
                  </button>
                </div>
                <div className="flex justify-end">
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={closeSettingsPopup}>
                    Tutup
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Popup for Change Password */}
        {isChangePasswordOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Ubah Kata Sandi</h2>
              <form onSubmit={handleChangePassword} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="currentPassword">Kata Sandi Saat Ini:</label>
                  <input
                    type="password"
                    id="currentPassword"
                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Masukkan kata sandi saat ini"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="newPassword">Kata Sandi Baru:</label>
                  <input
                    type="password"
                    id="newPassword"
                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Masukkan kata sandi baru"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="confirmPassword">Konfirmasi Kata Sandi Baru:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Konfirmasi kata sandi baru"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {passwordError && <span className="text-red-500">{passwordError}</span>}
                </div>
                <div className="flex justify-end gap-4">
                  <button type="button" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={toggleChangePassword}>
                    Batal
                  </button>
                  <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="p-4 font-poppins">
          <div className="bg-white shadow-md rounded-lg overflow-x-auto p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Berkas Pendaftaran</h2>
              <button className="text-teal-500 font-bold text-l">+ Tambah Postingan</button>
            </div>
            <div className="space-y-4">
              {["Brosur Pondok PPTQ Mahasiswa Unsiq 2", "Syarat pendaftaran dan materi tes", "Surat Pernyataan", "Rincian Biaya daftar ulang"].map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-200 p-4 rounded-lg">
                  <div className="flex items-center">
                    <img src={doc} alt="" className="w-6 h-6 mr-4" />
                    <span className="text-l font-semibold ">{item}</span>
                  </div>
                  <div className="flex space-x-2">
                  <li>
                          <button onClick={() => { 
                            setShowEditConfirmation(true);
                            setSelectedSantri(santri); 
                          }} className="bg-green-500 text-white px-2 py-1 rounded">
                            Edit
                          </button>
                        </li>
                        <li>
                          <button onClick={() => {
                            setShowDeleteConfirmation(true);
                            setSelectedSantri(santri);
                          }} className="bg-red-500 text-white px-2 py-1 rounded">
                            Delete
                          </button>
                        </li>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popup for Logout */}
        {isLogoutPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Keluar dari akun anda?</h2>
              <div className="flex justify-end gap-4">
                <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={closeLogoutPopup}>
                  Tidak
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={() => {
                    // Add your logout logic here
                    console.log("Logout!");
                    closeLogoutPopup();
                  }}
                >
                  Keluar
                </button>
              </div>
            </div>
          </div>
        )}
          {showDeleteConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p>Apa anda yakin ingin menghapus</p>
              <p className="text-center">postingan ini?</p>

              <div className="flex justify-end mt-6">
                <button onClick={handleCancelDelete} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
                <button onClick={handleDelete} className="px-4 py-2 bg-red-500  text-white rounded">Delete</button>
              </div>
            </div>
          </div>
        )}

      {showEditConfirmation && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-5xl">
            <h2 className="text-2xl text-teal-600 font-bold mb-4">Tambah Informasi</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex mb-4 space-x-4">
                <label htmlFor="judul" className="block text-gray-700 text-sm font-bold mb-2">
                  Judul
                </label>
                <input
                  type="text"
                  id="judul"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={judul}
                  onChange={handleJudulChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="tanggal" className="block text-gray-700 text-sm font-bold mb-2">
                  Tanggal
                </label>
                <input
                  type="date"
                  id="tanggal"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={tanggal}
                  onChange={handleTanggalChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="deskripsi" className="block text-gray-700 text-sm font-bold mb-2">
                  Deskripsi
                </label>
                <textarea
                  id="deskripsi"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={deskripsi}
                  onChange={handleDeskripsiChange}
                />
              </div>
              <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="photo">
                Tambah Foto
              </label>
                <input
                  type="file"
                  id="file"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleFileChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-400 border border-radius-teal-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-teal-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Unggah
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
      </div>
  )
}

export default InformasiPendaftaran;
