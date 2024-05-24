import React from "react";
import gambar from "../assets/img/LOGO.png";
import email from "../assets/img/email.jpeg";
import youtube from "../assets/img/Youtube.jpg";
import buku from "../assets/img/buku.png";
import quran from "../assets/img/tulis.png";
import ceramah from "../assets/img/ceramah.png";
import masjid from "../assets/img/masjid.png";
import gedung from "../assets/img/gedung.png";
import kamar from "../assets/img/kamar.jpg" ;
import aula from "../assets/img/aula.jpg";
import berita2 from "../assets/img/berita2.jpg";
import berita3 from "../assets/img/berita3.jpg";
import berita4 from "../assets/img/berita4.jpg";
import alumni2 from "../assets/img/alumni2.png";
import alumni3 from "../assets/img/alumni3.png"
import masjid2 from "../assets/img/MASJID2.jpg";


const Beranda = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={gambar} alt="PPTQ UNSIQ 2" />
          <span className="logo-text">PPTQ UNSIQ 2</span>
        </div>
        <ul className="menu">
          <li>
            <a href="beranda.html">Beranda</a>
          </li>
          <li className="dropdown">
            <a href="#">Profil</a>
            <span className="material-icon dropdown-icon"></span>
            <ul className="dropdown-menu">
              <li>
                <a href="profil.html">Tentang Kami</a>
              </li>
              <li>
                <a href="galeri.html">Galeri</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#c2">Berita</a>
          </li>
          <li>
            <a href="info.html">Pendaftaran</a>
          </li>
          <li>
            <a href="forum.html">Forum</a>
          </li>
        </ul>
        <div className="login">
          <a href="login.html" className="login-btn">
            Masuk
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="hero-title">Selamat Datang di Pondok Pesantren Tahfidzul Qur’an Mahasiswa Unsiq II</h1>
          <p className="address">Jl. Kh Abdurrohman Wahid, desa Krasak, Kecamatan Mojotengah Kabupaten Wonosobo</p>
          <p className="announcement">Penerimaan Santri baru tahun ajaran 2024/2025</p>
          <a href="info.html" className="cta-button">
            Daftar Sekarang
          </a>
        </div>
      </section>

      <section className="about-us">
        <div className="text-content">
          <h2 className="section-title">TENTANG KAMI</h2>
          <h3 className="video-title">Video Profil Pondok</h3>
          <p className="description">Cuplikan video profil Pondok Pesantren Tahfidzul Qur’an mahasiswa yang terletak di Kampus 2 UNSIQ Wonosobo</p>
          <a href="https://youtu.be/AIOskYdYOj4?si=y6sqpsQchFuThPLZ" target="_blank" className="play-button">
            Play
          </a>
        </div>
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AIOskYdYOj4?si=y6sqpsQchFuThPLZ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <section className="program-unggulan">
        <h2 className="section-title">PROGRAM UNGGULAN</h2>
        <div className="cards">
          <div className="card">
            <img src={buku}alt="Tahfidzul Qur'an" />
            <p>Tahfidzul Qur'an</p>
          </div>
          <div className="card">
            <img src={quran} alt="Kitab Kuning" />
            <p>Kitab Kuning</p>
          </div>
          <div className="card">
            <img src={ceramah} alt="Public Speaking" />
            <p>Public Speaking</p>
          </div>
          <div className="card">
            <img src={masjid} alt="Arab & Inggris" />
            <p>Arab & Inggris</p>
          </div>
        </div>
      </section>

      <section className="daftar-section">
        <div className="daftar-content">
          <h2 className="title-daftar">INFORMASI PENDAFTARAN</h2>
          <div className="daftar">
            <div className="daftar-text">
              <h2>Telah Dibuka Penerimaan Santri Baru</h2>
              <h3>Pondok Pesantren Tahfidzul Qur’an Mahasiswa UNSIQ 2 Tahun 2024 / 2025</h3>
            </div>
            <a href="info.html" className="daftar-button">
              Daftar Sekarang
            </a>
          </div>
        </div>
      </section>

      <div className="facilities">
        <h2>Fasilitas</h2>
        <p>Fasilitas di PPTQ Mahasiswa UNSIQ 2</p>
        <div className="facility-container">
          <div className="facility">
            <img src= {gedung} alt="Gedung Pesantren" />
            <h3>Gedung Pesantren</h3>
            <p>Gedung untuk menunjang para santri dalam berkehidupan sehari-hari</p>
          </div>
          <div className="facility">
            <img src={masjid2}alt="Masjid" />
            <h3>Masjid</h3>
            <p>Masjid untuk tempat beribadah dan kegiatan mengaji para santri selama di pondok</p>
          </div>
          <div className="facility">
            <img src={kamar} alt="Kamar Santri" />
            <h3>Kamar Santri</h3>
            <p>1 kamar untuk 4 orang. Tempat tidur susun dilengkapi dengan kasur busa, almari dan meja belajar</p>
          </div>
          <div className="facility">
            <img src={aula} alt="Aula Pertemuan" />
            <h3>Aula Pertemuan</h3>
            <p>Aula yang digunakan untuk mengaji dan juga untuk melaksanakan acara-acara tertentu</p>
          </div>
        </div>
      </div>

      <section className="berita-terbaru">
        <h2 id="c2" className="berita-title">
          BERITA TERBARU
        </h2>
        <div className="berita-container">
          <div className="berita-main">
            <a href="#" className="berita-link">
              <img src="../assets/img/berita.jpg" alt="Pelaksanaan Pengajian Malam Nuzulul" />
              <div className="berita-content">
                <span className="tag">Terbaru</span>
                <h3>PELAKSANAAN PENGAJIAN MALAM NUZULUL ...</h3>
                <p>Berkerjasama dengan DKM Baitul Qur’an KH Muntaha Al-Hafidz dalam rangka pengajian Malam Nuzulul qur’an .....</p>
                <div className="berita-meta">
                  <span className="date">28 Maret 2024</span>
                  <span className="time">2 bulan lalu</span>
                </div>
              </div>
            </a>
          </div>
          <div className="sidebar">
            <div className="small-news">
              <a href="#" className="small-news-link">
                <img src="../assets/img/berita1.jpg" alt="Tim Hadroh IPOQSH" />
                <div className="small-news-content">
                  <h4>TIM HADROH IPOQSH TU...</h4>
                  <p>Dimeriahkan oleh grup rebana IPOQSH</p>
                  <span>2 bulan lalu</span>
                </div>
              </a>
            </div>
            <div className="small-news">
              <a href="#" className="small-news-link">
                <img src={berita2} alt="Informasi Daftar Ula..." />
                <div className="small-news-content">
                  <h4>INFORMASI DAFTAR ULA...</h4>
                  <p>Cek disini untuk informasi terkait biaya daftar ulang</p>
                  <span>1 bulan lalu</span>
                </div>
              </a>
            </div>
            <div className="small-news">
              <a href="#" className="small-news-link">
                <img src={berita3} alt="Halal Bihalal & Tasya..." />
                <div className="small-news-content">
                  <h4>HALAL BIHALAL & TASYA...</h4>
                  <p>Tasyakuran dalam rangka Halal bihalal dan pembukaan</p>
                  <span>2 bulan lalu</span>
                </div>
              </a>
            </div>
            <div className="small-news">
              <a href="berita.html" className="small-news-link">
                <img src={berita4} alt="PPTQ Unsiq 2 Berhasil..." />
                <div className="small-news-content">
                  <h4>PPTQ Unsiq 2 Berhasil...</h4>
                  <p>PPTQ Unsiq 2 berhasil membawa 2 piala dalam rangka hari santri</p>
                  <span>2 bulan lalu</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="alumni-section">
        <h2 className="title">Tentang Alumni</h2>
        <p className="subtitle">Lulusan beberapa alumni kami</p>
        <div className="alumni-cards">
          <div className="card">
            <img src= "../assets/img/alumni1.jpg" alt="Maroghi Ahmad Alh" />
            <p className="name">Maroghi Ahmad Alh, S.Ag</p>
            <p className="year">Alumni Th 2022</p>
            <div className="text-container">
              <p className="quote">"Menjadi guru di Yayasan Al-Madina Wonosobo"</p>
            </div>
          </div>
          <div className="card">
            <img src={alumni2} alt="Rahmat Siregar" />
            <p className="name">Rahmat Siregar Alh, S.Ag</p>
            <p className="year">Alumni Th 2022</p>
            <div className="text-container">
              <p className="quote">"Khatam 30 Juz di waktu muda"</p>
            </div>
          </div>
          <div className="card">
            <img src={alumni3} alt="Zain Lutfi" />
            <p className="name">Zain Lutfi Itmamual Wafa Alh, S.Ag</p>
            <p className="year">Alumni Th 2022</p>
            <div className="text-container">
              <p className="quote">"Menjadi Juara 2 MTQ Tingkat nasional Cabang Tilawah"</p>
            </div>
          </div>
          <div className="card">
            <img src={alumni4} alt="Dimas Ramadhan" />
            <p className="name">Dimas Ramadhan S.Ag</p>
            <p className="year">Alumni Th 2022</p>
            <div className="text-container">
              <p className="quote">"Lurah PPTQ Unsiq 2 dua Period"</p>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <h2>Lokasi Pondok</h2>
        <div className="location-content">
          <div className="contact-info">
            <div className="info-item">
              <p className="info-title">Alamat</p>
              <p>Jl. KH Abdurrahman Wahid, desa Krasak, Kecamatan Mojotengah Kabupaten Wonosobo</p>
            </div>
            <div className="info-item">
              <p className="info-title">Email</p>
              <p>ponpesmaputraunsiq@gmail.com</p>
            </div>
            <div className="info-item">
              <p className="info-title">Kontak</p>
              <p>089-650-565-3080 (Fulan)</p>
            </div>
            <div className="info-item">
              <p className="info-title">Waktu layanan</p>
              <p>Setiap hari 08:00 - 17:00 WIB</p>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.227414972356!2d109.90517952615654!3d-7.328335692679973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa123dba74069%3A0x6d1e8dbec7df8450!2sPPTQ%20Mahasiwa%20Putra%20Unsiq%202!5e0!3m2!1sid!2sid!4v1716043709919!5m2!1sid!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-left">
          <div className="footer-icon">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="../assets/img/ig.jpg" alt="Instagram" />
            </a>
          </div>
          <div className="footer-icon">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" />
            </a>
          </div>
          <div className="footer-icon">
            <a href="mailto:example@example.com">
              <img src={email} alt="Email" />
            </a>
          </div>
        </div>
        <div className="right-section">
          <p>&#169; 2024 Pondok Pesantren UNSIQ II. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Beranda;
