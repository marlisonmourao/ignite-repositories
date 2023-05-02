import { useState } from 'react'
import { Button } from '@components/Button'
import { Container, HeaderList, Label } from './styles'

import { Header } from '@components/Header'
import { PorcentCard } from '@components/PorcentCard'
import { DayCard } from '@components/DayCard'
import { HistoryByDayDTO } from '@dtos/historyByDayDTO'
import { SectionList } from 'react-native'

export function Home() {
  const [history, setHistory] = useState<HistoryByDayDTO[]>([
    {
      title: '12.08.22',
      data: [
        {
          id: '1',
          food: 'Hamburguer',
          hours: '10:43',
          status: true,
        },
      ],
    },
    {
      title: '16.11.22',
      data: [
        {
          id: '2',
          food: 'Batata-Frita',
          hours: '15:43',
          status: false,
        },
      ],
    },
  ])

  return (
    <Container>
      <Header />
      <PorcentCard porcent="98,9" success={true} />

      <Label>Refeições</Label>

      <Button variant="primary" title="Nova refeição" />

      <SectionList
        sections={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DayCard data={item} />}
        renderSectionHeader={({ section }) => (
          <HeaderList>{section.title}</HeaderList>
        )}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 32 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
