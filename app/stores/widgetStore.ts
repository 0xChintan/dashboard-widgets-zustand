import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4

interface Widget {
  id: string;
  title: string;
  data: string;
}

interface WidgetStore {
  widgets: Widget[];
  addWidget: (widget: Omit<Widget, 'id'>) => void;
  removeWidget: (id: string) => void;
  clearWidgets: () => void;
}

const useWidgetStore = create<WidgetStore>((set) => ({
  widgets: [],
  addWidget: (widget) => set((state) => ({
    widgets: [...state.widgets, { id: uuidv4(), ...widget }] // Use uuidv4 to generate unique ID
  })),
  removeWidget: (id) => set((state) => ({
    widgets: state.widgets.filter((widget) => widget.id !== id)
  })),
  clearWidgets: () => set(() => ({ widgets: [] }))
}));

export default useWidgetStore;
