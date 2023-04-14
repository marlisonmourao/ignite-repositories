import { useState } from 'react';
import {
  Container,
  Header,
  TaskCount,
  LogoWrapper,
  Logo,
  Label,
  Content,
  Input,
  InputWrapper,
  ButtonSubmit,
} from "./styles";

import {  ArrowRight } from 'phosphor-react-native';

import LogoImg from '../../assets/logo.png'
import { Task } from '../../component/Task';
import { Alert, FlatList } from 'react-native';

export function Home() {
  const [newTask, setNewTask] = useState('')
  const [task, setTask] = useState<string[]>([])
  const [isCheck, setIsCheck] = useState(false)

  function createNewTask() {
    if(newTask.trim().length <= 0) {
      return Alert.alert('Digite uma tarefa!!')
    }

    setTask((prev) => [...prev, newTask])
    setNewTask('')
  }

  function handleRemoveTask(tasks: string) {
    setTask(task.filter((task) => task !== tasks));
  }

  return (
    <Container>
      <Header>
        <LogoWrapper>
          <Logo source={LogoImg} />
          <Label>
            Você tem <TaskCount>{task.length} tarefas</TaskCount>
          </Label>
        </LogoWrapper>
      </Header>

      <Content>
        <InputWrapper>
          <Input
            placeholder="Adicione uma tarefa"
            onChangeText={setNewTask}
            value={newTask}
          />

          <ButtonSubmit onPress={createNewTask}>
            <ArrowRight />
          </ButtonSubmit>
        </InputWrapper>
      </Content>

      <FlatList
        data={task}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task onRemove={() => handleRemoveTask(item)} title={item} />
        )}
      />
    </Container>
  );
}