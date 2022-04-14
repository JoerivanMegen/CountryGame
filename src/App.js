import React, {useEffect, useState} from 'react';
import Navbar from './Components/Navbar';
import StartScreen from './Components/StartScreen';
import axios from "axios";

function App() {
  // const [loading, setLoading] = useState(false);
  //   const [country, setCountry] = useState([]);
  
  //   useEffect(() => {
  //       const loadCountry = async () => {
  
  //           // Till the data is fetch using API 
  //           // the Loading page will show.
  //           setLoading(true);
  
  //           // Await make wait until that 
  //           // promise settles and return its result
  //           const response = await axios.get(
  //           "https://restcountries.com/v2/all");
  
  //           // After fetching data stored it in posts state.
  //           setCountry(response.data);
  
  //           // Closed the loading page
  //           setLoading(false);
  //       }
  
  //       // Call the function
  //       loadCountry();
  //   }, []);

    function getRandomIndex(){
      Math.random()
    }
    console.log(getRandomIndex)
  return (
        <>
            <Navbar />
            <StartScreen />
        </>
  )
}

export default App

