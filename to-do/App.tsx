import { StatusBar } from 'react-native';
import { Home } from './src/Screen/Home';

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
      <Home />
    </>
  );
}