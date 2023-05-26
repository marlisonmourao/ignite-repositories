import { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Content,
  Label,
  Main,
  NumberSequence,
  Sequence,
  Title,
} from './styles'

import { PorcentCard } from '@components/PorcentCard'
import { SuccessOrFailedCard } from '@components/SuccessOrFailedCard'
import { Loading } from '@components/Loading'

import { DailyProps } from 'src/@types/dayliProps'
import { CalcPorcentDiet } from '@utils/calcPorcentDiet'

import { filterDietSuccessOrNo } from '@storage/filterDietDayById'
import { getStorageDayli } from '@storage/dayliDietStorage'

type SuccessOrFailedNumber = {
  success: number
  failed: number
}

export function Statistics() {
  const [statistic, setStatistic] = useState<DailyProps[]>([])
  const [succssOrFailed, setSuccssOrFailed] = useState(
    {} as SuccessOrFailedNumber,
  )
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()

  const porcent = CalcPorcentDiet(statistic)
  const porcentParse = String(porcent.toFixed(2))

  function handleGoback() {
    navigation.goBack()
  }

  async function fetchAllMealDayli() {
    try {
      setIsLoading(true)
      const responseData = await getStorageDayli()
      setStatistic(responseData)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function fetchSuccessOrFailed() {
    try {
      setIsLoading(true)
      const responseData = filterDietSuccessOrNo(statistic)
      setSuccssOrFailed(responseData!)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAllMealDayli()
  }, [])

  useEffect(() => {
    if (statistic.length > 0) {
      fetchSuccessOrFailed()
    }
  }, [statistic])

  if (isLoading) {
    return <Loading />
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView>
        <Container>
          <PorcentCard
            onPress={handleGoback}
            porcent={porcentParse}
            success
            variant="secondary"
          />
          <Main>
            <Title>Estatísticas gerais</Title>

            <Sequence>
              <NumberSequence>4</NumberSequence>
              <Label>melhor sequência de pratos dentro da dieta</Label>
            </Sequence>

            <Sequence>
              <NumberSequence>{statistic.length}</NumberSequence>
              <Label>refeições registradas</Label>
            </Sequence>

            <Content>
              <SuccessOrFailedCard
                numberOfMeals={succssOrFailed.success}
                mealsLabel="refeições dentro da dieta"
              />
              <SuccessOrFailedCard
                numberOfMeals={succssOrFailed.failed}
                mealsLabel="refeições fora da dieta"
                variant="failed"
              />
            </Content>
          </Main>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
