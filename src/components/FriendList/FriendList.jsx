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

FriendItem.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnlane: PropTypes.bool.isRequired,
};