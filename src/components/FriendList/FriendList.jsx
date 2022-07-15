import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';


function FriendList ({ friends }) {
    return  (
      <div className={s.container}>
    <ul className={s.friends}>
      {friends.length > 0 && 
      friends.map(({ avatar, name, isOnline, id}) => {
        return (
          <li key={id}> 
             <span className="status"></span>
             <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
             <p className={s.name}>{name}</p>
              {isOnline ? <span>{isOnline}</span> : <span>Not available</span>}
          </li>
        )
    })}
  </ul>
  </div>
  )
      }

FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
    })
  )
};

export default FriendList;