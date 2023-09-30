import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Repos from './Repos';


function Repositories(link) {
    const [inputValue, setInputValue] = useState('');
    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState(0);
    const [counter, setCounter] = useState(1);
  
    const getRepos = () => {
      if (inputValue === '') {
        alert('Please enter a username');
      } else {
        fetch( `https://api.github.com/users/${inputValue}/repos`)
          .then((response) => response.json())
          .then((data) => {
            setReposCount(data.length);
            setRepos(data);
          })
      }
    };
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    // const handleNextClick = () => {
    //   setCounter((prevCounter) => prevCounter + 1);
    // };
  
    // const handlePrevClick = () => {
    //   setCounter((prevCounter) => prevCounter - 1);
    // };
  
    return (
      <div>

        <Header inputValue={inputValue} handleInputChange={handleInputChange} getRepos={getRepos} />


        <div className="show-data">

          <Repos repos={repos} inputValue={inputValue}/>


          {/* {counter > 1 && (
            <button className="prev" onClick={handlePrevClick}>
              Previous
            </button>
          )}
          {repos.length === 30 && (
            <button className="next" onClick={handleNextClick}>
              Next
            </button>
          )} */}
        </div>
      </div>
    );
  }
  
  export default Repositories;