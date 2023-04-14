import { TouchableOpacity } from "react-native";
import { Check, Trash } from "phosphor-react-native";
import { ButtonCheck, Container, TaskMessage, Message } from "./styles";
import { useState } from "react";

interface Props {
  title: string;
  onRemove: () => void;
}

export function Task({ title, onRemove }: Props) {
  const [checked, setChecked] = useState(false)

  function handleChecked() {
    setChecked(!checked)
  }

  return (
    <Container>
      <ButtonCheck active={checked} onPress={handleChecked}>
        {checked ? <Check size={15} color="#FFF" /> : ""}
      </ButtonCheck>

      <Message>
        <TaskMessage active={checked}>{title}</TaskMessage>
      </Message>

      <TouchableOpacity onPress={onRemove}>
        <Trash />
      </TouchableOpacity>
    </Container>
  );
}