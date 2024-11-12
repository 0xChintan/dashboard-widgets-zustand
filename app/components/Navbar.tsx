import { useState } from 'react';
import useWidgetStore from '../stores/widgetStore';
import useNotificationStore from '../stores/notificationStore';
import { v4 as uuidv4 } from 'uuid';
import Popup from './Popup';

const Navbar: React.FC = () => {
  const { addWidget } = useWidgetStore();
  const { addNotification } = useNotificationStore();

  // State to control the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  // Handle adding the widget
  const handleAddWidget = (title: string, summary: string) => {
    if (title && summary) {
      const newWidget = {
        id: uuidv4(), // Use uuidv4() to generate a unique ID
        title: title,
        data: summary,
      };

      // Add widget and show notification
      addWidget(newWidget);
      addNotification(`A new widget titled "${title}" was added!`);

      // Clear inputs
      setTitle('');
      setSummary('');
    } else {
      addNotification('Please fill in both title and summary before adding a widget.');
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <button
        onClick={() => setIsPopupOpen(true)} // Open the popup when button is clicked
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Add Widget
      </button>

      {/* Popup Modal */}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)} // Close the popup
        onAddWidget={handleAddWidget} // Handle widget addition
        title={title} // Pass the title and summary state to Popup
        summary={summary}
        setTitle={setTitle}
        setSummary={setSummary}
      />
    </nav>
  );
};

export default Navbar;
