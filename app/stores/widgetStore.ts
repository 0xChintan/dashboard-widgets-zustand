import { create } from 'zustand';

interface Widget {
  id: number;
  title: string;
  data: string;
}

interface WidgetStore {
  widgets: Widget[];
  addWidget: (widget: Omit<Widget, 'id'>) => void;
  removeWidget: (id: number) => void;
  clearWidgets: () => void;
}

const useWidgetStore = create<WidgetStore>((set) => {
  let widgetIdCounter = 1; // Start widget ID counter at 1

  return {
    widgets: [],
    addWidget: (widget) =>
      set((state) => {
        const newWidget = { id: widgetIdCounter++, ...widget }; // Use counter for unique ID
        return { widgets: [...state.widgets, newWidget] };
      }),
    removeWidget: (id) =>
      set((state) => ({
        widgets: state.widgets.filter((w) => w.id !== id),
      })),
    clearWidgets: () =>
      set(() => {
        widgetIdCounter = 1; // Reset counter when clearing widgets
        return { widgets: [] };
      }),
  };
});

export default useWidgetStore;
