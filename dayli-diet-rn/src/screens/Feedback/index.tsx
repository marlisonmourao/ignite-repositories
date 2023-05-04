import { useNavigation, useRoute } from '@react-navigation/native'
import { FeedbackNavigationProps } from 'src/@types/navigator'

import { Container, Image, Label, TextBold, Title } from './styles'

import { Button } from '@components/Button'

import SuccessImage from '@assets/success.png'
import FailedImage from '@assets/failed.png'

export function Feedback() {
  const navigation = useNavigation()
  const route = useRoute()
  const { mealOk } = route.params as FeedbackNavigationProps

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Title color={mealOk === 'success' ? 'success' : 'failed'}>
        {mealOk === 'success' ? 'Continue assim!' : 'Que pena!'}
      </Title>

      {mealOk === 'success' ? (
        <Label>
          Você continua <TextBold>dentro da dieta</TextBold>. Muito bem!
        </Label>
      ) : (
        <Label>
          Você <TextBold>saiu da dieta</TextBold> dessa vez, mas continue se
          esforçando e não desista!
        </Label>
      )}

      <Label></Label>

      <Image
        source={mealOk === 'success' ? SuccessImage : FailedImage}
        alt=""
      />

      <Button
        style={{ width: 191 }}
        title="Ir para a página inicial"
        iconVisible={false}
        onPress={handleGoBack}
      />
    </Container>
  )
}
