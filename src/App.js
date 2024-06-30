import React, { useContext } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Aktivitas from './pages/Aktivitas';
import Home from './pages/Home'; 
import CaraKerja from './pages/CaraKerja'; 
import DetailAktivitas from './pages/DetailAktivitas'; 
import Form from './components/Form'; 
import { AppContext, AppProvider } from './context/AppContext'; 

const IndoVolunteer = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <MainContent />
        </Router>
      </AppProvider>
    </Provider>
  );
};

const MainContent = () => {
  const { showModal, setShowModal } = useContext(AppContext);

  return (
    <div>
      {/* Navbar Section Start */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
          <div className="container">
            <a className="navbar-brand" href="#">IndoVolunteer</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Tentang Kami</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aktivitas">Aktivitas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/carakerja">Cara Kerja</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Navbar Section End */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carakerja" element={<CaraKerja />} />
        <Route path="/aktivitas" element={<Aktivitas />} />
        <Route path="/detail/:id" element={<DetailAktivitas onVolunteerClick={() => setShowModal(true)} />} />
      </Routes>
      
      {/* Footer Start */}
      <footer className="py-5 py-lg-20" style={{ backgroundColor : '#ededed' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="mb-5">
                <p className="text-body-color">
                  Contact Us
                </p>
                <div className="social-icons">
                  <a href="#" className="text-dark me-3">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#" className="text-dark me-3">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className="text-dark me-3">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="text-dark me-3">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}

      {/* Modal Component */}
      <Form show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default IndoVolunteer;
