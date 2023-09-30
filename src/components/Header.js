import React from 'react'

function Header({inputValue, handleInputChange, getRepos})
{
    return (
        <div className='head'>
        <input
          type="text"
          className="input-style"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="get-button" onClick={getRepos}>
          Get Repos
        </button>
        </div>

    )
}

export default Header

