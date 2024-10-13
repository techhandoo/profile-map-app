import React from 'react';

const ProfileCard = ({ profile, onProfileSelect }) => {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <p className="profile-summary">{profile.summary}</p>
      <button onClick={() => onProfileSelect(profile)}>Location</button> {/* Changed button text */}
    </div>
  );
};

export default ProfileCard;
