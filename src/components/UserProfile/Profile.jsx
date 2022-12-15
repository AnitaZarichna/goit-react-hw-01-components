import PropTypes from 'prop-types';
import {Profile,Photo, UserName,Tag,Location,Main,Stats,StatsItem,Label,Quantity} from './Profile.styled';

export const ProfileCard = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes }}) => {
    return (
    <Profile>
        <Main>
            <Photo src={avatar} alt="User avatar"></Photo>
            <UserName>{username}</UserName>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Main>
        <Stats>
            <StatsItem><Label>Followers</Label>
             <Quantity>{followers}</Quantity></StatsItem>
             <StatsItem> <Label>Views</Label>
             <Quantity>{views}</Quantity></StatsItem>
             <StatsItem> <Label>Likes</Label>
             <Quantity>{likes}</Quantity></StatsItem>
        </Stats>
    </Profile>
    );
  };
  ProfileCard.propTypes = {
    profile: PropTypes.shape({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    }),
  };