import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Check, Pencil, Trash } from "phosphor-react-native";
import { ButtonCheck, Container, TaskMessage, Message, WrapperButtonIcon, Separator } from "./styles";

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
    <Container active={checked}>
      <ButtonCheck active={checked} onPress={handleChecked}>
        {checked ? <Check size={10} color="#FFF" /> : ""}
      </ButtonCheck>

      <Message>
        <TaskMessage active={checked}>{title}</TaskMessage>
      </Message>

      <WrapperButtonIcon>
        <TouchableOpacity>
          <Pencil size={20} />
        </TouchableOpacity>

        <Separator />

        <TouchableOpacity onPress={onRemove}>
          <Trash size={20} />
        </TouchableOpacity>
      </WrapperButtonIcon>
    </Container>
  );
}