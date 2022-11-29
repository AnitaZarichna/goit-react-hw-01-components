import PropTypes from 'prop-types';

export function FriendItem ({friend}) {
    const { avatar, name, isOnline } = friend;
    return (
      <div>
        <span>{isOnline}</span>
        <img  src={avatar} alt="User avatar" width="48" />
        <p >{name}</p>
      </div>
    );
  };
  
  FriendItem.propTypes = {
    friends: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  };