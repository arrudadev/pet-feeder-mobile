import React from 'react';

import { TimeListHeader } from '../TimeListHeader';
import { TimeListItem } from '../TimeListItem';
import { Container, TimeWrapper } from './styles';

type Time = {
  id: string;
  time: string;
};

type TimeListProps = {
  times: Time[];
  editable?: boolean;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
  onAdd?: (id: string) => void;
};

export function TimeList({
  times,
  editable,
  onDelete,
  onEdit,
  onAdd,
}: TimeListProps) {
  return (
    <Container>
      <TimeListHeader editable={editable} onAdd={onAdd} />

      <TimeWrapper>
        {times.map((time: any) => (
          <TimeListItem
            key={time.id}
            id={time.id}
            time={time.time}
            editable={editable}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </TimeWrapper>
    </Container>
  );
}
