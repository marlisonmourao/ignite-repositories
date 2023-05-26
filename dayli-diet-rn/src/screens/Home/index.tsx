/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from 'react'
import { FlatList, SectionList, Text } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Container, HeaderList, Label } from './styles'

import { UserAndLogo } from '@components/UserAndLogo'
import { PorcentCard } from '@components/PorcentCard'
import { DayCard } from '@components/DayCard'
import { Button } from '@components/Button'
import { Loading } from '@components/Loading'

import { HistoryByDayDTO } from '@dtos/historyByDayDTO'
import { DAYLI_DIET_CONFIG } from '@storage/dayliDietConfig'
import { CalcPorcentDiet } from '@utils/calcPorcentDiet'
import { getStorageDayli } from '@storage/dayliDietStorage'
import { DailyProps } from 'src/@types/dayliProps'

export function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [history, setHistory] = useState<DailyProps[]>([])

  const navigation = useNavigation()

  function handleNewFood() {
    navigation.navigate('new')
  }

  function handleStatistics() {
    navigation.navigate('statistics')
  }

  function handleDetails(id: string) {
    navigation.navigate('details', { id })
  }

  const porcent = CalcPorcentDiet(history)
  const porcetStatusColor = porcent >= 32

  const porcentParse = String(porcent.toFixed(2))

  useFocusEffect(
    useCallback(() => {
      async function fetHistoryByDay() {
        try {
          setIsLoading(true)
          const response = await getStorageDayli()
          setHistory(response)
        } catch (error) {
        } finally {
          setIsLoading(false)
        }
      }
      fetHistoryByDay()
    }, []),
  )

  return (
    <Container>
      <UserAndLogo />
      <PorcentCard
        porcent={porcentParse === 'NaN' ? '0' : porcentParse}
        success={porcetStatusColor}
        onPress={handleStatistics}
      />

      <Label>Refeições</Label>

      <Button
        checked
        variant="primary"
        title="Nova refeição"
        onPress={handleNewFood}
      />

      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DayCard data={item} onPress={() => handleDetails(item.id)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 32 }}
      />
    </Container>
  )
}
