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
import Dashboard from "./Admin/Dashboard.jsx";
import DataSantri from "./Admin/DataSantri.jsx";
import InformasiPendaftaran from "./Admin/InformasiPendaftaran.jsx";
import Pembayaran from "./DashboardUser/Pembayaran.jsx";
import UbahSandi from "./DashboardUser/UbahSandi.jsx";
import Lonceng from "./DashboardUser/Lonceng.jsx";
import Pengaturan from "./DashboardUser/Pengaturan.jsx";
import Pengumuman from "./Admin/Pengumuman.jsx";
import BerkasDataSantri from "./Admin/BerkasDataSantri.jsx";
import EditBerkasData from "./Admin/EditBerkasData.jsx";
import FormulirPendaftaran from "./DashboardUser/FormulirPendaftaran.jsx";
import GaleriAdmin from "./Admin/GaleriAdmin.jsx";
import ForumDiskusi from "./Admin/ForumDiskusi.jsx";
import DashboardBerita from "./Admin/DashboardBerita.jsx";
import TambahBerita from "./Admin/TambahBerita.jsx";
import TambahBerita1 from "./Admin/TambahBerita1.jsx";
import EditBerita from "./Admin/EditBerita.jsx";
import ViewBerita from "./Admin/ViewBerita.jsx";
import CeritaAlumni from "./Admin/CeritaAlumni.jsx";

import { Route, Routes } from "react-router-dom";
import BeritaBesar from "./page/BeritaBesar.jsx";
import BeritaSetelahDitambah from "./Admin/BeritaSetelahDitambah.jsx";
import TambahCeritaAlumni from "./Admin/TambahCeritaAlumni.jsx";
import CeritaAlumniSetelahDitambah from "./Admin/CeritaAlumniSetelahDitambah.jsx";

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
      <Route path="/datasantri" element={<DataSantri />} />
      <Route path="/pembayaran" element={<Pembayaran />} />
      <Route path="/pengaturan" element={<Pengaturan />} />
      <Route path="/ubahsandi" element={<UbahSandi />} />
      <Route path="/lonceng" element={<Lonceng />} />
      <Route path="/informasipendaftaran" element={<InformasiPendaftaran />} />
      <Route path="/pengumuman" element={<Pengumuman />} />
      <Route path="/berkasdatasantri" element={<BerkasDataSantri />} />
      <Route path="/editberkasdata" element={<EditBerkasData />} />
      <Route path="/galeriadmin" element={<GaleriAdmin />} />
      <Route path="/formulirpendaftaran" element={<FormulirPendaftaran />} />
      <Route path="/forumdiskusi" element={<ForumDiskusi />} />
      <Route path="/dashboardberita" element={<DashboardBerita />} />
      <Route path="/tambahberita" element={<TambahBerita />} />
      <Route path="/tambahberita1" element={<TambahBerita1 />} />
      <Route path="/editberita" element={<EditBerita />} />
      <Route path="/beritasetelahditambah" element={<BeritaSetelahDitambah />} />
      <Route path="/viewberita" element={<ViewBerita />} />
      <Route path="/ceritaalumni" element={<CeritaAlumni />} />
      <Route path="/tambahceritaalumni" element={<TambahCeritaAlumni />} />
      <Route path="/ceritaalumnisetelahditambah" element={<CeritaAlumniSetelahDitambah />} />
    </Routes>
  );
}

export default App;
