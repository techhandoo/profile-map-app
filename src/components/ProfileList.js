import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles, onProfileSelect }) => {
  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <ProfileCard 
          key={profile.id}
          profile={profile}
          onProfileSelect={onProfileSelect}
        />
      ))}
    </div>
  );
};

export default ProfileList;
