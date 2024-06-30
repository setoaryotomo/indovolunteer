import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../redux/slices';
import ActivityCard from '../components/ActivityCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const Aktivitas = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchTerm = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  const filteredActivities = activities.filter((activity) =>
    activity.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container my-5 p-5">
      <div className="mb-3 text-center">
        <h2>Aktivitas</h2>
        <input
          type="text"
          placeholder="Search activities"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className="form-control my-3"
        />
      </div>
      <div className="row">
        {filteredActivities.map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default Aktivitas;
