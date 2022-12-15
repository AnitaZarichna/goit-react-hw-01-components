import PropTypes from 'prop-types';
import {FriensdItem,Label,Avatar,Name} from './FriendList.styled';

export function FriendItem ({friend}) {
    const { avatar, name, isOnline } = friend;
    return (
      <FriensdItem>
        <Label style={{
                backgroundColor: getBgColor(friend.isOnline),
              }}
              >{isOnline}</Label>
        <Avatar  src={avatar} alt="User avatar" width="48" />
        <Name >{name}</Name>
      </FriensdItem>
    );
  };

  const getBgColor = isOnline => {
    switch (isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'pink';
    }
  };
  
  FriendItem.propTypes = {
    friend: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
    }),
  };