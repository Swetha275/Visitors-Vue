import React, { Component, useEffect, useState } from 'react';
import HomePage from './HomePage';
import axios from 'axios';

export default function Detail() {
  const [userData, setUserData] = useState('');
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    axios.post(`http://localhost:8000/userData`, { token }).then(data => {
      setUserData(data);
    });
  },[]);
  return <HomePage userData={userData} />;
}
