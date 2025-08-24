import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [contador, setContador] = useState(0);

  async function tocarSom() {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/pru.mp3') // seu arquivo de som
    );
    await sound.playAsync();
  }

  async function handlePress() {
    setContador(contador + 1);
    await tocarSom();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Faça carinho na pomba!</Text>
      <Text style={styles.texto}>Você fez {contador} carinhos!</Text>

      <TouchableOpacity onPress={handlePress}>
        <Image
          source={require('./assets/pombo.png')}
          style={{ width: 300, height: 300 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333' },
  titulo: { fontSize: 30, fontWeight: 'bold', marginBottom: 20, color: "#fff" },
  texto: { fontSize: 24, marginBottom: 20, color: "#fff" },
});
