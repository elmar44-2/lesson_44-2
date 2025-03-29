import create from 'zustand';
const useStore = create((set) => ({
  user: null, 
  orders: [], 
  setUser: (user) => set({ user }),

  addOrder: (order) => set((state) => ({
    orders: [
      ...state.orders,
      { ...order, userId: state.user?.id }
    ]
  })),

  getUserOrders: () => (state) => state.orders.filter(order => order.userId === state.user?.id),
}));

export default useStore;
