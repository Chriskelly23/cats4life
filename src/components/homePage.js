import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";



const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1>FELINE FINDER:</h1>
      <h2>PICK YOUR PURRFECT PET!</h2>
      <p>Explore our selection of cute kitties in need of a loving home.Start your adoption journey today.</p>

      <Link to="/adopt"><button>Adopt</button></Link>
      <img src="images/1-homepage/cat-right.png" alt="cat right" />
      <img src="images/1-homepage/cat-left.png" alt="cat left" />
      <SearchBar />
    </div>
  );
};

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    // handle search logic here
  };

  return (
    <>
      <input
        type="text"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};
