import React, { useState, useEffect } from 'react';
import {  View,  Text,  FlatList,  Button,  StyleSheet,  ActivityIndicator,  Alert,  TouchableOpacity} from 'react-native';
import axios from 'axios';

// Lembre-se: Use o IP da sua máquina na rede local, não 'localhost'!
const API_URL = 'http://192.168.1.95:3000/cursos';

// O componente agora recebe a propriedade "navigation" automaticamente do StackNavigator
export default function ListaCursosScreen({ navigation }) {
  // --- ESTADOS DO COMPONENTE ---
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true); // Começa true para mostrar o spinner ao abrir
  const [error, setError] = useState(null);

  // --- FUNÇÃO PARA BUSCAR OS DADOS NA API ---
  const fetchCursos = async () => {
    try {
      setLoading(true); // Ativa o loading antes de cada busca
      setError(null);   // Limpa erros anteriores
      const response = await axios.get(API_URL);
      setCursos(response.data); // Armazena os dados buscados no estado
    } catch (err) {
      setError('Não foi possível carregar a lista de cursos.'); // Armazena mensagem de erro
      console.error("Erro ao buscar cursos:", err); // Loga o erro para depuração
    } finally {
      setLoading(false); // Desativa o loading ao final, com sucesso ou erro
    }
  };

  // --- EFEITO PARA ATUALIZAÇÃO AUTOMÁTICA ---
  // Este useEffect garante que a lista seja recarregada toda vez que a tela recebe foco
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchCursos();
    });

    // Retorna a função de limpeza para remover o listener quando o componente for desmontado
    return unsubscribe;
  }, [navigation]);


  // --- FUNÇÃO PARA DELETAR UM CURSO ---
  const handleDelete = (id) => {
    // Alert.alert é usado para criar um pop-up de confirmação, uma ótima prática de UX
    Alert.alert(
      "Confirmar Exclusão",
      "Você tem certeza que deseja excluir este curso?",
      [
        // Botão de cancelar
        {
          text: "Cancelar",
          style: "cancel"
        },
        // Botão de confirmar
        {
          text: "Excluir",
          onPress: async () => {
            try {
              await axios.delete(`${API_URL}/${id}`);
              // Após deletar com sucesso, chama fetchCursos para atualizar a lista na tela
              fetchCursos();
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível excluir o curso.');
              console.error("Erro ao excluir curso:", error);
            }
          },
          style: "destructive" // Estilo para ações destrutivas (vermelho no iOS)
        }
      ]
    );
  };


  // --- RENDERIZAÇÃO CONDICIONAL ---
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
        <Button title="Tentar Novamente" onPress={fetchCursos} />
      </View>
    );
  }


  // --- RENDERIZAÇÃO PRINCIPAL (LISTA DE CURSOS) ---
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddCurso')}
      >
        <Text style={styles.addButtonText}>Adicionar Novo Curso</Text>
      </TouchableOpacity>

      <FlatList
        data={cursos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemName}>{item.nome}</Text>
              <Text style={styles.itemArea}>{item.area}</Text>
            </View>
            <View style={styles.itemButtonContainer}>
              <Button title="Excluir" color="red" onPress={() => handleDelete(item.id)} />
              <Button
                  title="Editar"
                  onPress={() => {
                      console.log("Tentando editar o item com ID:", item.id); 
                      navigation.navigate('EditCurso', { cursoId: item.id });
                  }}
              />
            </View>
          </View>
        )}
        // Adiciona um texto caso a lista esteja vazia
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum curso cadastrado.</Text>}
      />
    </View>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: {
    flex: 1,    paddingHorizontal: 10,    backgroundColor: '#f5f5f5',
  },
  center: {
    flex: 1,    justifyContent: 'center',    alignItems: 'center'
  },
  errorText: {
    color: 'red',    fontSize: 16,    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007bff',    padding: 15,    borderRadius: 8,    margin: 10,    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',    fontSize: 16,    fontWeight: 'bold',
  },
  itemContainer: {
    backgroundColor: '#fff',    padding: 15,    marginVertical: 5,    borderRadius: 8,    
    flexDirection: 'row',    justifyContent: 'space-between',    alignItems: 'center',    
    elevation: 2, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 1 },    shadowOpacity: 0.22,    shadowRadius: 2.22,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,    fontWeight: '500',
  },
  itemArea: {
    fontSize: 14,    color: 'gray',    marginTop: 5,
  },
  itemButtonContainer: {
    flexDirection: 'row',
  },
  emptyText: {
    textAlign: 'center',    marginTop: 50,    fontSize: 16,    color: 'gray',
  }
});