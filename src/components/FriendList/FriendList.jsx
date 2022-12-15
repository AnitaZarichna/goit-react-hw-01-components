import PropTypes from 'prop-types';
import { FriendItem } from "./FriendItem";
import {FriendsSection,FriendsUl} from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <FriendsSection>
            <FriendsUl>
                {friends.map(friend => (
                   <FriendItem
                        key={friend.id}
                        friend={friend}
                    />))}
            </FriendsUl>
        </FriendsSection>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
};