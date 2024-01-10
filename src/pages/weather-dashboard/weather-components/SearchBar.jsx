import React from 'react';
import { useState } from 'react';
import { fetchPlace } from './fetchPlace';
import './SearchBar.scss';

const SearchBar = () => {

  const [city, setCity] = useState('');
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState("");
  

  const handleCityChange = async (e) => {
    const newCity = e.target.value;
    setCity(newCity);
    if (!newCity) return;
    const res = await fetchPlace(newCity);
    if (res.features) {
      const newAutocompleteCities = res.features.map((place) => place.place_name);
      setAutocompleteCities(newAutocompleteCities);
    } else {
      setAutocompleteCities([]);
    }
    if (res.error) {
      setAutocompleteErr(res.error);
    } else {
      setAutocompleteErr("");
    }
    // Update the city field in the formData state
    setCity(newCity);
    console.log(city)
  };


  const handleSubmit = (event) => {
    console.log(city)
  // At this point, all validations are successful
  setAutocompleteErr('');
  };






  return (
    <div className='searchbar'>



<form onSubmit={handleSubmit}>
     <div className="placesAutocomplete">
        <div className="placesAutocomplete__inputWrap">
          <label htmlFor="city" className="label">

            {autocompleteErr && (
              <span className="inputError">{autocompleteErr}</span>
            )}
          </label>
          <input
            list="places"
            type="text"
            id="city"
            name="city"
            onChange={handleCityChange}
            value={city}
            required
            pattern={autocompleteCities.join("|")}
            autoComplete="off"
          />
          <datalist id="places">
            {autocompleteCities.map((city, i) => (
              <option key={i}>{city}</option>
            ))}
          </datalist>
          <span className="placesAutocomplete__hint">
    
          </span>
       
        </div>
      </div>
 


     </form>
       



    </div>
  )
}

export default SearchBar;
