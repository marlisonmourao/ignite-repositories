import { useState } from 'react'
import { HeaderNewMeal } from '@components/HeaderNewMeal'
import {
  ButtonWrapper,
  Container,
  DateAndTimeContainer,
  Form,
  InputWrapper,
  Label,
} from './styles'
import { Input } from '@components/Input'
import { RadioButton } from '@components/RadioButton'
import { Button } from '@components/Button'

export function NewMeal() {
  const [mealOk, setMealOk] = useState<'sim' | 'nao' | undefined>()
  return (
    <Container>
      <HeaderNewMeal onBack={() => {}} title="Nova refeição" />

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
            onPress={() => setMealOk('sim')}
            isActive={mealOk === 'sim'}
          />
          <RadioButton
            title="Não"
            type="SECONDARY"
            onPress={() => setMealOk('nao')}
            isActive={mealOk === 'nao'}
          />
        </ButtonWrapper>
        <Button title="Cadastrar refeição" />
      </Form>
    </Container>
  )
}
