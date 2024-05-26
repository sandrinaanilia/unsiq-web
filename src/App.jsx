import '../src/css/Beranda.css'
import Beranda from './page/Beranda.jsx'
import About from "./page/About.jsx";
import Galeri from "./page/Galeri.jsx";
import Pendaftaran from "./page/Pendaftaran.jsx";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import Forum from "./page/Forum.jsx";




import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Beranda/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/galeri" element={<Galeri/>} />
            <Route path="/pendaftaran" element={<Pendaftaran/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forum" element={<Forum/>} />






        </Routes>
    );
}

export default App;
