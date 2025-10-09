import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from './src/context/authContext';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailsScreen from './src/screens/TrackDetailsScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { navigationRef } from './src/navigationRef';
import { useContext, useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import { Provider as LocationProvider } from './src/context/locationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import Ionicons from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LoginFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TrackListFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{ title: 'Your Tracks' }}
      />
      <Stack.Screen
        name="TrackDetails"
        component={TrackDetailsScreen}
        options={{ title: 'Track Details' }}
      />
    </Stack.Navigator>
  );
};

const MainFlow = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'TrackListFlow') {
            iconName = 'list';
          } else if (route.name === 'TrackCreate') {
            iconName = 'add';
          } else if (route.name === 'Account') {
            iconName = 'manage-accounts';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="TrackListFlow"
        component={TrackListFlow}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const MainNavigationContainer = () => {
  const { state, tryLocalSignIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        await tryLocalSignIn();
      } catch (error) {
        // Handle the error, maybe set some state to display an error message
      } finally {
        setIsLoading(false);
      }
    };
    checkAuthState();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {state.token ? (
          // User is signed in
          <Stack.Screen
            name="MainFlow"
            component={MainFlow}
            options={{ headerShown: false }}
          />
        ) : (
          // User is not signed in
          <Stack.Screen
            name="LoginFlow"
            component={LoginFlow}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <MainNavigationContainer />
          <Toast />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
