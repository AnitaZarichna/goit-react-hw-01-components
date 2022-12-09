import PropTypes from 'prop-types';
import {Profile,Photo, UserName,Tag,Location,Main,Stats,StatsItem,Label,Quantity} from './Profile.styled';

export const ProfileCard = ({
    username,
    tag,
    location,
    avatar,
    stats}) => {
    return (
    <Profile key={tag}>
        <Main>
            <Photo src={avatar} alt="User avatar"></Photo>
            <UserName>{username}</UserName>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Main>
        <Stats>
            <StatsItem><Label>Followers</Label>
             <Quantity>{stats.followers}</Quantity></StatsItem>
             <StatsItem> <Label>Views</Label>
             <Quantity>{stats.views}</Quantity></StatsItem>
             <StatsItem> <Label>Likes</Label>
             <Quantity>{stats.likes}</Quantity></StatsItem>
        </Stats>
    </Profile>
    );
  };
  ProfileCard.propTypes = {
    profile: PropTypes.shape({
      username: PropTypes.string,
      tag: PropTypes.string,
      location: PropTypes.string,
      avatar: PropTypes.string,
      stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
      }),
    }),
  };