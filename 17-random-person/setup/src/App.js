import React, { useState, useEffect, useCallback } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [status, setStatus] = useState("name");
  console.log("🚀TCL: ~ file: App.js ~ line 15 ~ App ~ user", user);
  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { results } = data;
      if (results) {
        const {
          name: { first, last },
          email,
          dob: { age } /**{ age } */,
          location: {
            street: { number: streetNumber, name: streetName },
          } /**{street} */,
          phone,
          login: { password } /**{password} */,
          picture: { large },
        } = results[0];
        console.log(
          "🚀TCL: ~ file: App.js ~ line 30 ~ fetchUser ~ results",
          results
        );
        const newUser = {
          firstName: first,
          lastName: last,
          email,
          age,
          streetNumber,
          streetName,
          phone,
          password,
          image: large,
        };
        setUser(newUser);
      } else {
        setUser([]);
      }
      console.log(results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const {
    firstName,
    lastName,
    email,
    age,
    streetName,
    streetNumber,
    phone,
    password,
    image,
  } = user;

  const handleHover = (e) => {
    console.log(e.target.dataset.user);
    const currentStatus = e.target.dataset.user;
    if (currentStatus) {
      setStatus(currentStatus);
    }
  };

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img src={image} alt={firstName} />
          <div className='user-info'>
            <p className='user-title'>My {status} is</p>
            <h3 className={`${status === "name" ? "show" : "hide"}`}>
              {firstName} {lastName}
            </h3>
            <h3 className={`${status === "email" ? "show" : "hide"}`}>
              {email}
            </h3>
            <h3 className={`${status === "age" ? "show" : "hide"}`}>{age}</h3>
            <h3 className={`${status === "address" ? "show" : "hide"}`}>
              {streetNumber} {streetName}
            </h3>
            <h3 className={`${status === "phone" ? "show" : "hide"}`}>
              {phone}
            </h3>
            <h3 className={`${status === "password" ? "show" : "hide"}`}>
              {password}
            </h3>
            <div className='values-list'>
              <div className='icon' data-user='name' onMouseOver={handleHover}>
                <FaUser />
              </div>
              <div className='icon' data-user='email' onMouseOver={handleHover}>
                <FaEnvelopeOpen />
              </div>
              <div className='icon' data-user='age' onMouseOver={handleHover}>
                <FaCalendarTimes />
              </div>
              <div
                className='icon'
                data-user='address'
                onMouseOver={handleHover}
              >
                <FaMap />
              </div>
              <div className='icon' data-user='phone' onMouseOver={handleHover}>
                <FaPhone />
              </div>
              <div
                className='icon'
                data-user='password'
                onMouseOver={handleHover}
              >
                <FaLock />
              </div>
            </div>
            <button className='btn' onClick={() => fetchUser()}>
              Random User
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
