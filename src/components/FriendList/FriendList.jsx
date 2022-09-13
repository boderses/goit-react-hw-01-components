import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";

const FriendList = ({
    friends, 
}) => {
  
    return (
    <ul>
        {friends.map(friend =>
            <FriendListItem
                key = {friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />)}
    </ul>
    )
}

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired,
}