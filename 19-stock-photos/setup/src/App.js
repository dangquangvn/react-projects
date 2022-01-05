import React, { useState, useEffect, useRef } from "react";
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
  console.log("🚀TCL: line 13 page top", page);
  const loadingRef = useRef();
  const mounted = useRef(false);
  const [newImages, setNewImages] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchPhotos = async () => {
    setLoading(true);
    const pageUrl = `&page=${page}&per_page=9`;
    const queryUrl = `&query=${searchQuery}`;
    let url;
    if (searchQuery) {
      url = `${searchUrl}${clientID}${pageUrl}${queryUrl}`;
    } else {
      url = `${mainUrl}${clientID}${pageUrl}`;
    }
    try {
      // console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      console.log("🚀TCL: ~ file: App.js ~ line 32 ~ fetchPhotos ~ data", data);
      setPhotos((oldPhotos) => {
        if (searchQuery && page === 1) {
          return data.results;
        } else if (searchQuery) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setNewImages(false);
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  //TODO: method 1: using intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!loading && entries[0].isIntersecting) {
          // setPage((oldPage) => oldPage + 1);
          setNewImages(true);
        }
      },
      { threshold: 1 }
    );
    observer.observe(loadingRef.current);
  }, [loading]);
  //TODO: method 2: using scroll event
  // useEffect(() => {
  //   const event = window.addEventListener("scroll", () => {
  //     if (
  //       !loading &&
  //       window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
  //     ) {
  //       setPage((oldPage) => oldPage + 1);
  //     }
  //   });
  //   return () => window.removeEventListener("scroll", event);
  // }, []);

  //TODO: check first time render -> ONLY fetch, DO NOT run observer|| check render newImages === TRUE -> setPage++
  useEffect(() => {
    //& if first time render, DO NOT trigger setPage
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    //& if still loading or NOT observe intersection
    if (loading || !newImages) return;

    //& load more images
    setPage((oldPage) => oldPage + 1);
  }, [newImages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    if (page === 1) {
      fetchPhotos();
    }
    setPage(1);
  };

  return (
    <main>
      <section className='search'>
        <form action='' className='search-form'>
          <input
            type='text'
            className='form-input'
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
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
        <h1 className='loading' ref={loadingRef}>
          Loading...
        </h1>
      </section>
    </main>
  );
}

export default App;
