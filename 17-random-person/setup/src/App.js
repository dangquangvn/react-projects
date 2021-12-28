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
  // person
  const [user, setUser] = useState([]);
  const [status, setStatus] = useState("name");
  const [value, setValue] = useState("random person");
  console.log("🚀TCL: ~ file: App.js ~ line 18 ~ App ~ value", value);
  console.log("🚀TCL: ~ file: App.js ~ line 15 ~ App ~ user", user);
  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { results } = data;
      if (results) {
        const {
          name: { first: firstName, last: lastName },
          email,
          dob: { age } /**{ age } */,
          location: {
            street: { number: streetNumber, name: streetName },
          } /**{street} */,
          phone,
          login: { password } /**{password} */,
          picture: { large: image },
        } = results[0];
        console.log(
          "🚀TCL: ~ file: App.js ~ line 30 ~ fetchUser ~ results",
          results
        );
        const newUser = {
          name: `${firstName} ${lastName}`,
          // firstName: first,
          // lastName: last,
          email,
          age,
          street: `${streetNumber} ${streetName}`,
          // streetNumber,
          // streetName,
          phone,
          password,
          image,
        };
        setUser(newUser);
        setStatus("name");
        setValue(newUser.name);
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
    // firstName,
    // lastName,
    name,
    email,
    age,
    street,
    // streetName,
    // streetNumber,
    phone,
    password,
    image,
  } = user;

  const handleHover = (e) => {
    console.log(e.target.dataset.user);
    // console.log("anh em ta");
    console.log("value ->>", value);
    if (!e.target.classList.contains("icon")) return;
    const currentStatus = e.target.dataset.user;
    if (!currentStatus) return;
    setStatus(currentStatus);
    setValue(user[currentStatus]);
    // switch (currentStatus) {
    //   case "name":
    //     return setValue(user.name);
    //   case "email":
    //     return setValue(user.email);
    //   case "age":
    //     return setValue(user.age);
    //   case "street":
    //     return setValue(user.street);
    //   case "phone":
    //     return setValue(user.phone);
    //   case "password":
    //     return setValue(user.password);
    // }
  };

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img src={image} alt={name} />
          <div className='user-info'>
            <p className='user-title'>My {status} is</p>
            <h3>{value}</h3>
            {/* <h3 className={`${status === "name" ? "show" : "hide"}`}> */}
            {/* {firstName} {lastName} */}
            {/* {name}
            </h3> */}
            {/* <h3 className={`${status === "email" ? "show" : "hide"}`}>
              {email}
            </h3>
            <h3 className={`${status === "age" ? "show" : "hide"}`}>{age}</h3>
            <h3 className={`${status === "street" ? "show" : "hide"}`}> */}
            {/* {streetNumber} {streetName} */}
            {/* {street}
            </h3>
            <h3 className={`${status === "phone" ? "show" : "hide"}`}>
              {phone}
            </h3>
            <h3 className={`${status === "password" ? "show" : "hide"}`}>
              {password}
            </h3> */}
            <div className='values-list'>
              <div className='icon' data-user='name' onMouseOver={handleHover}>
                <FaUser />
              </div>
              <button
                className='icon'
                data-user='email'
                onMouseOver={handleHover}
              >
                <FaEnvelopeOpen />
              </button>
              <button
                className='icon'
                data-user='age'
                onMouseOver={handleHover}
              >
                <FaCalendarTimes />
              </button>
              <button
                className='icon'
                data-user='street'
                onMouseOver={handleHover}
              >
                <FaMap />
              </button>
              <button
                className='icon'
                data-user='phone'
                onMouseOver={handleHover}
              >
                <FaPhone />
              </button>
              <button
                className='icon'
                data-user='password'
                onMouseOver={handleHover}
              >
                <FaLock />
              </button>
            </div>
            <button className='btn' onClick={() => fetchUser()}>
              {loading ? "loading..." : "Random User"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
