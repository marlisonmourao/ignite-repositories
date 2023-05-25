import { useState } from 'react'
import { Alert, ScrollView } from 'react-native'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useNavigation } from '@react-navigation/native'
import {
  ButtonWrapper,
  Container,
  DateAndTimeContainer,
  Form,
  InputWrapper,
  Label,
} from './styles'

import uuid from 'react-native-uuid'

import { Header } from '@components/Header'
import { RadioButton } from '@components/RadioButton'
import { Button } from '@components/Button'
import { InputForm } from '@components/Form/InputForm'
import { InputFormFormated } from '@components/Form/InputFormFormate'
import { setStorageDayli } from '@storage/dayliDietStorage'

const newMealFormSchema = z.object({
  food: z.string().nonempty('Digite o nome da refeição'),
  description: z.string().nonempty('Digite a descrição'),
  date: z.string().nonempty('Digite a data'),
  hours: z.string().nonempty('Digite a hora'),
})

type NewMealFormInput = z.infer<typeof newMealFormSchema>

export function NewMeal() {
  const [mealOk, setMealOk] = useState<'success' | 'failed'>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewMealFormInput>({
    resolver: zodResolver(newMealFormSchema),
  })

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleSubmitForm(data: NewMealFormInput) {
    try {
      if (!mealOk) {
        return Alert.alert(
          'Nova refeição',
          'Selecione se está dentro da dieta ou não.',
        )
      }

      const status = mealOk === 'success'

      const newData = {
        id: uuid.v4().toString(),
        status,
        title: new Date().getTime(),
        ...data,
      }

      await setStorageDayli(newData)

      navigation.navigate('feedback', { mealOk })
    } catch (error) {}
  }

  return (
    <Container>
      <Header onBack={handleGoBack} title="Nova refeição" />

      <Form>
        <ScrollView showsVerticalScrollIndicator={false}>
          <InputWrapper>
            <Label>Nome</Label>
            <InputForm
              control={control}
              name="food"
              error={errors.food?.message}
            />
          </InputWrapper>

          <InputWrapper>
            <Label>Descrição</Label>
            <InputForm
              control={control}
              name="description"
              textAlignVertical="top"
              multiline
              style={{ height: 100 }}
              error={errors.description?.message}
            />
          </InputWrapper>

          <DateAndTimeContainer>
            <InputWrapper style={{ width: '48%' }}>
              <Label>Data</Label>

              <InputFormFormated
                control={control}
                name="date"
                error={errors.date?.message}
                type="datetime"
                options={{
                  format: 'DD/MM/YYYY',
                }}
              />
            </InputWrapper>

            <InputWrapper style={{ width: '48%' }}>
              <Label>Hora</Label>
              <InputFormFormated
                control={control}
                error={errors.hours?.message}
                name="hours"
                type="datetime"
                options={{
                  format: 'HH:mm',
                }}
              />
            </InputWrapper>
          </DateAndTimeContainer>

          <Label>Está dentro da dieta?</Label>

          <ButtonWrapper>
            <RadioButton
              title="Sim"
              type="PRIMARY"
              onPress={() => setMealOk('success')}
              isActive={mealOk === 'success'}
            />
            <RadioButton
              title="Não"
              type="SECONDARY"
              onPress={() => setMealOk('failed')}
              isActive={mealOk === 'failed'}
            />
          </ButtonWrapper>
          <Button
            onPress={handleSubmit(handleSubmitForm)}
            title="Cadastrar refeição"
            style={{ marginBottom: 40 }}
          />
        </ScrollView>
      </Form>
    </Container>
  )
}
