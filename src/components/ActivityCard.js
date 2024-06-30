import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ActivityCard = ({ id, image, title, duration, deskripsi }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <FontAwesomeIcon icon={faClock} /> {duration}
          </p>
        </div>
        <div className="card-footer text-center">
          <Link to={`/detail/${id}`} className="btn btn-primary">Detail</Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
