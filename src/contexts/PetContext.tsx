import React, { createContext, ReactNode, useState } from 'react';

import { Spinner } from '../components/Spinner';
import { useUser } from '../hooks/useUser';
import { api } from '../services/api';

type PetContextData = {
  petList: any[];
  selectedPetId: string;
  selectedPetName: string;
  selectedPetFeedWeight: number;
  selectedPetFeedHours: any[];
  loadPetList: () => Promise<void>;
  changePet: (id: string) => void;
  addNewPet: (pet: any) => Promise<void>;
  editPet: (pet: any) => Promise<void>;
};

export const PetContext = createContext({} as PetContextData);

type PetContextProviderProps = {
  children: ReactNode;
};

export const PetContextProvider = ({ children }: PetContextProviderProps) => {
  const { token } = useUser();

  const [petList, setPetList] = useState<any[]>([]);
  const [selectedPetId, setSelectedPetId] = useState('');
  const [selectedPetName, setSelectedPetName] = useState('');
  const [selectedPetFeedWeight, setSelectedPetFeedWeight] = useState(0);
  const [selectedPetFeedHours, setSelectedPetFeedHours] = useState([]);

  const [loading, setLoading] = useState(false);

  const loadPetList = async () => {
    if (petList.length === 0) {
      setLoading(true);
      const response = await api.get(`/pet?token=${token}`);

      const { success, pets } = response.data;

      if (success) {
        setPetList(pets);
        setLoading(false);
      }
    }
  };

  const changePet = (id: string) => {
    const pet = petList.find(item => item.petId === id);

    setSelectedPetId(pet.petId);
    setSelectedPetName(pet.petName);
    setSelectedPetFeedWeight(pet.petFeedWeight);
    setSelectedPetFeedHours(pet.feedHours);
  };

  const addNewPet = async (pet: any) => {
    setLoading(true);
    const response = await api.post('/pet/', {
      petName: pet.petName,
      petFeedWeight: pet.petFeedWeight,
      feedHours: pet.feedHours,
      token,
    });

    const { success, petId } = response.data;

    if (success) {
      const newPetList = [...petList];

      const newPet = {
        petId,
        petName: pet.petName,
        petFeedWeight: pet.petFeedWeight,
        feedHours: pet.feedHours,
      };

      newPetList.push(newPet);

      setPetList(newPetList);

      setSelectedPetId(petId);
      setSelectedPetName(newPet.petName);
      setSelectedPetFeedWeight(newPet.petFeedWeight);
      setSelectedPetFeedHours(newPet.feedHours);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const editPet = async (pet: any) => {
    setLoading(true);
    const response = await api.put('/pet/', {
      petId: pet.petId,
      petName: pet.petName,
      petFeedWeight: pet.petFeedWeight,
      feedHours: pet.feedHours,
      token,
    });

    const { success } = response.data;

    if (success) {
      const index = petList.findIndex(item => item.petId === pet.petId);

      petList[index] = pet;

      setPetList([...petList]);

      setSelectedPetId(pet.petId);
      setSelectedPetName(pet.petName);
      setSelectedPetFeedWeight(pet.petFeedWeight);
      setSelectedPetFeedHours(pet.feedHours);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <PetContext.Provider
      value={{
        petList,
        selectedPetId,
        selectedPetName,
        selectedPetFeedWeight,
        selectedPetFeedHours,
        loadPetList,
        changePet,
        addNewPet,
        editPet,
      }}
    >
      {children}

      <Spinner visible={loading} />
    </PetContext.Provider>
  );
};
