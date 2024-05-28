import gambar from "../assets/img/LOGO.png"; // Perbaikan jalur impor gambar
import arrow from "../assets/img/arrow.png";
import { useNavigate } from "react-router-dom";
import { useSelector} from "react-redux";
import { useState} from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const isLogin = useSelector(state=>state.isLogin)
  // const dispatch = useDispatch()
  const [loginState, setLoginState] = useState(isLogin)
  // useEffect(() => {
  //   setLoginState(isLogin)
  // }, [isLogin]);

  const handleLogin = ()=>{
    // dispatch(SignIn())
    setLoginState(true)
    // console.log(isLogin)
  }

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
          <button onClick={() => navigate("/pendaftaran")}>pendaftaran</button>
        </li>
        <li>
          <a href="/forum">Forum</a>
        </li>
      </ul>
      <div className="login">
        {loginState?
            <div className="flex flex-row">
              <div>GAMBAR</div>
              <div>Lonceng</div>
            </div>
            :
            <button className="login-btn" onClick={handleLogin}>
              Masuk
            </button>}
      </div>
    </nav>
  );
};

export default Navbar;
