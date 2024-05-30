import "../src/css/Beranda.css";
import Beranda from "./page/Beranda.jsx";
import About from "./page/About.jsx";
import Galeri from "./page/Galeri.jsx";
import Pendaftaran from "./page/Pendaftaran.jsx";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import Forum from "./page/Forum.jsx";
import Berita1 from "./page/Berita1.jsx";
import Berita2 from "./page/Berita2.jsx";
import Berita3 from "./page/Berita3.jsx";
import Berita4 from "./page/Berita4.jsx";
import Dashboard from "./page/Dashboard.jsx";
import DataSantri from "./page/DataSantri.jsx";
import Pembayaran from "./backend/Pembayaran.jsx";
import UbahSandi from "./backend/UbahSandi.jsx";
import Lonceng from "./backend/Lonceng.jsx";




import { Route, Routes } from "react-router-dom";
import BeritaBesar from "./page/BeritaBesar.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/about" element={<About />} />
      <Route path="/galeri" element={<Galeri />} />
      <Route path="/pendaftaran" element={<Pendaftaran />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/berita1" element={<Berita1 />} />
      <Route path="/berita2" element={<Berita2 />} />
      <Route path="/berita3" element={<Berita3 />} />
      <Route path="/berita4" element={<Berita4 />} />
      <Route path="/beritabesar" element={<BeritaBesar />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/datasantri" element={<DataSantri/>} />
      <Route path="/pembayaran" element={<Pembayaran />} />
      <Route path="/ubahsandi" element={<UbahSandi />} />
      <Route path="/lonceng" element={<Lonceng />} />


    </Routes>
  );
}

export default App;
