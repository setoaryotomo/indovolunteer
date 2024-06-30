import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const DetailAktivitas = ({ onVolunteerClick }) => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const activity = data.find(item => item.id === parseInt(id));
        if (!activity) {
          throw new Error('Activity not found');
        }
        setActivity(activity);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!activity) {
    return <div>No activity found.</div>;
  }

  return (
    <div className="container mt-5 pt-5 mb-5">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
                <img src={activity.image} alt={activity.title} className="img-fluid mb-3" />
                <h1>{activity.title}</h1>
                <p>{activity.subtitle}</p>
                <p>{activity.description}</p>

                <h3>Detail Aktivitas</h3>
                <p>{activity.detail}</p>

                <h3>Pekerjaan</h3>
                <p>{activity.jobTitle}</p>
                <p>Relawan Dibutuhkan: {activity.volunteersNeeded}</p>
                <p>Total Jam Kerja: {activity.totalHours}</p>
                <ul>
                    {activity.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                    ))}
                </ul>

                <h3>Kriteria Relawan</h3>
                <ul>
                    {activity.criteria.map((criterion, index) => (
                    <li key={index}>{criterion}</li>
                    ))}
                </ul>

                <h3>Perlengkapan Relawan</h3>
                <p>{activity.equipment}</p>

                <h3>Domisili</h3>
                <p>{activity.location}</p>

                <h3>Informasi Tambahan</h3>
                <p>{activity.additionalInfo}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{activity.title}</h4>
              <p className="card-text">{activity.type}</p>
              <p className="card-text">Jadwal Reguler</p>
              <ul>
                {activity.schedule.map((time, index) => (
                  <li key={index}>{time}</li>
                ))}
              </ul>
              <p>Periode Aktivitas</p>
              <p>{activity.period}</p>
              <p>Batas Registrasi: {activity.registrationDeadline}</p>
              <button className="btn btn-warning" onClick={onVolunteerClick}>Jadi Relawan</button>
              <button className="btn btn-success mx-2">Kontak Organisasi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAktivitas;
