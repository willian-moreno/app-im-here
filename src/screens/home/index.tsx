import { useState } from 'react'
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Participant } from '../../components/participant'
import { styles } from './styles'

interface Participant {
  id: string
  name: string
}

export function Home() {
  const [participantName, setParticipantName] = useState('')
  const [participants, setParticipants] = useState<Participant[]>([])

  const isAddParticipantDisabled = participantName.length === 0

  function handleAddParticipant() {
    const participantAlreadyExists =
      participants.findIndex((participant) => participant.name === participantName) !== -1

    if (participantAlreadyExists) {
      Alert.alert('Não disponível', 'Já existe um participante na lista com esse nome.')
      return
    }

    setParticipants((state) => [{ id: createGuid(), name: participantName }, ...state])
    setParticipantName('')
  }

  function handleRemoveParticipant(id: string) {
    const participant = participants.find((participant) => participant.id === id)
    if (!participant) {
      return
    }

    Alert.alert('Remover', `Remover o participante ${participant.name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants((state) => state.filter((item) => item.id !== id))
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  function createGuid() {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 24 de Janeiro de 2025</Text>
      <View style={styles.form}>
        <TextInput
          value={participantName}
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={(value) => setParticipantName(value)}
        />
        <TouchableOpacity
          style={styles.button}
          disabled={isAddParticipantDisabled}
          onPress={handleAddParticipant}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            name={item.name}
            onRemove={() => handleRemoveParticipant(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}
