import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';

export default function Profile() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem('token');
    window.location.replace('/');
  }

  return (
    <div className="min-h-screen flex item-center justify-center">
      <div className="mt-5">
        <h1>Berhasil Login</h1>
        <h1>token : {token}</h1>
        <button onClick={handleLogout}>Logout</button>
        <div className="m-4">
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </div>
    </div>
  );
}
