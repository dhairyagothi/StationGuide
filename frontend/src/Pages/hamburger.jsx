import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowLeft, FaSearch, FaTimes } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const expandWidth = keyframes`
  from {
    width: 0;
  }
  to {
    width: 200px;
  }
`;

const shrinkWidth = keyframes`
  from {
    width: 200px;
  }
  to {
    width: 0;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  padding: 5px 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
  margin-right: 10px;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #1e90ff;
    transform: scale(1.1);
  }
`;

const ClearIcon = styled(FaTimes)`
  font-size: 18px;
  color: #333;
  cursor: pointer;
  margin-left: 10px;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #ff4500;
    transform: rotate(90deg);
  }
`;

const SearchInput = styled.input`
  display: block;
  padding: 8px 12px;
  border-radius: 20px;
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  width: ${({ show }) => (show ? '200px' : '0px')};
  transition: width 0.4s ease, opacity 0.4s ease;
  animation: ${({ show }) => (show ? expandWidth : shrinkWidth)} 0.4s ease;

  &:focus {
    outline: none;
    background-color: rgba(245, 245, 245, 0.9);
  }

  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};

  &::placeholder {
    color: #aaa;
  }
`;

const Hamburger = () => { 
  const [showSearch, setShowSearch] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const searchInputRef = useRef(null); 

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    searchInputRef.current.focus();
  };

  // Focus input when search is toggled on
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <div>
      <SearchContainer>
        <SearchIcon onClick={toggleSearch} />
        <SearchInput
          type="text"
          show={showSearch}
          placeholder="Search..."
          ref={searchInputRef}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {showSearch && searchTerm && <ClearIcon onClick={clearSearch} />}
      </SearchContainer>
    </div>
  );
};

export default Hamburger;
