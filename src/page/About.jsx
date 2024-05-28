import React, { useState } from 'react';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import foto9 from '../assets/img/foto9.png';
import foto8 from '../assets/img/foto8.jpg';
import foto7 from '../assets/img/foto7.png';

const About = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const activities1 = [
    { time: '03.00-04.30', activity: 'Bangun Pagi & Qiyamul Lail' },
    { time: '03.00-04.30', activity: 'Sholat Subuh berjamaah dilanjutkan setoran' },
    { time: '03.00-04.30', activity: 'Sarapan' },
    { time: '03.00-04.30', activity: 'Kuliah' },
    { time: '03.00-04.30', activity: 'Sholat Maghrib, mujahadah & ngaji kitab' },
    { time: '03.00-04.30', activity: 'Sholat Isya berjamaah' },
    { time: '03.00-04.30', activity: 'Setoran Al-Qur’an' },
    { time: '03.00-04.30', activity: 'Istirahat dan Tidur malam' },
  ];
  

  return (
    <>
      <Navbar />

      <div className="bg-teal-600 h-80 flex items-center justify-center">
        <h1 className="text-white py-36 h-10 font-bold text-4xl md:text-4xl text-center">Profil</h1>
      </div>

      <section className="biografi bg-gray-100 py-12" id="biografi">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
          <div className="biografi-content lg:w-1/2 p-10">
            <h2 className="text-3xl font-bold mb-5">BIOGRAFI PENGASUH</h2>
            <h3 className="text-4xl mb-5">Bpk K. Hayatuddin M.Ag., Alh</h3>
            <h4 classname= "text-4xl mb-2">Beliau merupakan pengasuh di Pondok Pesantren Tahfidzul Qur’an Mahasiswa UNSIQ 2, dan salah satu lulusan terbaik di program Pascasarjana di Universitas Sains Alqur’an Wonosobo.</h4>
          </div>
          <div className="biografi-img lg:w-1/1">
            <img src={foto9} alt="" className="w-full h-auto" />
          </div>
        </div>
      </section>


      <section className="container px-20 mx-auto bg-gray-100 py-12 text-black">
        <h2 className="text-2xl font-bold mb-5 text-center">Sejarah PPTQ UNSIQ 2</h2>
        <div className="flex flex-col md:flex-row items-center gap-10 bg-teal-600 text-white rounded-lg p-6">
          <img src={foto8} alt="Sejarah PPTQ UNSIQ 2" className="w-60 h-55 w-full max-w-md rounded-lg object-cover" />
          <div>
            <p className="text-white md:text-justify">
              Ide pendirian Ponpesma yang diperuntukkan bagi Mahasiswa sudah lama dipikirkan, yaitu sejak kepemimpinan Rektor pertama IIQ yaitu KH. Muntaha, Al-Hafidz. Tahun 1999, ketika berdiri Akademi Keperawatan IIQ, setiap mahasiswa Akper diwajibkan untuk tinggal di Asrama. Pada tahun 2007 UNSIQ mendapatkan bantuan bangunan Rusunawa lewat Direktorat Pekerjaan Umum RI. Bangunan tersebut kemudian dipergunakan untuk Ponpesma Putri UNSIQ, sampai saat ini jumlah santri kurang lebih 300 santri. Sepuluh tahun kemudian, pada tahun 2017 dibangunlah Rusunawa ke 2 di Kampus UNSIQ II di Krasak Mojotengah Wonosobo, Rusunawa tersebut digunakan untuk Pondok Pesantren Tahfiz Putra UNSIQ II. Pada bulan November 2018, Rusunawa sudah beroperasional sebagai Pondok Pesantren Tahfidzul Qur'an Putra UNSIQ II.
            </p>
          </div>
        </div>
      </section>

      <section className=" mx-auto px-24 bg-gray-100 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 ">
            <h2 className="text-3xl font-bold mb-4">Visi</h2>
            <p className="text-gray-700 mb-8">
              Terwujudnya pusat pemantapan akidah Islam Ahlussunah Wal jama’ah An-Nahdhiyah, pengembangan Ilmu-ilmu ke Al-Qur’anan, amal sholeh dan akhlak mulia bagi Mahasiswa UNSIQ.
            </p>
            <h2 className="text-3xl font-bold mb-4">Misi</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Mengantarkan mahasiswa memiliki kemantapan akidah Ahlussunah Wal jama’ah An-Nahdhiyah dan kedalaman spiritual, keagungan akhlak, keluasan ilmu dan kematangan profesional.</li>
              <li>Mencetak generasi Tahfidz Al-Quran dan menjaga hafalan.</li>
              <li>Memperdalam Ilmu-ilmu Al-Quran.</li>
              <li>Berketrampilan dalam membaca kitab kuning, berbahasa Arab dan Inggris.</li>
            </ul>
          </div>
          <img src={foto7} alt="Foto PPTQ UNSIQ 2" className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl object-cover rounded-lg" />
        </div>
        <div className="flex justify-end grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 ">
          <button onClick={handleShowPopup} className="bg-teal-600 text-white text-center py-4 rounded-lg cursor-pointer hover:bg-teal-700">Aktivitas Harian</button>
          <button onClick={handleShowPopup} className="bg-teal-600 text-white text-center py-4 rounded-lg cursor-pointer hover:bg-teal-700">Aktivitas Bulanan</button>
          </div>
          <div className="grid flex justify-end grid-cols-1 md:grid-cols-4 gap-4 mt-10">
          <button onClick={handleShowPopup} className="bg-teal-600 text-white text-center py-4 rounded-lg cursor-pointer hover:bg-teal-700">Aktivitas ekstrakurikuler</button>
        </div>

      </section>

      <section className="bg-gray-100 text-center py-8">
        <div className="bg-teal-600 text-white text-center py-4 rounded-lg max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold">Daftar sekarang untuk Penerimaan Santri Baru</h2>
          <p className="text-lg">Pondok Pesantren Tahfidzul Qur’an Mahasiswa UNSIQ 2 Tahun 2024 / 2025</p>
        </div>
      </section>

      {/* Pop-up untuk aktivitas harian */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4">AKTIVITAS HARIAN</h2>
            <div className="overflow-y-auto max-h-96">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-bold text-gray-700 p-2">Waktu</th>
                    <th className="text-left font-bold text-gray-700 p-2">Aktivitas</th>
                  </tr>
                </thead>
                <tbody>
                  {activities1.map((activity, index) => (
                    <tr key={index}>
                      <td className="text-left p-2">{activity.time}</td>
                      <td className="text-left p-2">{activity.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button onClick={handleClosePopup} className="bg-teal-600 text-white text-center py-2 px-4 rounded-lg cursor-pointer hover:bg-teal-700">Tutup</button>
          </div>
        </div>
      )}


      <Footer />
    </>
  );
};

export default About;