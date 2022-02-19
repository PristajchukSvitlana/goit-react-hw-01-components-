import React from 'react';
import PropTypes from 'prop-types';
import s from './User.module.css';




function User ({ username, tag, location, avatar, stats }) 
{
    return ( 
    <div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={s.avatar}
        width="504"
      />
      <p className={s.name}>{username}</p>
      <p className={s.tag}>{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  
    <ul className={s.stats}>
      <li>
        <span className={s.label}>Follovers</span>
        <span className={s.quantity}>1000</span>
      </li>
      <li>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>2000</span>
      </li>
      <li>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>3000</span>
      </li>
    </ul>
  </div>
    )   
 
}

User.propTypes = {
username:PropTypes.string.isRequired,
tag:PropTypes.string.isRequired,
location:PropTypes.string.isRequired,
avatar:PropTypes.string,
stats:PropTypes.objectOf(PropTypes.number).isRequired,
};


export default User;