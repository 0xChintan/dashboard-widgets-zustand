import { v4 as uuidv4 } from 'uuid';
import useWidgetStore from '../stores/widgetStore';
import useNotificationStore from '../stores/notificationStore';

const Navbar: React.FC = () => {
  const { addWidget, clearWidgets ,widgets} = useWidgetStore();
  const { addNotification } = useNotificationStore();

  const handleAddWidget = () => {
    const newWidget = {
      id: uuidv4(), // Generate unique ID for client-side only
      title: 'New Widget',
      data: 'Sample Data...',
    };
    addWidget(newWidget);
    addNotification('A new widget was added!');
  };

  const handleClearWidgets = () => {
    clearWidgets();
    addNotification('All widgets were removed!');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex space-x-4">
        {widgets.length > 0 && (
          <button
            onClick={handleClearWidgets}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Remove All Widgets
          </button>
        )}
        <button
          onClick={handleAddWidget}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Add Widget
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
