import React, { Component } from 'react';
import s from './FriendListItem.module.css';
import PropTypes from 'prop-types';


class FriendListItem extends Component {

    render(){
        const { avatar, name, isOnline } = this.props;
        return (
   <> 
             {isOnline 
              ?  <span className={`${s.status} ${s.onLine}`}>√☺</span>
              : <span className={`${s.status} ${s.ofLine}`}>×☻</span>
    }
             <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
             <p className={s.name}>{name}</p>
     
          </>
          
        );
    };

};



FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,

};

  export default FriendListItem;