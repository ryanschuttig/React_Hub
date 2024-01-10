export const fetchCoordinates = async (text) => {
    const REACT_APP_MAP_API_KEY = 'pk.eyJ1IjoiYWFqMTAxIiwiYSI6ImNsbGU3czVnNjAxd2czcnBiZGVpbjN0bXcifQ.w7r7Uw8qQ5VF_zHFGXanzw';
  
    try {
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${REACT_APP_MAP_API_KEY}`
      );
      console.log('fetching coordinates');
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    } catch (err) {
      return { error: "Unable to retrieve places" };
    }
  };