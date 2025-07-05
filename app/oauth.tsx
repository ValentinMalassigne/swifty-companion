import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Text, View } from 'react-native';
import { authStyles, colors } from '../src/styles';

export default function OAuthCallback() {
  // const router = useRouter();
  const params = useLocalSearchParams();
  console.log("OAuthCallback params:", params);

  return (
    <View style={authStyles.container}>
      <ActivityIndicator size="large" color={colors.secondary} style={authStyles.spinner} />
      <Text style={authStyles.title}>✅ OAuth Authentication</Text>
      <Text style={authStyles.subtitle}>Successfully redirected back to app!</Text>
      
      {params.code && (
        <View style={authStyles.codeContainer}>
          <Text style={authStyles.codeLabel}>Authorization Code Received:</Text>
          <Text style={authStyles.codeValue}>{String(params.code).substring(0, 20)}...</Text>
        </View>
      )}
    </View>
  );
}
