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

export function filterDietSuccessOrNo(storage: DailyProps[]) {
  try {
    let success = 0
    let failed = 0

    for (let i = 0; i < storage.length; i++) {
      if (storage[i].status) {
        success++
      } else {
        failed++
      }
    }

    return { success, failed }
  } catch (error) {
    console.log(error)
  }
}
