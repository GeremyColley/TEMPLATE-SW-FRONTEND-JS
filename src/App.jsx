import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Cookies from "js-cookie";
import axios from 'axios'
import './App.css'

// Components
import Header from './components/Header'
import Line from './components/Line'

// Pages
import Home from './pages/Home'
import Publish from './pages/Publish'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Account from './pages/Account'
import Details from './pages/Details'

import projets from './assets/json/projets.json'


function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  //const [sortPrice, setSortPrice] = useState();
  //const [fetchRangeValues, setFetchRangeValues] = useState([0, 10000]);

  const tab = [];

  const setUser = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token);
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };
/*
  for (let i = 0; i < projets.length; i++) {
    if (projets[i].NomProjet.includes(search)) {
      if (tab.length < 10) {
        tab.push(<Line projets={projets[i]} key={i} />);
      } else {
        break;
      }
    }
  }
*/
  for (let i = 0; i < data.length; i++) {
    if (data[i].NomProjet.includes(search)) {
      if (tab.length < 10) {
        tab.push(<Line projets={data[i]} key={i} />);
      } else {
        break;
      }
    }
  }

  useEffect( () => {
    const fetchData = async () => {
      try {
        console.log("prefixe url : " + import.meta.env.VITE_API_projet);
        console.log("search : " + search);

        const response = await axios.get(`${import.meta.env.VITE_API}/projets?title=${search}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search]);

  return (
    <div className='App'>
      <Router>
        <Header 
          search={search}
          setSearch={setSearch}
          token={token}
          setUser={setUser}
        />
        <Routes>
          <Route path='/' element={<Home data={tab} isLoading={isLoading} />}/>
          <Route path='/login' element={<Login setUser={setUser}/>}/>
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path='/publish' element={<Publish token={token} />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
