import React from 'react'
import gambar from "../assets/img/logoponpesma.png"
const Beranda = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={gambar} alt="PPTQ UNSIQ 2" />
          <span className="logo-text">PPTQ UNSIQ 2</span>
        </div>
        <ul className="menu">
          <li><a href="#">Beranda</a></li>
          <li className="dropdown">
            <a href="#">Profil</a>
            <ul className="dropdown-menu">
              <li><a href="#">Tentang Kami</a></li>
              <li><a href="#">Galeri</a></li>
            </ul>
          </li>
          <li><a href="#">Berita</a></li>
          <li><a href="#">Pendaftaran</a></li>
          <li><a href="#">Forum</a></li>
        </ul>
        <div className="login">
          <a href="#" className="login-btn">Masuk</a>
        </div>
      </nav>

        <img src="asset/img/foto 2.jpg" alt="Header Image"/>
        <div className="header-content">
            <h1>Selamat Datang di Pondok Pesantren Tahfidzul Qur'an Mahasiswa Unsiq II</h1>
            <p>Jl. Kh Abdurrohman Wahid, desa Krasak, Kecamatan
                Mojotengah Kabupaten Wonosobo</p>
<br/>
                <p1>Penerimaan Santri Baru tahun ajaran 2024/2025</p1>
                <div className="next-content">
                    <div className="grid-next-item">
                      <a href="#">Daftar Sekarang</a>
                    </div>
                </div>
        </div>
    <div className="about-us-container">
  <div className="about-us-text">
      <h4>TENTANG KAMI</h4>
      <p>cuplikan video profil Pondok Pesantren Tahfidzul 
        Qur’an mahasiswa yang terletak di Kampus 2 UNSIQ Wonosobo</p>
  </div>
  <div className="video-container">
      <iframe width="560" height="315" src="https://youtu.be/AIOskYdYOj4?si=t9dvrX-k3jq1Hf9u" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

  
    <div className="container">
        <div className="header">
            <span>PROGRAM UNGGULAN</span>
        </div>
        <div className="programs">
            <div className="program">
                <div className="img">
                    <img src="asset/img/quran.png" className="small-image" alt="Tahfidzul Qur'an"/>
                </div>
                <div className="title">Tahfidzul Qur'an</div>
            </div>
            <div className="program">
                <div className="img">
                    <img src="asset/img/tangan menulis.png" className="small-image" alt="Kitab Kuning"/>
                </div>
                <div className="title">Kitab Kuning</div>
            </div>
            <div className="program">
                <div className="img">
                    <img src="asset/img/publik speaking.png" className="small-image" alt="Public Speaking"/>
                </div>
                <div className="title">Public Speaking</div>
            </div>
            <div className="program">
                <div className="img">
                    <img src="asset/img/masjid.png" className="small-image" alt="Arab & Inggris"/>
                </div>
                <div className="title">Arab & Inggris</div>
            </div>
        </div>
    </div>
   
    
    <div className="header">
        <span>Informasi Pendaftaran</span>
    </div>
    <div className="daftar">  
        <header> 
            <p>Telah Dibuka Penerimaan Santri Baru</p>
            <p> Pondok Pesantren Tahfidzul Qur'an Mahasiswa UNSIQ 2 Tahun 2024 / 2025</p>
        </header>  
    </div>


    <main className="main-content">
        <section className="main-news">
          <div className="main-news-judul">
            <h3>BERITA TERBARU</h3>
            <img src="asset/img/foto besar.JPG" alt="Main News Image" className="main-news-image" />
            <div className="main-news-text">
              <h2>PELAKSANAAN PENGAJIAN MALAM NUZULUL...</h2>
              <p>Berkerjasama dengan DKM Baitul Qur’an KH Muntaha Al-Hafidz dalam rangka pengajian Malam Nuzulul Qur’an.....</p>
              <p className="date">28 Maret 2024 | 2 bulan lalu</p>
            </div>
          </div>
        </section>
        <aside className="sidebar">
          <div className="sidebar-item">
            <img src="asset/img/foto 1.jpg" alt="Sidebar Image 1" />
            <h3>TIM HADROH IPOQSH TU...</h3>
            <p>Dimeriahkan oleh grup rebana IPOQSH</p>
            <p className="date">2 bulan lalu</p>
          </div>
          <div className="sidebar-item">
            <img src="asset/img/foto 2.jpg" alt="Sidebar Image 2" />
            <h3>INFORMASI DAFTAR ULA...</h3>
            <p>Cek disini untuk informasi terkait biaya daftar ulang</p>
            <p className="date">1 bulan lalu</p>
          </div>
          <div className="sidebar-item">
            <img src="asset/img/foto 3.png" alt="Sidebar Image 3" />
            <h3>HALAL BIHALAL & TASYA...</h3>
            <p>Tasyakuran dalam rangka Halal bihalal dan pembukaan</p>
            <p className="date">2 bulan lalu</p>
          </div>
          <div className="sidebar-item">
            <img src="asset/img/foto 4.jpg" alt="Sidebar Image 4" />
            <h3>PPTQ UNSIQ 2 BERHASIL...</h3>
            <p>PPTQ Unsiq 2 berhasil membawa 2 piala dalam rangka hari santri</p>
            <p className="date">2 bulan lalu</p>
          </div>
        </aside>
      </main>

    <section className="alumni-section">
        <h2 className="title">Tentang Alumni</h2>
        <p className="subtitle">Lulusan beberapa alumni kami</p>
        <div className="alumni-cards">
            <div className="card">
                <img src="asset/img/alumni1.png" alt="Maroghi Ahmad Alh"/>
                <p className="name">Maroghi Ahmad Alh, S.Ag</p>
                <p className="year">Alumni Th 2022</p>
                <div className="text-container">
                    <p className="quote">"Menjadi guru di Yayasan Al-Madina Wonosobo"</p>
                </div>
            </div>
            <div className="card">
                <img src="asset/img/alumni2.png" alt="Rahmat Siregar"/>
                <p className="name">Rahmat Siregar Alh, S.Ag</p>
                <p className="year">Alumni Th 2022</p>
                <div className="text-container">
                    <p className="quote">"Khatam 30 Juz di waktu muda"</p>
                </div>
            </div>
            <div className="card">
                <img src="asset/img/alumni3.png" alt="Zain Lutfi"/>
                <p className="name">Zain Lutfi Itmamual Wafa Alh, S.Ag</p>
                <p className="year">Alumni Th 2022</p>
                <div className="text-container">
                    <p className="quote">"Menjadi Juara 2 MTQ Tingkat nasional Cabang Tilawah"</p>
                </div>
            </div>
            <div className="card">
                <img src="asset/img/alumni4.png" alt="Dimas Ramadhan"/>
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
        
        </div>
    </section>
    
    <footer className="footer">
        <div className="footer-left">
            <div className="footer-icon">
                <a href="https://www.instagram.com" target="_blank">
                    <img src="asset/img/instagram_717392.png" alt="Instagram" />
                </a>
            </div>
            <div className="footer-icon">
                <a href="https://www.youtube.com" target="_blank">
                    <img src="asset/img/youtube.png" alt="YouTube" />
                </a>
            </div>
            <div className="footer-icon">
                <a href="mailto:example@example.com">
                    <img src="asset/img/email_4546924.png" alt="Email" />
                </a>
            </div>
        </div>
        <div className="right-section">
            <p>&#169; 2024 Pondok Pesantren UNSIQ II. All right reserved</p>
        </div>
    </footer>
    </div>
    )
    }
    export default Beranda;
