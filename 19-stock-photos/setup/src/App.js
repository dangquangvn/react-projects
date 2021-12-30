import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

function App() {
  // const [photosPerPage, setPhotosPerPage] = useState(10);
  const [page, setPage] = useState(0);
  console.log("🚀TCL: ~ file: App.js ~ line 18 ~ App ~ page", page);
  // const [url, setUrl] = useState(
  //   `${mainUrl}${clientID}&per_page=${photosPerPage}`
  // );
  const [searchQuery, setSearchQuery] = useState("");
  // const { loading, data: photoData } = useFetch(url);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const photosRef = useRef(null);

  const fetchPhotos = async () => {
    let url;
    const urlPage = `&page=${page}`;
    const urlSearchQuery = `&query=${searchQuery}`;
    if (searchQuery) {
      url = `${searchUrl}${clientID}${urlPage}${urlSearchQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    setLoading(true);
    try {
      const response = await fetch(url);
      const photoData = await response.json();

      let newPhotos;
      // if (searchQuery && page === 1) {
      // console.log("searchQuery && page === 1", photoData.results);
      // return photoData.results;
      // } else
      if (searchQuery) {
        console.log("searchQuery");
        const { results } = photoData;
        newPhotos =
          (results &&
            results.map((photo) => {
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
            })) ||
          [];
        // return [...oldPhotos, ...newPhotos];
        // console.log("🚀TCL: newPhotos with searchQuery", newPhotos);
      } else {
        console.log("default");
        newPhotos = photoData.map((photo) => {
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
        // console.log("🚀TCL: newPhotos ", newPhotos);
        // return [...oldPhotos, ...newPhotos];
      }

      // setPhotos(newPhotos);
      if (page === 1) {
        setPhotos(newPhotos);
      } else {
        setPhotos((oldPhotos) => [...oldPhotos, ...newPhotos]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //TODO: infinite scroll: METHOD 1: using scroll event
  //& add -2px for trigger load images sooner
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        console.log("it worked");
        setPage((oldPage) => oldPage + 1);
        // setPage(page + 1);
      }
      // console.log(`innerHeight: ${window.innerHeight}`);
      // console.log(`scrollY: ${window.scrollY}`);
      // console.log(`body height: ${document.body.scrollHeight}`);
    });
    return () => window.removeEventListener("scroll", event);
    // eslint-disable-next-line
  }, []);
  //TODO end METHOD 1: using scroll event

  //TODO: infinite scroll: METHOD 2: using intersection observer
  // load when scroll to bottom
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     // console.log(entries[0]);

  //     if (entries[0].isIntersecting) {
  //       //do your actions here
  //       setPhotosPerPage(photosPerPage + 10);
  //       searchQuery ? fetchPhotosWithSearch(url) : fetchPhotos(url);
  //       console.log("It works!");
  //     } else {
  //       console.log("cuoc song ma");
  //     }
  //   }, observerOptions);
  //   if (photosRef.current) {
  //     observer.observe(photosRef.current);
  //   }
  // }, [photosRef, loading]);
  //TODO: END METHOD 2: using intersection observer

  useEffect(() => {
    fetchPhotos();
    // eslint-disable-next-line
  }, [page]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    // fetchPhotos();
  };

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
      <section className='photos'>
        <div className='photos-center'>
          {photos && photos.map((photo) => <Photo key={photo.id} {...photo} />)}
        </div>
        {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
