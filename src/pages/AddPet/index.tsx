import React, { useState } from 'react';
// eslint-disable-next-line
// @ts-ignore
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {
  CommonActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { FeedWeightButton } from '../../components/FeedWeightButton';
import { FeedWeightTable } from '../../components/FeedWeightTable';
import { DetailHeader } from '../../components/Headers/DetailHeader';
import { Input } from '../../components/Input';
import { TimeList } from '../../components/TimeList';
import { usePet } from '../../hooks/usePet';
import {
  ButtonRegisterPet,
  ButtonRegisterPetText,
  Container,
  Content,
  FeedWeightTableWrapper,
  FieldsWrapper,
} from './styles';

type Params = {
  selectedPetId: string;
  selectedPetName: string;
  selectedPetFeedWeight: string;
  selectedPetFeedHours: any[];
  mode: string;
};

export function AddPet() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    selectedPetId,
    selectedPetName,
    selectedPetFeedWeight,
    selectedPetFeedHours,
    mode,
  } = routes.params as Params;

  const title = mode === 'edit' ? 'Editar Pet' : 'Adicionar Pet';

  const { addNewPet, editPet } = usePet();

  const [name, setName] = useState(selectedPetName || '');
  const [weight, setWeight] = useState(selectedPetFeedWeight || '');

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [times, SetTimes] = useState<any>(selectedPetFeedHours || []);
  const [isEdit, setIsEdit] = useState(false);
  const [editTimeId, setEditTimeId] = useState('-1');

  function handleTimePickerCancel() {
    setTimePickerVisibility(false);
  }

  function handleTimePickerConfirm(date: Date) {
    if (isEdit) {
      const index = times.findIndex(
        (time: any, timeIndex: any) => timeIndex === editTimeId,
      );

      const newTimes = [...times];

      newTimes[index].hour = date.toISOString();

      SetTimes(newTimes);
      setIsEdit(false);
      setEditTimeId('-1');
      setTimePickerVisibility(false);
    } else if (times.length < 3) {
      SetTimes([...times, { hour: date.toISOString() }]);

      setTimePickerVisibility(false);
    }
  }

  function handleAddTime() {
    if (times.length < 3) {
      setTimePickerVisibility(true);
    }
  }

  function handleEditTime(id: string) {
    const index = times.findIndex(
      (time: any, timeIndex: any) => timeIndex === id,
    );

    setCurrentDate(new Date(times[index].hour));
    setIsEdit(true);
    setEditTimeId(id);
    setTimePickerVisibility(true);
  }

  function handleRemoveTime(id: string) {
    SetTimes(times.filter((time: any, timeIndex: any) => timeIndex !== id));
  }

  function handleAddNewPet() {
    addNewPet({
      petName: name,
      petFeedWeight: weight,
      feedHours: times,
    });

    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  }

  function handleEditPet() {
    editPet({
      petId: selectedPetId,
      petName: name,
      petFeedWeight: weight,
      feedHours: times,
    });

    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  }

  return (
    <Container>
      <DetailHeader title={title} />

      <Content>
        <FeedWeightTableWrapper>
          <FeedWeightButton />
        </FeedWeightTableWrapper>

        <FieldsWrapper>
          <Input label="Nome" value={name} onChangeText={setName} />

          <Input
            label="Quantidade de Ração por Refeição"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
        </FieldsWrapper>

        <TimeList
          times={times}
          editable
          onAdd={handleAddTime}
          onEdit={handleEditTime}
          onDelete={handleRemoveTime}
        />

        {mode === 'new' && (
          <ButtonRegisterPet onPress={() => handleAddNewPet()}>
            <ButtonRegisterPetText>Cadastrar Pet</ButtonRegisterPetText>
          </ButtonRegisterPet>
        )}

        {mode === 'edit' && (
          <ButtonRegisterPet onPress={() => handleEditPet()}>
            <ButtonRegisterPetText>Salvar</ButtonRegisterPetText>
          </ButtonRegisterPet>
        )}
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
