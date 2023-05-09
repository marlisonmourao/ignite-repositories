import AsyncStorage from '@react-native-async-storage/async-storage'
import { DAYLI_DIET_CONFIG } from './dayliDietConfig'

export type DataDayliDiet = {
  id: string
  food: string
  date: string
  hours: string
  description: string
  status: boolean
}

export async function getStorageDayli() {
  try {
    const storage = await AsyncStorage.getItem(DAYLI_DIET_CONFIG)

    const data = storage ? JSON.parse(storage) : []

    return data
  } catch (error) {
    console.log(error)
  }
}

export async function setStorageDayli(data: DataDayliDiet) {
  const storage = await getStorageDayli()

  const newData = JSON.stringify([...storage, data])

  await AsyncStorage.setItem(DAYLI_DIET_CONFIG, newData)
}
