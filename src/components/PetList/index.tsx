import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { PetListHeader } from '../PetListHeader';
import { PetListItem } from '../PetListItem';
import { Container } from './styles';

export function PetList() {
  const [pets, setPets] = useState<any>([]);

  useEffect(() => {
    setPets([
      {
        id: 1,
        type: 'dog',
        name: 'Pipoca',
      },
      {
        id: 2,
        type: 'cat',
        name: 'Marofo',
      },
      {
        id: 3,
        type: 'cat',
        name: 'Whisky',
      },
      {
        id: 4,
        type: 'dog',
        name: 'Pipoca',
      },
      {
        id: 5,
        type: 'cat',
        name: 'Marofo',
      },
      {
        id: 6,
        type: 'cat',
        name: 'Whisky',
      },
      {
        id: 7,
        type: 'dog',
        name: 'Pipoca',
      },
      {
        id: 8,
        type: 'cat',
        name: 'Marofo',
      },
      {
        id: 9,
        type: 'cat',
        name: 'Whisky',
      },
    ]);
  }, []);

  return (
    <Container>
      <PetListHeader title="Meus Pets" subtitle={`Total ${pets.length}`} />

      <FlatList
        data={pets}
        keyExtractor={pet => String(pet.id)}
        renderItem={({ item: pet }) => <PetListItem key={pet.id} pet={pet} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
