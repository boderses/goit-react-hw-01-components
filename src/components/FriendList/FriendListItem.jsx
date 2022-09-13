import PropTypes from 'prop-types';
import {StyledItem, StyledSpan} from './FriendListItem.styled'

const FriendListItem = ({
    avatar,
    name,
    isOnline,
}) => {
    return (
    <StyledItem>
        <StyledSpan status={isOnline}></StyledSpan>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
    </StyledItem>
    )
}


export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}