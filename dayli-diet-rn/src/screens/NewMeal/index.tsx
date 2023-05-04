import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  ButtonWrapper,
  Container,
  DateAndTimeContainer,
  Form,
  InputWrapper,
  Label,
} from './styles'

import { Input } from '@components/Input'
import { Header } from '@components/Header'
import { RadioButton } from '@components/RadioButton'
import { Button } from '@components/Button'

export function NewMeal() {
  const [mealOk, setMealOk] = useState<'success' | 'failed'>()

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  function handleSubmit() {
    navigation.navigate('feedback', { mealOk })
  }

  return (
    <Container>
      <Header onBack={handleGoBack} title="Nova refeição" />

      <Form>
        <InputWrapper>
          <Label>Nome</Label>
          <Input />
        </InputWrapper>

        <InputWrapper>
          <Label>Descrição</Label>
          <Input />
        </InputWrapper>

        <DateAndTimeContainer>
          <InputWrapper style={{ width: '48%' }}>
            <Label>Data</Label>
            <Input />
          </InputWrapper>

          <InputWrapper style={{ width: '48%' }}>
            <Label>Hora</Label>
            <Input />
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
        <Button onPress={handleSubmit} title="Cadastrar refeição" />
      </Form>
    </Container>
  )
}
