import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';



function FriendList ({ friends = [], friend }) {
    return  (
      <div className={s.container}>
    <ul className={s.friendList}>
      {friends.length > 0 && 
      friends.map(friend => (
        <li key={friend.id} className={s.item}>
           <FriendListItem 
             avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}/>
        </li>
      )
     
        )
      }
    
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
  friend: PropTypes.string.isRequired
    })
  )
};

export default FriendList;