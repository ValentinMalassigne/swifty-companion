import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorState } from '../../src/components/ErrorState';
import { LoadingState } from '../../src/components/LoadingState';
import { ProfileHeader } from '../../src/components/ProfileHeader';
import { ScreenHeader } from '../../src/components/ScreenHeader';
import { SkillRow } from '../../src/components/SkillRow';
import { AppDispatch, RootState } from '../../src/store';
import { fetchProfileByLogin } from '../../src/store/publicProfileSlice';
import { cardStyles, layoutStyles, profileStyles } from '../../src/styles';
import { ProjectUser } from '../../src/types/userProfile';

const ProjectsSection = ({ projects }: { projects: ProjectUser[] }) => {
  const [expanded, setExpanded] = useState(false);

  const inProgressProjects = projects.filter(p => (p.status !== 'finished' && p.final_mark === null));
  const finishedProjects = projects.filter(p => p.status === 'finished');

  const translateStatus = (status: string) => {
    switch (status) {
      case 'in_progress':
        return 'In Progress';
      case 'waiting_for_correction':
        return 'Waiting for Correction';
      default:
        return status;
    }
  };

  return (
    <View style={cardStyles.section}>
      <Text style={cardStyles.cardTitle}>Projets</Text>

      {inProgressProjects.length > 0 && (
        <View style={profileStyles.detailColumn}>
          <Text style={profileStyles.detailLabel}>Started</Text>
          {inProgressProjects.map((project, index) => (
            <View key={index} style={profileStyles.detailRow}>
              <Text style={profileStyles.detailValueLeft}>{project.project.name}</Text>
              <Text style={profileStyles.detailValue}>{translateStatus(project.status)}</Text>
            </View>
          ))}
        </View>
      )}

      {finishedProjects.length > 0 && (
        <View style={profileStyles.detailColumn}>
          <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            <Text style={profileStyles.detailLabel}>{expanded ? '▼' : '▶'} Finished</Text>
          </TouchableOpacity>

          {expanded && finishedProjects.map((project, index) => (
            <View key={index} style={profileStyles.detailRow}>
              <Text style={profileStyles.detailValueLeft}>{project.project.name}</Text>
              <Text style={project.final_mark !== null && project["validated?"] === false ? profileStyles.failedMark : profileStyles.detailValue}>
                {project.final_mark}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default function ProfilePage() {
  const { login } = useLocalSearchParams<{ login: string }>();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { userProfile, isLoading, error } = useSelector((state: RootState) => state.publicProfile);

  useEffect(() => {
    if (login) {
      dispatch(fetchProfileByLogin(login));
    }
  }, [login, dispatch]);

  const handleGoBack = () => {
    router.back();
  };

  const handleRetry = () => {
    if (login) {
      dispatch(fetchProfileByLogin(login));
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={layoutStyles.container}>
        <LoadingState message={`Loading profile for ${login}...`} />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={layoutStyles.container}>
        <ErrorState title="Error" message={error} onRetry={handleRetry} onBack={handleGoBack} />
      </SafeAreaView>
    );
  }

  if (!userProfile) {
    return (
      <SafeAreaView style={layoutStyles.container}>
        <ErrorState title="No Profile Data" message="Unable to load profile information" onBack={handleGoBack} />
      </SafeAreaView>
    );
  }

  const cursusUser = userProfile.cursus_users.find(c => c.cursus_id === 21);
  const skills = cursusUser ? cursusUser.skills.map(skill => ({ name: skill.name, level: skill.level })) : [];

  return (
    <SafeAreaView style={layoutStyles.container}>
      <ScreenHeader title={`Profile de ${login}`} onBack={handleGoBack} />

      <ScrollView style={layoutStyles.container} showsVerticalScrollIndicator={false}>
        <View style={layoutStyles.padding}>
          <ProfileHeader userProfile={userProfile} variant="primary" />

          {/* Profile Details */}
          <View style={cardStyles.section}>
            <Text style={cardStyles.cardTitle}>Profile Informations</Text>
            
            <View style={profileStyles.detailRow}>
              <Text style={profileStyles.detailLabel}>Role</Text>
              <Text style={profileStyles.detailValue}>{userProfile.kind}</Text>
            </View>

            <View style={profileStyles.detailRow}>
              <Text style={profileStyles.detailLabel}>Piscine</Text>
              <Text style={profileStyles.detailValue}>{userProfile.pool_month} {userProfile.pool_year}</Text>
            </View>

            <View style={profileStyles.detailRow}>
              <Text style={profileStyles.detailLabel}>Location</Text>
              <Text style={profileStyles.detailValue}>{userProfile.location || 'Unavailable'}</Text>
            </View>

            <View style={profileStyles.detailRow}>
              <Text style={profileStyles.detailLabel}>Correction Points</Text>
              <Text style={profileStyles.detailValue}>{userProfile.correction_point}</Text>
            </View>

            <View style={profileStyles.detailRow}>
              <Text style={profileStyles.detailLabel}>Wallet</Text>
              <Text style={profileStyles.detailValue}>{userProfile.wallet} ₳</Text>
            </View>

            <View style={profileStyles.detailRow}>
              <Text style={profileStyles.detailLabel}>E-mail</Text>
              <Text style={profileStyles.detailValue}>{userProfile.email || 'Unavailable'}</Text>
            </View>

            {userProfile.phone !== "hidden" && (
              <View style={profileStyles.detailRow}>
                <Text style={profileStyles.detailLabel}>Phone</Text>
                <Text style={profileStyles.detailValue}>{userProfile.phone}</Text>
              </View>
            )}

            {userProfile.alumnized_at && (
              <View style={profileStyles.detailRow}>
                <Text style={profileStyles.detailLabel}>Alumnized</Text>
                <Text style={profileStyles.detailValue}>{new Date(userProfile.alumnized_at).toLocaleDateString()}</Text>
              </View>
            )}
          </View>

          {userProfile.projects_users && userProfile.projects_users.length > 0 && (
            <ProjectsSection projects={userProfile.projects_users} />
          )}

          {cursusUser && skills.length > 0 && (
            <View style={cardStyles.section}>
              <Text style={cardStyles.cardTitle}>Skills</Text>
              {skills.map((skill, index) => (
                <SkillRow key={index} name={skill.name} level={skill.level} />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
