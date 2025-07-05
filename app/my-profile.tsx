import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Alert, FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorState } from '../src/components/ErrorState';
import { LoadingState } from '../src/components/LoadingState';
import { ProfileHeader } from '../src/components/ProfileHeader';
import { ScreenHeader } from '../src/components/ScreenHeader';
import { AppDispatch, RootState } from '../src/store';
import { fetchEvents, registerForEventThunk } from '../src/store/eventsSlice';
import { fetchUser } from '../src/store/userSlice';
import { cardStyles, layoutStyles, profileStyles } from '../src/styles';

export default function MyProfilePage() {
  const { code, redirect_uri } = useLocalSearchParams<{ code?: string; redirect_uri?: string }>();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { userProfile, isLoading, error } = useSelector((state: RootState) => state.user);
  const { token } = useSelector((state: RootState) => state.auth);
  const { events, isLoading: eventsLoading, error: eventsError, isRegistering, registrationError } = useSelector((state: RootState) => state.events);

  const upcomingEvents = events.filter(event => new Date(event.begin_at) >= new Date());

  useEffect(() => {
    const loadUserProfile = async () => {
      if (!code || !redirect_uri) {
        return;
      }
      dispatch(fetchUser({ code, redirect_uri }));
    };

    loadUserProfile();
  }, [code, redirect_uri, dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(fetchEvents({ token, campusId: 62 }));
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (registrationError) {
      Alert.alert('Registration Failed', registrationError);
    }
  }, [registrationError]);

  const handleGoBack = () => {
    router.replace('/');
  };

  const handleRetry = () => {
    if (code && redirect_uri) {
      dispatch(fetchUser({ code, redirect_uri }));
    }
  };

  const handleRegisterForEvent = (eventId: number) => {
    if (token && userProfile) {
      dispatch(registerForEventThunk({ token, eventId, userId: userProfile.id }));
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={layoutStyles.container}>
        <LoadingState message="Signing you in..." color="#e74c3c" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={layoutStyles.container}>
        <ErrorState 
          title="Authentication Error" 
          message={error} 
          onRetry={handleRetry} 
          onBack={handleGoBack} 
        />
      </SafeAreaView>
    );
  }

  if (!userProfile) {
    return (
      <SafeAreaView style={layoutStyles.container}>
        <ErrorState 
          title="No Profile Data" 
          message="Unable to load your profile information" 
          onBack={handleGoBack} 
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={layoutStyles.container}>
      <ScreenHeader title="My Profile" onBack={handleGoBack} backButtonText="← Home" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={layoutStyles.padding}>
          <ProfileHeader userProfile={userProfile} variant="secondary" />

          {/* 42 Information */}
          <View style={cardStyles.section}>
            <Text style={cardStyles.cardTitle}>42 Information</Text>
            
            <View style={profileStyles.detailRow}>
              <Text style={profileStyles.detailLabel}>Student ID</Text>
              <Text style={profileStyles.detailValue}>{userProfile.id}</Text>
            </View>

            <View style={profileStyles.detailRow}>
              <Text style={profileStyles.detailLabel}>Kind</Text>
              <Text style={profileStyles.detailValue}>{userProfile.kind}</Text>
            </View>

            <View style={profileStyles.detailRow}>
              <Text style={profileStyles.detailLabel}>Pool</Text>
              <Text style={profileStyles.detailValue}>{userProfile.pool_month} {userProfile.pool_year}</Text>
            </View>

            <View style={profileStyles.detailRow}>
              <Text style={profileStyles.detailLabel}>Campus Location</Text>
              <Text style={profileStyles.detailValue}>{userProfile.location || 'Not available'}</Text>
            </View>

            <View style={profileStyles.detailRow}>
              <Text style={profileStyles.detailLabel}>Correction Points</Text>
              <Text style={profileStyles.detailValue}>{userProfile.correction_point}</Text>
            </View>

            <View style={profileStyles.detailRow}>
              <Text style={profileStyles.detailLabel}>Wallet</Text>
              <Text style={profileStyles.detailValue}>{userProfile.wallet} ₳</Text>
            </View>
          </View>

          {/* Events Section */}
          <View style={cardStyles.section}>
            <Text style={cardStyles.cardTitle}>Events</Text>
            {eventsLoading ? (
              <LoadingState message="Loading events..." />
            ) : eventsError ? (
              <ErrorState title="Error Loading Events" message={eventsError} />
            ) : (
              <FlatList
                data={upcomingEvents}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={profileStyles.eventItem}>
                    <View style={{ flex: 1 }}>
                      <Text style={profileStyles.eventName}>{item.name}</Text>
                      <Text style={profileStyles.eventLocation}>{item.location}</Text>
                      <Text style={profileStyles.eventDate}>
                        {new Date(item.begin_at).toLocaleDateString()}
                      </Text>
                    </View>
                    <TouchableOpacity 
                      style={profileStyles.registerButton}
                      onPress={() => handleRegisterForEvent(item.id)}
                      disabled={isRegistering}
                    >
                      <Text style={profileStyles.registerButtonText}>Register</Text>
                    </TouchableOpacity>
                  </View>
                )}
                ListEmptyComponent={<Text>No upcoming events.</Text>}
              />
            )}
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
