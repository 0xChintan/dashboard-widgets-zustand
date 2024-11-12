"use client"
import { useEffect } from 'react';
import useWidgetStore from '../stores/widgetStore';
import useNotificationStore from '../stores/notificationStore';
import Widget from './Widget';
import Navbar from './Navbar';
import Notification from './Notification';

const Dashboard: React.FC = () => {
  const { widgets } = useWidgetStore();
  const { addNotification } = useNotificationStore();

  useEffect(() => {// Apply theme class to body for dark/light mode

    // Add a test notification to ensure Clear Notifications button shows up
    addNotification("Welcome to your Dashboard!");
  }, [ addNotification]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {widgets.map((widget) => (
          <Widget key={widget.id} {...widget} />
        ))}
      </div>
      <Notification />
    </div>
  );
};

export default Dashboard;
