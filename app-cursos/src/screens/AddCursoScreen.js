import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const API_URL = 'http://192.168.1.95:3000/cursos';

export default function AddCursoScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [area, setArea] = useState('');

  const handleAddCurso = async () => {
    if (!nome || !area) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    try {
      await axios.post(API_URL, { nome, area });
      navigation.goBack(); // Volta para a tela anterior após sucesso
    } catch (error) {
      alert('Erro ao adicionar curso.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome do Curso" value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Área do Curso" value={area} onChangeText={setArea} style={styles.input} />
      <Button title="Salvar Curso" onPress={handleAddCurso} />
    </View>
  );
}
const styles = StyleSheet.create({ /* ... Estilos ... */ });