import React from 'react'
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

export function Details() {
  return (
    <Container>
      <Header onBack={() => {}} title="Refeição" />

      <Content>
        <Title>Sanduíche</Title>
        <Description>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Description>

        <DateAndHours>Data e hora</DateAndHours>
        <DateAndTimer>12/08/2022 às 16:00</DateAndTimer>

        <Tag>
          <Boll color="success" />
          <Label>Dentro da dieta</Label>
        </Tag>

        <ButtonWrapper>
          <Button title="Editar refeição" checked={false} />
          <Button title="Excluir refeição" variant="secondary" />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}
