import React from 'react';
import './Header.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import image from '../src/Photo.jpeg';


function Header() {
  return (
    <header className="header">
        <div className='shadow-line'>
        <div className="triangle">
                <div className="top-circle"></div>
                <div className="bottom-circle circle1"></div>
                <div className="bottom-circle circle2"></div>
            </div>
            <div className="header-title">Project M.</div>
        </div>
      <div className="header-search">
        <FontAwesomeIcon icon={faSearch}/>
        <input type="text" placeholder="Search for anything..." className='search'/>
      </div>
      <div className="header-icons">
        <FontAwesomeIcon icon={faCalendar} />
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div className="header-user">
        <div>
            <h4>Anima Agrawal</h4>
            <h4 className='state'>T.S, India</h4>
        </div>
        <img src={image} alt='User'/>
      </div>
    </header>
  );
}

export default Header;
