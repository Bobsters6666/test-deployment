import React, { useEffect, useState } from 'react';
import '../leaderboard.css';
import OnerepmaxDetails from './OnerepmaxDetails';

export default function Leaderboard() {
  const [onerepmaxes, setOnerepmaxes] = useState(null);

  // Fetches data from backend
  useEffect(() => {
    const fetchOnerepmaxes = async () => {
      const response = await fetch('https://gym-app-4y5d.onrender.com/api');
      const json = await response.json();

      if (response.ok) {
        setOnerepmaxes(json);
      }
    };

    fetchOnerepmaxes();
  }, []);

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-cont">
        <h1>Leaderboards</h1>
        <div className="leaderboard-row">
          <div>
            <div className="leaderboard-header-row">
              <h4>Ranking</h4>
              <h4>User</h4>
              <h4>Lift</h4>
              <h4>Weight (kg)</h4>
              <h4>Reps</h4>
              <h4>Max (kg)</h4>
            </div>
            <div>
              {onerepmaxes &&
              onerepmaxes.sort((a, b) => b.max - a.max) // Sort by onerepmax
              .map((onerepmax, index) => (
              <OnerepmaxDetails key={onerepmax._id} onerepmax={onerepmax} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}