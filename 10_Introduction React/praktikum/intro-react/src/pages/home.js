import "../assets/css/bootstrap.min.css";
import "../assets/css/main.css";
import Logo from "../assets/img/logo-ALTA@2x.png";
import FotoProfil from "../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";

const Home = () => {
  return (
    <div className="home-background">
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="alterra">
                <a href="index.html">
                  <img className="logo-atas" src={Logo} alt="logo-atas" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              {/* <div class="container"> */}
              <div className="row align-items-center navig">
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                  <a href="index.html" className="aktif">
                    HOME
                  </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center">
                  <a href="about.html">ABOUT</a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left">
                  <a href="#">EXPERIENCE</a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                  <a href="form.html">CONTACT</a>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </header>
      <div className="container h-100">
        <div className="row align-items-center isi-home">
          <div className="col-lg-4 col-md-12 col-sm-12  col-12">
            <img id="foto-profil" alt="foto-profil" src={FotoProfil} />
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="main-p">
              <p className="sapaan">Hi, my name is </p>
              <p className="nama">Abghi Fareihan</p>
              <p className="hobi">I build things for the web</p>
              <p className="tombol">
                <a href="about.html">Get In Touch</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
