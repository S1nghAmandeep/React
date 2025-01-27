import { create } from "zustand";

export type State = {
    count: number;
    name: string;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

export const useCounterStore = create<State>((set) => ({
    count: 0,
    name: 'pippo',
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1})),
    reset: () => set({count: 0})
}));