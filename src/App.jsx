import React, { useState, useEffect } from 'react';
'react-router-dom';
import Navbar from './Components/Navbar'

import NavRoutes from './Routes/NavRoutes'

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (

    <div className='flex flex-col min-h-screen'>
      <Navbar user={user} />
      <main className=''>
        <NavRoutes />
      </main>
    </div>

  )
}

export default App