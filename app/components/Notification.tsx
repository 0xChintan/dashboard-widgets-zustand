import useNotificationStore from '../stores/notificationStore';

const Notification: React.FC = () => {
  const { notifications, clearNotifications } = useNotificationStore();

  return (
    <div className="fixed bottom-4 right-4 max-w-xs w-full">
    {notifications.map((note, index) => (
      <div
        key={index}
        className="bg-green-500 text-white p-3 rounded-md shadow-md mb-2 animate-bounce"
      >
        {note}
      </div>
    ))}
    {notifications.length > 0 && (
      <button
        onClick={clearNotifications}
        className="w-full mt-2 bg-red-500 text-white py-2 rounded-md"
      >
        Clear Notifications
      </button>
    )}
  </div>
  );
};

export default Notification;
