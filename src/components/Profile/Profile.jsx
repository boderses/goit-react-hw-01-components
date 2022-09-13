import PropTypes from 'prop-types';
import {StyledSection, StyledImg, StyledDescription, StyledName, StyledInfo, StyledStats, StyledItem, StyledLabel, StyledQuantity} from './Profile.styled.js'

const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats,
}) => {
    const { followers, views, likes } = stats;
    return (
    <StyledSection>
        <StyledDescription >
            <StyledImg
                src={avatar}
                alt={username}
               
            />
            <StyledName>{username}</StyledName>
            <StyledInfo>{tag}</StyledInfo>
            <StyledInfo>{location}</StyledInfo>
        </StyledDescription>

        <StyledStats >
            <StyledItem>
                <StyledLabel >Followers</StyledLabel>
                    <StyledQuantity>{followers}</StyledQuantity>
            </StyledItem>
            <StyledItem>
                <StyledLabel >Views</StyledLabel>
                <StyledQuantity>{views}</StyledQuantity>
            </StyledItem>
            <StyledItem>
                <StyledLabel >Likes</StyledLabel>
                <StyledQuantity>{likes}</StyledQuantity>
            </StyledItem>
        </StyledStats>
    </StyledSection>
    )
}

export default Profile;


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
    followers:  PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes:  PropTypes.number.isRequired,
  }),
};

