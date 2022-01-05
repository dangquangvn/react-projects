import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [photos, setPhotos] = useState([]);
  console.log("🚀TCL: ~ file: App.js ~ line 10 ~ App ~ photos", photos);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchPhotos = async () => {
    setLoading(true);
    const pageUrl = `&page=${page}&per_page=9`;
    let url = `${mainUrl}${clientID}${pageUrl}`;
    try {
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <main>
      <section className='search'>
        <form action='' className='search-form'>
          <input type='text' className='form-input' placeholder='Search' />
          <button type='submit' className='submit-btn'>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((photo) => (
            <Photo key={photo.id} {...photo} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
