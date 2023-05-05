import { useState } from 'react'
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

import { Header } from '@components/Header'
import { RadioButton } from '@components/RadioButton'
import { Button } from '@components/Button'
import { InputForm } from '@components/InputForm'
import { ScrollView } from 'react-native'

const newMealFormSchema = z.object({
  name: z
    .string()
    .regex(/^\s*\S+\s*$/, 'Digite o nome da refeição')
    .nonempty('Digite o nome da refeição'),
  description: z
    .string()
    .regex(/^\s*\S+\s*$/, 'Digite a descrição')
    .nonempty('Digite a descrição'),
  date: z
    .string()
    .regex(/^\s*\S+\s*$/, 'Digite a data')
    .nonempty('Digite a data'),
  hours: z
    .string()
    .regex(/^\s*\S+\s*$/, 'Digite a hora')
    .nonempty('Digite a hora'),
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

  function handleSubmitForm(data: NewMealFormInput) {
    navigation.navigate('feedback', { mealOk })
    console.log(data)
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
              name="name"
              error={errors.name?.message}
            />
          </InputWrapper>

          <InputWrapper>
            <Label>Descrição</Label>
            <InputForm
              control={control}
              name="description"
              error={errors.description?.message}
            />
          </InputWrapper>

          <DateAndTimeContainer>
            <InputWrapper style={{ width: '48%' }}>
              <Label>Data</Label>

              <InputForm
                control={control}
                name="date"
                error={errors.date?.message}
              />
            </InputWrapper>

            <InputWrapper style={{ width: '48%' }}>
              <Label>Hora</Label>
              <InputForm
                control={control}
                error={errors.hours?.message}
                name="hours"
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
