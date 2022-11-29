import PropTypes from 'prop-types';

import { FriendItem } from "./FriendItem";

export const FriendList = ({friends}) => {
    return (
        <div>
            <ul>
                {friends.map(friend => (
                   <FriendItem
                        key={friend.id}
                        friend={friend}
                    />))}
            </ul>
        </div>
    )
}

FriendItem.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnlane: PropTypes.bool.isRequired,
};