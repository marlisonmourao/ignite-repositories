export type FeedbackNavigationProps = { mealOk: string | undefined }

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      new: undefined
      statistics: undefined
      feedback: FeedbackNavigationProps
    }
  }
}