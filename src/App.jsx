import '../src/css/Beranda.css'
import Beranda from './page/Beranda.jsx'
import About from "./page/About.jsx";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Beranda/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    );
}

export default App;
