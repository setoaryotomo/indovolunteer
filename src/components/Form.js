import { React, useState } from "react";
import { Modal, Button, Alert } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Form = ({ show, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [selectedOption, setSelectedOption] =
    useState("");
  const [about, setAbout] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      name,
      email,
      contact,
      selectedOption,
      about
    );
    setShowSuccessAlert(true);
    handleReset();
    setTimeout(onClose, 2000);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setContact("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Daftar Aktivitas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group py-2">
            <label htmlFor="name">Nama Lengkap</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) =>
              setName(e.target.value)
            } placeholder="Nama*" required />
          </div>
          <div className="form-group py-2">
            <label htmlFor="about">Mengapa Anda Tertarik Untuk Menjadi Relawan Pada Aktivitas Ini?</label>
            <textarea className="form-control" id="about" onChange={(e) =>
              setAbout(e.target.value)
            } required></textarea>
          </div>
          <div className="form-group py-2">
            <label htmlFor="job">Pilih Pekerjaan Anda</label>
            <select className="form-control" id="job" required>
              <option>Pelajar</option>
              <option>Karyawan</option>
              <option>Lainnya</option>
            </select>
          </div>
          <div className="form-group py-2">
            <label htmlFor="contact">Masukan Nomor HP</label>
            <input type="text" className="form-control" id="contact" value={contact}
              onChange={(e) =>
                setContact(e.target.value)
              } placeholder="+62 812 1016 7119" required />
          </div>
          <div className="form-group py-2">
            <label htmlFor="contact">Masukan Alamat Email</label>
            <input type="email" className="form-control mt-2" id="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              } placeholder="email@example.com" required />
          </div>
          {showSuccessAlert && (
          <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
            Formulir pendaftaran berhasil dikirim!
          </Alert>
        )}
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Kirim Formulir Pendaftaran
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>

    </Modal>
  );
};

export default Form;
