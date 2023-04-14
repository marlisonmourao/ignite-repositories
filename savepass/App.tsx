import { View, StatusBar } from 'react-native';

import { useFonts, Rubik_300Light, Rubik_400Regular, Rubik_500Medium } from '@expo-google-fonts/rubik';
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

export default function App() {
  const [ fontsLoading ] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
  });

  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent 
      />
      
      {fontsLoading ? <Home /> : <Loading />}
    </>
  );
}