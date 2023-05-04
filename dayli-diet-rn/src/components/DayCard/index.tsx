import { TouchableOpacityProps } from 'react-native'
import { HistoryDTO } from '@dtos/historyDTO'
import {
  CircleStatus,
  Container,
  FoodName,
  Hours,
  Separator,
  TimeWrapper,
} from './styles'

type Props = TouchableOpacityProps & {
  data: HistoryDTO
}
export function DayCard({ data, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <TimeWrapper>
        <Hours>{data.hours}</Hours>
        <Separator />
        <FoodName>{data.food}</FoodName>
      </TimeWrapper>

      <CircleStatus success={data.status} />
    </Container>
  )
}
