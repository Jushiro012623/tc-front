import {create} from "zustand";
import {persist} from "zustand/middleware";

export interface UIStore {
    isDarkMode: boolean
    toggleDarkMode: () => void
    setDarkMode: (value: boolean) => void
}

export const useUIStore = create<UIStore>()(
    persist(
        (set) => ({
            isDarkMode: false,

            toggleDarkMode: () =>
                set((state) => ({
                    isDarkMode: !state.isDarkMode,
                })),

            setDarkMode: (value) => set({isDarkMode: value}),
        }),
        {
            name: "theme",
        }
    )
)
