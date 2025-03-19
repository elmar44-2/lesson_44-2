import create from 'zustand';

const useStore = create((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}));

export default useStore;
