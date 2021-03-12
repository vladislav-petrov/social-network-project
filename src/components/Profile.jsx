const Profile = function() {
  return (
    <div className="content">
      <img
        src="content.jpg"
        alt="Content"
      />
      <div className="user-info">
        <div className="user-image">
          <img
            src="profile-logo.jpg"
            alt="User"
          />
        </div>
        <div className="user-description">
          Age: 30
          City: Los-Angeles
        </div>
      </div>
      <div className="posts">
        <div className="post">
          Post 1
        </div>
        <div className="post">
          Post 2
        </div>
        <div className="post">
          Post 3
        </div>
      </div>
    </div>
  );
}

export default Profile;