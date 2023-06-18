import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faCommentAlt, faTasks, faUsers, faCog, faLightbulb } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <ul>
           <li><FontAwesomeIcon icon={faHouseUser} className='icon'/>Home</li>
           <li><FontAwesomeIcon icon={faCommentAlt} className='icon'/> Messages</li>
           <li><FontAwesomeIcon icon={faTasks} className='icon'/>Tasks</li>
           <li><FontAwesomeIcon icon={faUsers} className='icon'/>Members</li>
           <li><FontAwesomeIcon icon={faCog} className='icon'/>Settings</li>
         </ul>
      </div>
      <div className='horizontal-line'></div>
      <div className="myprojects">
        <h5>MY PROJECTS</h5>
        <ul>
           <li>Mobile App</li>
           <li>Website Redesign</li>
           <li>Design System</li>
           <li>Wireframes</li>
         </ul>
      </div>
      <div className='thoughts'>
        <div className='bulb-div'><FontAwesomeIcon icon={faLightbulb} className='bulb'/></div>
        <div>
            <h3>Thoughts Times</h3>
            <p>We don't have any notice for you, till then you can share your thoughts with your peers.</p>
            <button>Write a message</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
