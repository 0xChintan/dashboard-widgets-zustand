import { create } from 'zustand';

interface NotificationStore {
  notifications: string[];
  addNotification: (notification: string) => void;
  clearNotifications: () => void;
}

const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (notification) => set((state) => ({
    notifications: [...state.notifications, notification],
  })),
  clearNotifications: () => set({ notifications: [] }),
}));

export default useNotificationStore;
