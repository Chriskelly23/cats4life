import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './homePage.css';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <input
      type="text"
      value={searchInput}
      onChange={e => setSearchInput(e.target.value)}
    />
  );
}
