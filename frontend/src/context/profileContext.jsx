import { createContext, useContext, useState, useMemo } from "react";

const ProfileContext = createContext();

export const useProfileContext = () => useContext(ProfileContext);

export function ProfileProvider({ children }) {
  const profileTemplate = {
    hairColor: "White",
    hairType: "",
    hairCut: "",
    hairCondition: [],
    washingFrequency: "Once a week",
  };
  const [profile, setProfile] = useState(profileTemplate);
  const [popupDisplayed, setPopupDisplayed] = useState(false);

  const updateHairColor = (newColor) => {
    setProfile((prevProfile) => ({ ...prevProfile, hairColor: newColor }));
  };

  const updateHairType = (newType) => {
    setProfile((prevProfile) => ({ ...prevProfile, hairType: newType }));
  };

  const updateHairCut = (newCut) => {
    setProfile((prevProfile) => ({ ...prevProfile, hairCut: newCut }));
  };

  const updateCondition = (newCondition) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      hairCondition: newCondition,
    }));
  };

  const updateWashingFrequency = (newWashingFrequency) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      washingFrequency: newWashingFrequency,
    }));
  };
  const displayPopup = () => {
    setPopupDisplayed(true);
  };

  const contextValues = useMemo(
    () => ({
      profile,
      updateHairColor,
      updateHairType,
      updateHairCut,
      updateCondition,
      updateWashingFrequency,
      popupDisplayed,
      displayPopup,
    }),
    [
      profile,
      updateHairColor,
      updateHairType,
      updateHairCut,
      updateCondition,
      updateWashingFrequency,
    ]
  );

  return (
    <ProfileContext.Provider value={contextValues}>
      {children}
    </ProfileContext.Provider>
  );
}
