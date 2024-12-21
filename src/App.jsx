import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [user, setUser] = useState();
  console.log(user)
  const setUserData = (data) => {
      setUser(data);
  }
  
  const getUser = async () => {
      try {
        const { data } = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserData(data.results[0]);
      } catch (error) {
        console.log(error);
      }
  }
  useEffect(()=>{
    getUser();
  }, [])

  return (
    <div className="app">
      {user && <div className="card">
        <div className="imgSection">
          <img src={user.picture.large} alt=""/>
        </div>
        <div className="userDetails">
          <div className="fullName">
            <p className='firstName'>{user.name.first}</p>
            <p className='lastName'>{user.name.last}</p>
          </div>
          <p className="gender">{user.gender}</p>
          <p className="mobileNumber">{user.phone}</p>
        </div>
      </div>}
    </div>
  )
}

export default App
