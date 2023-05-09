type MealStatusProps = {
  status: boolean
}[]

export function CalcPorcentDiet(mealStatus: MealStatusProps): string {
  const totalMealStatus: number = mealStatus.length
  let resultTotal: number = 0

  for (let i = 0; i < totalMealStatus; i++) {
    if (mealStatus[i].status) {
      resultTotal++
    }
  }

  const result = (totalMealStatus / resultTotal) * 100

  return result.toFixed(2)
}
