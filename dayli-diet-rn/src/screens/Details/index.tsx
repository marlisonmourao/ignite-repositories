import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  Boll,
  ButtonWrapper,
  Container,
  Content,
  DateAndHours,
  DateAndTimer,
  Description,
  Label,
  Tag,
  Title,
} from './styles'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Loading } from '@components/Loading'
import { filterDietDayById } from '@storage/filterDietDayById'
import { DailyProps } from 'src/@types/dayliProps'
import { deleteStorageDayli } from '@storage/dayliDietStorage'

type PropsParams = {
  id: string
}

export function Details() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<DailyProps[]>([])

  const router = useRoute()
  const navigation = useNavigation()

  const { id } = router.params as PropsParams

  function handleGoBack() {
    navigation.goBack()
  }

  async function deleteDayli() {
    await deleteStorageDayli(id)

    navigation.goBack()
  }

  useEffect(() => {
    async function getDetails() {
      try {
        setIsLoading(true)

        const filtered = await filterDietDayById(id)

        setData(filtered)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    getDetails()
  }, [id])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <Header
        onBack={handleGoBack}
        title="Refeição"
        isSuccess={data[0].status === true}
      />

      <Content>
        {data.map((item) => (
          <View key={item.id}>
            <Title>{item.food}</Title>
            <Description>{item.description}</Description>

            <DateAndHours>Data e hora</DateAndHours>
            <DateAndTimer>12/08/2022 às {item.hours}</DateAndTimer>

            <Tag>
              <Boll color={item.status} />
              <Label>{item.status ? 'Dentro da dieta' : 'Fora da dieta'}</Label>
            </Tag>
          </View>
        ))}

        <ButtonWrapper>
          <Button title="Editar refeição" checked={false} />
          <Button
            title="Excluir refeição"
            variant="secondary"
            onPress={deleteDayli}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}
