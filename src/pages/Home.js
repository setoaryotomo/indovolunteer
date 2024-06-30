import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Home = () => {
  return (
    <div>
      {/* Hero Section Start */}
      <div className="jumbotron jumbotron-fluid p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6" style={{ marginTop: '150px' }}>
              <h1>Ambil Peran Jadi Relawan, Ubah niat baik jadi aksi baik hari ini</h1>
              <p>Lebih banyak relawan, lebih besar dampaknya. Ada beragam pilihan aktivitas yang dapat diikuti untuk membuat perubahan besar</p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6 mb-4 my-5">
                  <img src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero image" className="img-fluid" style={{ height: '365px' }} />
                </div>
                <div className="col-md-6 mb-4 my-5">
                  <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero image" className="img-fluid mb-4" />
                  <img src="https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero image" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* Description Section Start */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-3 text-center">Tentang Kami</h2>
          <p>
            IndoVolunteer adalah organisasi nirlaba berbasis online yang mempertemukan organisasi sosial yang membutuhkan
            relawan dengan siapapun yang ingin menjadi relawan. Mimpi besar kami adalah melihat kegiatan menjadi relawan
            sebagai gaya hidup. Di mana relawan bukan lagi kegiatan sosial yang eksklusif tapi sudah menjadi kebiasaan masyarakat
            Indonesia. Misi utama kami yakni ingin membuat kolaborasi antara relawan dengan organisasi/komunitas dengan misi
            sosial menjadi lebih mudah melalui platform IndoVolunteer.
          </p>
        </div>
      </section>
      {/* Description Section End */}

      <style dangerouslySetInnerHTML={{ __html: "\n      /* Carousel base class */\n.carousel {\n  margin-bottom: 4rem;\n}\n/* Since positioning the image, we need to help out the caption */\n.carousel-caption {\n  bottom: 3rem;\n  z-index: 10;\n}\n\n/* Declare heights because of positioning of img element */\n.carousel-item {\n  height: 32rem;\n}\n\n      " }} />

      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.greenpeace.org/static/planet4-indonesia-stateless/2019/03/cac0d437-gp0stsi2r-1024x683.jpg"
              alt="Description of the image"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0)' }}
            />
            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Bersatu untuk Ketangguhan</h1>
                <p class="opacity-75">Jadilah bagian dari solusi dan bantu komunitas pulih dari bencana alam</p>
                <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <img
              src="https://www.greenpeace.org/static/planet4-indonesia-stateless/2022/09/eddd21ef-gp0sttpp9_.jpg"
              alt="Description of the image"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0)' }}
            />
            <div class="container">
              <div class="carousel-caption">
                <h1>Bersama Kita Kuat: Dibutuhkan Relawan Tanggap Bencana</h1>
                <p>Berkontribusilah pada misi kami dalam memberikan bantuan cepat dan efektif selama bencana alam.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <img
              src="https://www.greenpeace.org/static/planet4-indonesia-stateless/2019/03/827525f8-gp0str29q-1024x683.jpg"
              alt="Description of the image"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0)' }}
            />
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>Keberanian Anda, Harapan Mereka</h1>
                <p>Berdirilah dan dukung komunitas yang terkena bencana bersama Indovoluunter.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
