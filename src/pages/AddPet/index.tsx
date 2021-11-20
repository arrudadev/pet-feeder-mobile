import React, { useState } from 'react';
import { Alert } from 'react-native';
// eslint-disable-next-line
// @ts-ignore
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {
  CommonActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { FeedWeightButton } from '../../components/FeedWeightButton';
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

  function isFormValid() {
    if (name.length === 0 || weight.length === 0 || times.length < 2) {
      return false;
    }

    return true;
  }

  function alertFormInvalid() {
    if (!name) {
      Alert.alert('Atenção', 'Por favor, informe o nome do Pet', [
        {
          text: 'Ok',
        },
      ]);
    } else if (!weight) {
      Alert.alert(
        'Atenção',
        'Por favor, informe a quantidade de Ração por Refeição do Pet',
        [
          {
            text: 'Ok',
          },
        ],
      );
    } else if (times.length < 2) {
      Alert.alert(
        'Atenção',
        'Por favor, informe pelo menos 2 horários para Alimentar o seu Pet',
        [
          {
            text: 'Ok',
          },
        ],
      );
    }
  }

  function handleAddNewPet() {
    if (isFormValid()) {
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
    } else {
      alertFormInvalid();
    }
  }

  function handleEditPet() {
    if (isFormValid()) {
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
    } else {
      alertFormInvalid();
    }
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
            label="Quantidade de Ração por Refeição (g)"
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
