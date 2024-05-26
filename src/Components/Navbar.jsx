import gambar from "../assets/img/LOGO.png"; // Perbaikan jalur impor gambar
import arrow from "../assets/img/arrow.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={gambar} alt="PPTQ UNSIQ 2" />
        <span className="logo-text">PPTQ UNSIQ 2</span>
      </div>
      <ul className="menu">
        <li>
          <button onClick={() => navigate("/")}>Beranda</button>
        </li>
        <li className="w-fit dropdown">
          <div className="flex flex-row gap-2 items-center">
            <button>Profil</button>
            <img src={arrow} className="w-2 h-2 rotate-180" />
          </div>
          <span className="material-icon dropdown-icon"></span>
          <ul className="dropdown-menu">
            <li>
              <button onClick={() => navigate("/about")}>Tentang Kami</button>
            </li>
            <li>
              <a href="/galeri">Galeri</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#c2">Berita</a>
        </li>
        <li>
          <a href="/pendaftaran">Pendaftaran</a>
        </li>
        <li>
          <a href="/forum">Forum</a>
        </li>
      </ul>
      <div className="login">
        <a href="/login" className="login-btn">
          Masuk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
