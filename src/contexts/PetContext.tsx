import React, { createContext, ReactNode, useState } from 'react';

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
  const [petList, setPetList] = useState<any[]>([]);
  const [selectedPetId, setSelectedPetId] = useState('');
  const [selectedPetName, setSelectedPetName] = useState('');
  const [selectedPetFeedWeight, setSelectedPetFeedWeight] = useState(0);
  const [selectedPetFeedHours, setSelectedPetFeedHours] = useState([]);

  const loadPetList = async () => {
    if (petList.length === 0) {
      setPetList([]);
    }
  };

  const changePet = (id: string) => {
    const pet = petList.find(item => item.petId === id);

    setSelectedPetId(pet.petId);
    setSelectedPetName(pet.petName);
    setSelectedPetFeedWeight(pet.petFeedWeight);

    const times = pet.feedHours.map((item: any, index: number) => ({
      id: index,
      time: item.hour,
    }));

    setSelectedPetFeedHours(times);
  };

  const addNewPet = async (pet: any) => {
    const id = (Math.random() + 1).toString(36).substring(7);
    const newPet = { petId: id, ...pet };
    setPetList([...petList, newPet]);
  };

  const editPet = async (pet: any) => {
    const index = petList.findIndex(item => item.petId === pet.petId);

    petList[index] = pet;

    setPetList([...petList]);
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
    </PetContext.Provider>
  );
};
