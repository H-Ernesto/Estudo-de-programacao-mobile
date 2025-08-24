// app-cursos/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Renomeie 'ListaCursos.js' para 'ListaCursosScreen.js' e mova para 'src/screens'
import ListaCursosScreen from './src/screens/ListaCursosScreen.js';
import AddCursoScreen from './src/screens/AddCursoScreen.js';
import EditCursoScreen from './src/screens/EditCursosScreen.js'; // 1. Importar a nova tela

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaCursos">
        <Stack.Screen name="ListaCursos" component={ListaCursosScreen} options={{ title: 'Cursos Disponíveis' }} />
        <Stack.Screen name="AddCurso" component={AddCursoScreen} options={{ title: 'Adicionar Novo Curso' }} />
        <Stack.Screen name="EditCurso" component={EditCursoScreen} options={{ title: 'Editar Curso' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}