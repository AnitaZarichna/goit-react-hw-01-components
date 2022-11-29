import PropTypes from 'prop-types';

export const ProfileCard = ({
    username,
    tag,
    location,
    avatar,
    stats}) => {
    return (
    <div key={tag}>
        <div>
            <img src={avatar} alt="User avatar"></img>
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </div>
        <ul>
            <li><span>Followers</span>
             <span>{stats.followers}</span></li>
             <li> <span>Views</span>
             <span>{stats.views}</span></li>
             <li> <span>Likes</span>
             <span>{stats.likes}</span></li>
        </ul>
    </div>
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