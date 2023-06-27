import { NativeBaseProvider, StatusBar } from 'native-base'
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from '@expo-google-fonts/karla'

import { Loading } from '@components/Loading'
import { theme } from './src/theme'
import { SignUp } from '@screens/SignUp'

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  })

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#EDECEE"
        translucent
      />

      {fontsLoaded ? <SignUp /> : <Loading />}
    </NativeBaseProvider>
  )
}
