import React from 'react';
import { StyleSheet, View, Text, Pressable, Image, Dimensions, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
          source={require('./assets/perfil.png')}
          style={{ width: 300, height: 300, borderRadius:50 }}
      />
      <Text style={styles.titulo}>Ednaldo pereira</Text>
      <Text style={styles.ocupacao}>GOAT MUSICAL</Text>
      <Pressable
        style={styles.botao}
        onPress={() => alert('Botão com ícone pressionado!')}
      >
        <Icon name="face-grin-tongue" size={20} color="#fff" />
        
        <Text style={styles.textoBotao}> Adicionar aos Favoritos</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  ocupacao: {
    fontSize: 18,
    fontWeight: "200",
    marginBottom: 20,
  },
  faixa:{
    alignItems: 'center', // Alinha verticalmente no centro
    backgroundColor: '#4a4a48ff', // Cor de fundo amarela
    width: '100%',
  },
  botao: {
    flexDirection: 'row', // Alinha o ícone e o texto lado a lado
    alignItems: 'center', // Alinha verticalmente no centro
    backgroundColor: '#ffc107', // Cor de fundo amarela
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});