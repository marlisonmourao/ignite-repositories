import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { NewMeal } from '@screens/NewMeal'
import { Statistics } from '@screens/Statistics'
import { Feedback } from '@screens/Feedback'
import { Details } from '@screens/Details'
import { EditMeal } from '@screens/EditMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={NewMeal} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="details" component={Details} />
      <Screen name="edit" component={EditMeal} />
    </Navigator>
  )
}
