import React, { useState } from "react";
import CatLeft from "./images/1-homepage/cat-left.png";
import CatRight from "./images/1-homepage/cat-right.png";
import TopCats from './topCats';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchTerm}`);
  };
  return (
    <section className="homepage">
    <div className="container">
      <div className ='cat-left'>
          <img 
          src={CatLeft}
          width={200}
          height={370}
          alt= 'cat left'
          />
      </div>
      <div className ='mid-section'>
        <h1>FELINE FINDER:</h1>
        <h2>Adopt a cat today!</h2>
        <p>Explore our selection of cute kitties </p>
        <button className="grid-button" 
        onClick={() => alert('Hello World!')}>
        Adopt A Pet
        </button>
      </div>
      <div className ='cat-right'>
          <img 
          src={CatRight}
          width={345}
          height={520}
          alt= 'cat right'
          />
      </div>
    </div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <TopCats />
    </section>
  );
};
export default HomePage;