import React, { useState } from 'react';
// eslint-disable-next-line
// @ts-ignore
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { FeedWeightTable } from '../../components/FeedWeightTable';
import { DetailHeader } from '../../components/Headers/DetailHeader';
import { Input } from '../../components/Input';
import { TimeList } from '../../components/TimeList';
import {
  ButtonRegisterPet,
  ButtonRegisterPetText,
  Container,
  Content,
  FeedWeightTableWrapper,
  FieldsWrapper,
} from './styles';

export function AddPet() {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [times, SetTimes] = useState<any>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editTimeId, setEditTimeId] = useState('-1');

  function handleTimePickerCancel() {
    setTimePickerVisibility(false);
  }

  function handleTimePickerConfirm(date: Date) {
    if (isEdit) {
      const index = times.findIndex((time: any) => time.id === editTimeId);
      const newTimes = [...times];
      newTimes[index].time = date.toISOString();
      SetTimes(newTimes);
      setIsEdit(false);
      setEditTimeId('-1');
      setTimePickerVisibility(false);
    } else if (times.length < 3) {
      SetTimes([
        ...times,
        { id: `${times.length + 1}`, time: date.toISOString() },
      ]);

      setTimePickerVisibility(false);
    }
  }

  function handleAddTime() {
    if (times.length < 3) {
      setTimePickerVisibility(true);
    }
  }

  function handleEditTime(id: string) {
    const index = times.findIndex((time: any) => time.id === id);
    setCurrentDate(new Date(times[index].time));
    setIsEdit(true);
    setEditTimeId(id);
    setTimePickerVisibility(true);
  }

  function handleRemoveTime(id: string) {
    SetTimes(times.filter((time: any) => time.id !== id));
  }

  return (
    <Container>
      <DetailHeader title="Adicionar Pet" />

      <Content>
        <FeedWeightTableWrapper>
          <FeedWeightTable />
        </FeedWeightTableWrapper>

        <FieldsWrapper>
          <Input label="Nome" />

          <Input label="Quantidade de Ração por Refeição" />
        </FieldsWrapper>

        <TimeList
          times={times}
          editable
          onAdd={handleAddTime}
          onEdit={handleEditTime}
          onDelete={handleRemoveTime}
        />

        <ButtonRegisterPet>
          <ButtonRegisterPetText>Cadastrar Pet</ButtonRegisterPetText>
        </ButtonRegisterPet>
      </Content>

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        date={currentDate}
        onConfirm={handleTimePickerConfirm}
        onCancel={handleTimePickerCancel}
      />
    </Container>
  );
}
