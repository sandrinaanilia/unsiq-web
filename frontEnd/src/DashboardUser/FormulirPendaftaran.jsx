import React, { useState, useRef } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import DashboardUser from "../assets/img/dashboarduser.png";
import Pembayaran from "../assets/img/dollar.png";
import Pengaturan from "../assets/img/setting.png";
import Keluar from "../assets/img/keluar.png";
import Paper from "../assets/img/paper.png";

const FormulirPendaftaran = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    namaLengkap: "",
    jenisKelamin: "",
    tempatLahir: "",
    tanggalLahir: "",
    nik: "",
    nisn: "",
    nim: "",
    prodi: "",
    tahunMasuk: "",
    namaAyah: "",
    namaIbu: "",
    alamatOrtu: "",
    telpOrtu: "",
    pasFoto: null,
    suratPernyataan: null,
    kategori: "reguler",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [profilePicture, setProfilePicture] = useState(DashboardUser);
  const fileInputRef = useRef(null);

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
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = () => {
    const allFieldsFilled = Object.values(formValues).every((value) => value !== "" && value !== null);

    if (allFieldsFilled) {
      setIsModalOpen(true);
    } else {
      alert("Mohon isi semua kolom pada formulir.");
    }
  };

  const handleProfilePictureChange = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePicture(event.target.result);
      };
      reader.readAsDataURL(file);
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
              <div className="absolute bottom-0 right-0 p-1 bg-white border rounded-full cursor-pointer" onClick={handleProfilePictureChange}>
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
                    <button
                      className={`flex items-center py-2 px-8 mt-3 w-full text-left ${window.location.pathname === "/pembayaran" ? "bg-teal-600 text-white" : "text-gray-600"} hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                      onClick={() => window.location.assign("/pembayaran")}
                    >
                      <img src={Pembayaran} alt="Pembayaran" className="w-6 h-6 mr-4" />
                      <span className="font-bold">Pembayaran</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className={`flex items-center py-2 px-8 mt-3 w-full text-left ${
                        window.location.pathname === "/pengaturanprofil" ? "bg-teal-600 text-white" : "text-gray-600"
                      } hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                      onClick={() => window.location.assign("/pengaturan")}
                    >
                      <img src={Pengaturan} alt="Pengaturan Profil" className="w-6 h-6 mr-4" />
                      <span className="font-bold">Pengaturan Profil</span>
                    </button>
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
            <h1 className="text-base font-bold">Isi Formulir ini dengan lengkap dan benar, lalu klik Kirim</h1>
          </div>
          <div className="flex flex-col p-6 mt-5 bg-white shadow-xl rounded-xl">
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="namaLengkap" className="block text-base font-medium text-black">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="namaLengkap"
                      name="namaLengkap"
                      placeholder="Masukan nama lengkap Anda"
                      value={formValues.namaLengkap}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="jenisKelamin" className="block text-base font-medium text-black">
                      Jenis Kelamin
                    </label>
                    <input
                      type="text"
                      id="jenisKelamin"
                      name="jenisKelamin"
                      placeholder="Masukan jenis kelamin Anda"
                      value={formValues.jenisKelamin}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="tempatLahir" className="block text-base font-medium text-black">
                      Tempat Lahir
                    </label>
                    <input
                      type="text"
                      id="tempatLahir"
                      name="tempatLahir"
                      placeholder="Masukan tempat lahir Anda"
                      value={formValues.tempatLahir}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="tanggalLahir" className="block text-base font-medium text-black">
                      Tanggal Lahir
                    </label>
                    <input
                      type="date"
                      id="tanggalLahir"
                      name="tanggalLahir"
                      value={formValues.tanggalLahir}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="nik" className="block text-base font-medium text-black">
                      NIK
                    </label>
                    <input
                      type="text"
                      id="nik"
                      name="nik"
                      placeholder="Masukan NIK Anda"
                      value={formValues.nik}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="nisn" className="block text-base font-medium text-black">
                      NISN
                    </label>
                    <input
                      type="text"
                      id="nisn"
                      name="nisn"
                      placeholder="Masukan NISN Anda"
                      value={formValues.nisn}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="nim" className="block text-base font-medium text-black">
                      NIM
                    </label>
                    <input
                      type="text"
                      id="nim"
                      name="nim"
                      placeholder="Masukan NIM Anda"
                      value={formValues.nim}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="prodi" className="block text-base font-medium text-black">
                      Program Studi
                    </label>
                    <input
                      type="text"
                      id="prodi"
                      name="prodi"
                      placeholder="Masukan program studi Anda"
                      value={formValues.prodi}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="tahunMasuk" className="block text-base font-medium text-black">
                      Tahun Masuk
                    </label>
                    <input
                      type="text"
                      id="tahunMasuk"
                      name="tahunMasuk"
                      placeholder="Masukan tahun masuk Anda"
                      value={formValues.tahunMasuk}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="namaAyah" className="block text-base font-medium text-black">
                      Nama Ayah
                    </label>
                    <input
                      type="text"
                      id="namaAyah"
                      name="namaAyah"
                      placeholder="Masukan nama ayah Anda"
                      value={formValues.namaAyah}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="namaIbu" className="block text-base font-medium text-black">
                      Nama Ibu
                    </label>
                    <input
                      type="text"
                      id="namaIbu"
                      name="namaIbu"
                      placeholder="Masukan nama ibu Anda"
                      value={formValues.namaIbu}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md boder focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="alamatOrtu" className="block text-base font-medium text-black">
                      Alamat Orang Tua
                    </label>
                    <input
                      type="text"
                      id="alamatOrtu"
                      name="alamatOrtu"
                      placeholder="Masukan alamat orang tua Anda"
                      value={formValues.alamatOrtu}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="telpOrtu" className="block text-base font-medium text-black">
                      Telepon Orang Tua
                    </label>
                    <input
                      type="text"
                      id="telpOrtu"
                      name="telpOrtu"
                      placeholder="Masukan telepon orang tua Anda"
                      value={formValues.telpOrtu}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="pasFoto" className="block text-base font-medium text-black">
                      Pas Foto
                    </label>
                    <input
                      type="file"
                      id="pasFoto"
                      name="pasFoto"
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="suratPernyataan" className="block text-base font-medium text-black">
                      Surat Pernyataan
                    </label>
                    <input
                      type="file"
                      id="suratPernyataan"
                      name="suratPernyataan"
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="kategori" className="block text-base font-medium text-black">
                      Kategori Pendaftar
                    </label>
                    <select
                      id="kategori"
                      name="kategori"
                      value={formValues.kategori}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 border-solid rounded-md shadow-md focus:border-gray-300 focus:ring-gray-300 placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    >
                      <option value="reguler">Reguler</option>
                      <option value="beasiswa">Beasiswa 5 - 10 Juz</option>
                      <option value="beasiswa">Beasiswa 11 - 20 Juz</option>
                      <option value="beasiswa">Beasiswa 21 - 29 Juz</option>
                      <option value="beasiswa">Beasiswa 30 Juz</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-center col-span-2 mt-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Kirim
                </button>
              </div>
            </form>
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center transition-opacity bg-gray-500 bg-opacity-75">
                <div className="p-6 bg-white rounded-lg shadow-xl">
                  <h2 className="mb-4 text-xl font-bold">Formulir Terkirim</h2>
                  <p className="mb-4">Terima kasih, formulir Anda telah berhasil dikirim.</p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Tutup
                  </button>
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

export default FormulirPendaftaran;
