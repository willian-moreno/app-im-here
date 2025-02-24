import { useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
    setParticipants((state) => [{ id: createGuid(), name: participantName }, ...state])
    setParticipantName('')
  }

  function handleRemoveParticipant(id: string) {
    setParticipants((state) => state.filter((item) => item.id !== id))
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant.id}
            name={participant.name}
            onRemove={() => handleRemoveParticipant(participant.id)}
          />
        ))}
      </ScrollView>
    </View>
  )
}
