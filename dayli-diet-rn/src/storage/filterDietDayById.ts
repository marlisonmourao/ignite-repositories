import { DailyProps } from 'src/@types/dayliProps'
import { getStorageDayli } from './dayliDietStorage'

export async function filterDietDayById(id: string) {
  try {
    const storage = await getStorageDayli()

    const filtered = storage.filter((item: DailyProps) => item.id === id)

    return filtered
  } catch (error) {
    console.log(error)
  }
}
