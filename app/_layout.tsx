import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import React from 'react';
import { Text, View } from 'react-native';
import SignInScreen from './(auth)/signin';
import { clerkAPI } from './constants/env';

function AuthGate({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useAuth();

  React.useEffect(() => {
    if (!isSignedIn) {
      <SignInScreen />;
      // Redirect to the sign-in page if the user is not authenticated
    }
  }, [isSignedIn]);

  if (!isSignedIn) {
    // Optionally, show a loading state or splash screen while checking auth status
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return <>{children}</>;
}

export default function Layout() {
  return (
    <ClerkProvider publishableKey={clerkAPI}>
      <AuthGate>
        <SignInScreen />
      </AuthGate>
    </ClerkProvider>
  );
}
