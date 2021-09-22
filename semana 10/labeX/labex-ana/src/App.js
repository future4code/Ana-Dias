import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import CreateTripPage from './Pages/ListTripsPage/CreateTripPage';
import ListTripsPage from './Pages/ListTripsPage/ListTripsPage';

function App() {
  return (
    <div>
        <HomePage/> 
       <ListTripsPage />
       <CreateTripPage />
    </div>
  );
}

export default App;
