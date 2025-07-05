import React from 'react';
import { Image, Text, View } from 'react-native';
import { badgeStyles, profileStyles } from '../styles';
import { UserProfile } from '../types/userProfile';
import { ProgressBar } from './ProgressBar';

interface ProfileHeaderProps {
  userProfile: UserProfile;
  variant?: 'primary' | 'secondary';
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ userProfile, variant = 'primary' }) => {
  const imageStyle = variant === 'primary' ? profileStyles.profileImagePrimary : profileStyles.profileImageSecondary;
  const placeholderStyle = variant === 'primary' ? profileStyles.placeholderImagePrimary : profileStyles.placeholderImageSecondary;
  const loginStyle = variant === 'primary' ? profileStyles.loginPrimary : profileStyles.loginSecondary;

  const cursusUser = userProfile.cursus_users.find(c => c.cursus_id === 21);
  const level = cursusUser ? Math.floor(cursusUser.level) : 0;
  const progress = cursusUser ? Math.round((cursusUser.level % 1) * 100) : 0;

  return (
    <View style={profileStyles.profileHeader}>
      <View style={profileStyles.imageContainer}>
        {userProfile.image?.link ? (
          <Image 
            source={{ uri: userProfile.image.versions.large || userProfile.image.link }} 
            style={[profileStyles.profileImage, imageStyle]}
            resizeMode="cover"
          />
        ) : (
          <View style={[profileStyles.placeholderImage, placeholderStyle]}>
            <Text style={profileStyles.placeholderImageText}>
              {userProfile.first_name[0]}{userProfile.last_name[0]}
            </Text>
          </View>
        )}
      </View>
      
      <View style={profileStyles.basicInfo}>
        <Text style={profileStyles.displayName}>{userProfile.displayname}</Text>
        <Text style={[profileStyles.login, loginStyle]}>{userProfile.login}</Text>
        
        {cursusUser && (
          <ProgressBar level={level} progress={progress} />
        )}
        
        <View style={badgeStyles.container}>
          {userProfile.staff && (
            <View style={[badgeStyles.badge, badgeStyles.staff]}>
              <Text style={badgeStyles.text}>Staff</Text>
            </View>
          )}
          {userProfile.alumni && (
            <View style={[badgeStyles.badge, badgeStyles.alumni]}>
              <Text style={badgeStyles.text}>Alumni</Text>
            </View>
          )}
          <View style={[badgeStyles.badge, userProfile.active ? badgeStyles.active : badgeStyles.inactive]}>
            <Text style={badgeStyles.text}>{userProfile.active ? 'Available' : 'Unavailable'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
