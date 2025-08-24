import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Vibration } from 'react-native';
import * as Speech from 'expo-speech';
import { StatusBar } from 'expo-status-bar';

const frases = [
  { texto: "Estou com fome", categoria: "necessidade", emoji: "🍽️" },
  { texto: "Estou com sede", categoria: "necessidade", emoji: "🥤" },
  { texto: "Quero ir ao banheiro", categoria: "necessidade", emoji: "🚽" },
  { texto: "Estou com sono", categoria: "necessidade", emoji: "😴" },
  { texto: "Estou com dor de cabeça", categoria: "emocao", emoji: "🤕" },
  { texto: "Estou com dor no corpo", categoria: "emocao", emoji: "🤒" },
  { texto: "Não quero comer mais", categoria: "emocao", emoji: "🙅‍♂️" },
  { texto: "Eu gosto de você", categoria: "emocao", emoji: "❤️" },
  { texto: "Obrigado", categoria: "social", emoji: "🙏" },
  { texto: "Até logo", categoria: "social", emoji: "👋" },
  { texto: "Desculpe", categoria: "social", emoji: "😔" },
  { texto: "Quero tomar banho", categoria: "social", emoji: "🛁" }
];

const cores = {
  necessidade: '#4a90e2',
  emocao: '#50e3c2',
  social: '#f57723ff'
};

export default function App() {
  const [ultimaFrase, setUltimaFrase] = useState(null);

  const falar = (texto) => {
    Vibration.vibrate(50);
    setUltimaFrase(texto);
    Speech.speak(texto, { language: 'pt-BR' });
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
      {/* Faixa azul ciano com título */}
      <View style={styles.faixa}>
        <Text style={styles.titulo}>Fala Comigo</Text>
      </View>

      <ScrollView contentContainerStyle={styles.grid}>
        {frases.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.botao, { backgroundColor: cores[item.categoria] }]}
            onPress={() => falar(item.texto)}
          >
            <Text style={styles.textoBotao}>{item.emoji} {item.texto}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {ultimaFrase && (
        <TouchableOpacity style={styles.repetirBotao} onPress={() => falar(ultimaFrase)}>
          <Text style={styles.repetirTexto}>🔁 Repetir: "{ultimaFrase}"</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(230, 230, 246, 1)',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  faixa: {
    backgroundColor: '#00bcd4', // azul ciano
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff', // texto branco sobre faixa azul
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  botao: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#000000ff',
    fontSize: 16,
    textAlign: 'center',
  },
  repetirBotao: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  repetirTexto: {
    color: '#fff',
    fontSize: 16,
  },
});