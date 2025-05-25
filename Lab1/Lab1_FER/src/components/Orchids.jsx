import React from "react";

import "../styles/Orchids.css"; // Assuming you have a CSS file for styling
export default function Orchids(props) {
  return (
    <>
      <div className="container py-5">
        <div className="orchid-card">
          <img src={props.img} alt={props.img} className="orchid-image" />
          <div className="card-body p-4">
            <h3 className="orchid-title mb-3">{props.name}</h3>
            <ul className="info-list">
              <li>
                <span className="info-label">ID:</span>
                <span className="info-value">{props.id}</span>
              </li>
              <li>
                <span className="info-label">Origin:</span>
                <span className="info-value">{props.origin}</span>
              </li>
              <li>
                <span className="info-label">Color:</span>
                <span className="info-value">{props.color}</span>
              </li>
              <li>
                <span className="info-label">Category:</span>
                <span className="info-value">{props.category}</span>
              </li>
              <li>
                <span className="info-label">Rating:</span>
                <span className="info-value">
                  <span className="ms-2">{props.rating}</span>
                </span>
              </li>
              <li>
                <span className="info-label">Likes:</span>
                <span className="info-value like-count">
                  <span className="like-heart">❤</span>
                  <span>{props.numberOfLike}</span>
                </span>
              </li>
              <li>
                <span className="info-label">Special:</span>
                <span className="info-value">
                  <span className="badge badge-special px-2 py-1 rounded">
                    {props.isSpecial}
                  </span>
                </span>
              </li>
              <li>
                <span className="info-label">Natural:</span>
                <span className="info-value">
                  <span className="badge badge-natural px-2 py-1 rounded">
                    {props.isNatuaral}
                  </span>
                </span>
              </li>
            </ul>
            <div className="text-center mt-4">
              <button className="detail-btn">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
