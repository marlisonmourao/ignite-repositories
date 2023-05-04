export type FeedbackNavigationProps = { mealOk: string | undefined }

export type DetailsNavigatorProps = { id: string }

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      new: undefined
      statistics: undefined
      feedback: FeedbackNavigationProps
      details: DetailsNavigatorProps
    }
  }
}
