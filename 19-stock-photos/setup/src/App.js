import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
import { useFetch } from "./hooks/useFetch";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [photosPerPage, setPhotosPerPage] = useState(10);
  console.log(
    "🚀TCL: ~ file: App.js ~ line 11 ~ App ~ photosPerPage",
    photosPerPage
  );
  const [url, setUrl] = useState(
    `${mainUrl}${clientID}&per_page=${photosPerPage}`
  );
  console.log("🚀TCL: ~ file: App.js ~ line 16 ~ App ~ url", url);
  const [searchQuery, setSearchQuery] = useState("");
  // const { loading, data: photoData } = useFetch(url);
  const [photos, setPhotos] = useState([]);
  console.log("🚀TCL: ~ file: App.js ~ line 14 ~ App ~ photos", photos);
  const [loading, setLoading] = useState(false);
  const photosRef = useRef(null);

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  const fetchPhotos = useCallback(
    async (url) => {
      console.log("🚀TCL: ~ file: App.js ~ line 11 ~ App ~ url", url);
      setLoading(true);
      try {
        const response = await fetch(url);
        const photoData = await response.json();
        const newPhotos = photoData.map((photo) => {
          const {
            id,
            urls: { full: image },
            alt_description: desc,
            likes,
            user: {
              first_name: firstName,
              last_name: lastName,
              profile_image: { large: avatar },
            },
          } = photo;
          return {
            id,
            image,
            desc,
            likes,
            name: `${firstName} ${lastName}`,
            avatar,
          };
        });
        setPhotos(newPhotos);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    },
    [url]
  );

  const fetchPhotosWithSearch = useCallback(
    async (url) => {
      console.log("🚀TCL: ~ file: App.js ~ line 11 ~ App ~ url", url);
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log("🚀TCL: ~ file: App.js ~ line 61 ~ data", data);
        const { results: photoData } = data;
        // console.log("🚀TCL: ~ file: App.js ~ line 63 ~ results", results);
        const newPhotos = photoData.map((photo) => {
          const {
            id,
            urls: { full: image },
            alt_description: desc,
            likes,
            user: {
              first_name: firstName,
              last_name: lastName,
              profile_image: { large: avatar },
            },
          } = photo;
          return {
            id,
            image,
            desc,
            likes,
            name: `${firstName} ${lastName}`,
            avatar,
          };
        });
        setPhotos(newPhotos);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    },
    [url]
  );

  useEffect(() => {
    if (searchQuery) {
      fetchPhotosWithSearch(url);
    } else {
      fetchPhotos(url);
    }
  }, [fetchPhotos, url, photosPerPage]);

  // useEffect(() => {
  //   if (loading) return;
  //   const newPhotos = photoData.map((photo) => {
  //     const {
  //       id,
  //       urls: { full: image },
  //       alt_description: desc,
  //       likes,
  //       user: {
  //         first_name: firstName,
  //         last_name: lastName,
  //         profile_image: { large: avatar },
  //       },
  //     } = photo;
  //     return {
  //       id,
  //       image,
  //       desc,
  //       likes,
  //       name: `${firstName} ${lastName}`,
  //       avatar,
  //     };
  //   });
  //   setPhotos(newPhotos);
  // }, [loading]);

  // useEffect(() => {
  //   const displayPhotoUrl = `${mainUrl}${clientID}&per_page=10`;
  //   const displayPhotoUrlWithSearch = `${searchUrl}${clientID}&per_page=10&query=${searchQuery}`;
  //   searchQuery ? setUrl(displayPhotoUrlWithSearch) : setUrl(displayPhotoUrl);
  // }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");
    const displayPhotoUrl = `${mainUrl}${clientID}&per_page=${photosPerPage}`;
    const displayPhotoUrlWithSearch = `${searchUrl}${clientID}&per_page=${photosPerPage}&query=${searchQuery}`;
    searchQuery ? setUrl(displayPhotoUrlWithSearch) : setUrl(displayPhotoUrl);
    fetchPhotosWithSearch(url);
  };

  // load when scroll to bottom
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // console.log(entries[0]);

      if (entries[0].isIntersecting) {
        //do your actions here
        setPhotosPerPage(photosPerPage + 10);
        searchQuery ? fetchPhotosWithSearch(url) : fetchPhotos(url);
        console.log("It works!");
      } else {
        console.log("cuoc song ma");
      }
    }, observerOptions);
    if (photosRef.current) {
      observer.observe(photosRef.current);
    }
  }, [photosRef, loading]);

  return (
    <main>
      <div className='search'>
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
      </div>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <section className='photos'>
          <div className='photos-center'>
            {photos &&
              photos.map((photo) => <Photo key={photo.id} {...photo} />)}
          </div>
          <button className='btn' ref={photosRef}>
            Load more
          </button>
        </section>
      )}
    </main>
  );
}

export default App;
