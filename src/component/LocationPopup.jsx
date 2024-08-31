import React, { useState, useEffect } from 'react';
import style from './LocationPopup.module.css';
import { FaTimes } from 'react-icons/fa';

const cities = [
  'Mumbai', 'Delhi', 'Bengaluru', 'Kolkata', 'Chennai', 'Hyderabad', 'Ahmedabad', 
  'Pune', 'Jaipur', 'Surat', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane',
  'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad',
  'Ludhiana', 'Agra', 'Nashik', 'Meerut', 'Rajkot', 'Vijayawada', 'Madurai',
  'Kalyan-Dombivli', 'Bhubaneswar', 'Mysuru', 'Varanasi', 'Aurangabad', 'Amritsar',
  'Jodhpur', 'Ranchi', 'Coimbatore', 'Bikaner', 'Kota', 'Salem', 'Gwalior',
  'Kakinada', 'Hosur', 'Aligarh', 'Shivamogga', 'Jabalpur', 'Guwahati', 'Pondicherry',
  'Dehradun', 'Shimla', 'Chandigarh', 'Siliguri', 'Kurnool', 'Tiruchirappalli', 
  'Jamshedpur', 'Udaipur', 'Bhubaneswar', 'Raipur', 'Sonepat'
];

const LocationPopup = ({ closePopup, onSelectCity, initialCity }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState(cities);
  
  useEffect(() => {
    setFilteredCities(
      cities.filter(city => city.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const handleCityClick = (city) => {
    onSelectCity(city);
  };

  return (
    <div className={style.popupOverlay}>
      <div className={style.popupContent}>
        <button className={style.closeBtn} onClick={closePopup}>
          <FaTimes />
        </button>
        <div className={style.theaterInfo}>
          <h2>Select City</h2>
          <input
            type="text"
            placeholder="Search city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={style.searchInput}
          />
        </div>
        <div className={style.cityList}>
          {filteredCities.map((city, index) => (
            <div key={index} className={style.cityItem} onClick={() => handleCityClick(city)}>
              {city}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
