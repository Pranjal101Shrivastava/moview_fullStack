import React from 'react'

import "./style.scss";

const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome!</span>
          <span className='subTitle'>Millions of movies, TV shows and people to discover.</span>
          <div className="searchInput">
            <input 
              type="text" placeholder='search for a movie or TV show ...'
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default HeroBanner
