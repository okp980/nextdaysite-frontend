import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import {
  BioDataAction,
  BioDataState,
  DetailsAction,
  DetailsState,
  InterestsAction,
  InterestsState,
  RoleAction,
  RoleState,
} from "./types";

export const useDetailsStore = create<DetailsState & DetailsAction>()(
  devtools(
    persist(
      (set) => ({
        details: null,
        setDetails: (details) => set({ details }),
        resetDetails: () => set({ details: null }),
      }),
      { name: "details" },
    ),
  ),
);
export const useRoleStore = create<RoleState & RoleAction>()(
  devtools(
    persist(
      (set) => ({
        role: null,
        setRole: (role) => set({ role }),
        resetRole: () => set({ role: null }),
      }),
      { name: "role" },
    ),
  ),
);
export const useInterestsStore = create<InterestsState & InterestsAction>()(
  devtools(
    persist(
      (set) => ({
        interests: [],
        setInterests: (interests) => set({ interests }),
        resetInterests: () => set({ interests: [] }),
      }),
      { name: "interests" },
    ),
  ),
);
export const useBioDataStore = create<BioDataState & BioDataAction>()(
  devtools(
    persist(
      (set) => ({
        bioData: null,
        setBioData: (bioData) => set({ bioData }),
        resetBioData: () => set({ bioData: null }),
      }),
      { name: "bioData" },
    ),
  ),
);
