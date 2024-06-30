import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CaraKerja = () => {
  return (
    <div>
    {/* About Section Start */}
    <section className="overflow-hidden pb-5 pt-5 my-5 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="relative mb-5">
                <div className="mx-auto max-w-100 rounded-top">
                  <img src="https://images.unsplash.com/photo-1605714007165-c15eac9c647b?q=80&amp;w=1887&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about image" className="w-100 rounded-top" style={{ height: 'auto' }} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-5 mt-md-3" style={{ marginLeft: '100px' }}>
                <h2 className="mb-4 text-dark"> Bagaimana Cara Kerja <i>IndoVolunteer?</i></h2>
                <div className="d-flex">
                  <span className="text-primary text-xl font-bold">01</span>
                  <div>
                    <h3 className="mb-2 text-dark">Cari Aktivitas</h3>
                    <p className="text-body-color">Kegiatan lokal atau virtual? Hari kerja atau akhir pekan? Cari aktivitas yang sesuai dengan lokasi, waktu, preferensi isu sosial, hingga minatmu. Pilihan tidak terbatas!</p>
                  </div>
                </div>
                <div className="mb-4 d-flex">
                  <span className="text-primary text-xl font-bold">02</span>
                  <div>
                    <h3 className="mb-2 text-dark"> Daftarkan Aktivitas</h3>
                    <p className="text-body-color"> Sudah menemukan aktivitas yang cocok? Klik tombol Jadi Relawan dan isi formulir pendaftaran.</p>
                  </div>
                </div>
                <div className="d-flex">
                  <span className="text-primary text-xl font-bold">03</span>
                  <div>
                    <h3 className="mb-2 text-dark">Lengkapi Data Pribadi</h3>
                    <p className="text-body-color">Isikan data pribadimu pada formulir pendaftaran. Silahkan diisi dengan data yang lengkap.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
    </div>
  );
};

export default CaraKerja;