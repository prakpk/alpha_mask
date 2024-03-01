import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import i18n from './i18n'; // i18next configuration
import { useDispatch, useSelector } from 'react-redux';
import { fetchGeoInfo } from './slices/geoSlice'; // Adjust the path as necessary
import './App.css';
import Cart from './Cart';
// Lazy load components
const Payment = lazy(() => import('./Payment'));
const Completion = lazy(() => import('./Completion'));

function App() {
  const dispatch = useDispatch();
  // Use Redux store to manage geolocation data
  const geoData = useSelector((state) => state.geo.data); // Assuming your geo slice state is named 'geo'

  useEffect(() => {
    dispatch(fetchGeoInfo());
  }, [dispatch]);

  useEffect(() => {
    // This effect listens for changes in geoData and sets the language accordingly
    if (geoData && geoData.location && geoData.location.languages) {
      const language = geoData.location.languages[0].code;
      i18n.changeLanguage(language);
    } else {
      i18n.changeLanguage('en'); // Fallback language
    }
  }, [geoData]);

  return (
    <main>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/payment" element={<Payment />} />
            <Route path="/completion" element={<Completion />} />
            <Route path="/" component={Cart} />
            {/* Add other routes as needed */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </main>
  );
}

export default App;
