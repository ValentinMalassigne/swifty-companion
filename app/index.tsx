import { useFocusEffect, useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, SafeAreaView, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HomeHeader } from '../src/components/HomeHeader';
import { ProfileSection } from '../src/components/ProfileSection';
import { SearchSection } from '../src/components/SearchSection';
import { AppDispatch, RootState } from '../src/store';
import { login } from '../src/store/authSlice';
import { homeStyles, layoutStyles } from '../src/styles';

// Complete the warmup on component mount
WebBrowser.maybeCompleteAuthSession();

export default function Home() {
  const router = useRouter();
  const [searchLogin, setSearchLogin] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, authCode, redirectUri } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (authCode && redirectUri) {
      console.log("je route vers my-profile avec authCode:", authCode, "et redirectUri:", redirectUri);
      router.push(`/my-profile?code=${authCode}&redirect_uri=${encodeURIComponent(redirectUri)}`);
    }
    if (error) {
      Alert.alert('OAuth Error', error);
    }
  }, [authCode, redirectUri, error, router]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    }, [])
  );

  const handleSearchUser = () => {
    if (!searchLogin.trim()) {
      Alert.alert('Error', 'Please enter a user login to search');
      return;
    }
    
    router.push(`/profile/${searchLogin.trim()}`);
  };

  const handleOAuthLogin = () => {
    dispatch(login());
  };

  return (
    <SafeAreaView style={layoutStyles.container}>
      <HomeHeader />

      <ScrollView contentContainerStyle={homeStyles.scrollContent}>
        <SearchSection
          searchLogin={searchLogin}
          setSearchLogin={setSearchLogin}
          handleSearchUser={handleSearchUser}
        />

        <View style={homeStyles.divider} />

        <ProfileSection isLoading={isLoading} handleOAuthLogin={handleOAuthLogin} />
      </ScrollView>

    </SafeAreaView>
  );
}

