import { HistoryDTO } from '@dtos/historyDTO'
import {
  CircleStatus,
  Container,
  FoodName,
  Hours,
  Separator,
  TimeWrapper,
} from './styles'

type Props = {
  data: HistoryDTO
}

export function DayCard({ data }: Props) {
  return (
    <Container>
      <TimeWrapper>
        <Hours>{data.hours}</Hours>
        <Separator />
        <FoodName>{data.food}</FoodName>
      </TimeWrapper>

      <CircleStatus success={data.status} />
    </Container>
  )
}
