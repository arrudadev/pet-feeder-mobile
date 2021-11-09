import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { TimeListHeader } from '../TimeListHeader';
import { TimeListItem } from '../TimeListItem';
import { Container, TimeWrapper } from './styles';

export function TimeList() {
  const [times, setTimes] = useState<any>([]);

  useEffect(() => {
    setTimes([
      {
        id: 1,
        time: '08:00',
      },
      {
        id: 2,
        time: '14:00',
      },
      {
        id: 3,
        time: '20:00',
      },
    ]);
  }, []);

  return (
    <Container>
      <TimeListHeader />

      <TimeWrapper>
        <FlatList
          data={times}
          keyExtractor={time => String(time.id)}
          renderItem={({ item: time }) => (
            <TimeListItem key={time.id} time={time.time} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </TimeWrapper>
    </Container>
  );
}
