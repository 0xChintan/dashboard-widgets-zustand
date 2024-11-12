import useWidgetStore from '../stores/widgetStore';
import useNotificationStore from '../stores/notificationStore';
interface WidgetProps {
  id: string;
  title: string;
  data: string;
}

const Widget: React.FC<WidgetProps> = ({ id, title, data }) => {
  const removeWidget = useWidgetStore((state) => state.removeWidget);
  const { addNotification } = useNotificationStore();
  const handleDelete = () => {
    removeWidget(id);
    addNotification('Widgets were removed!!');
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 relative">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{data}</p>
      <button
        onClick={handleDelete}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        title="Delete Widget"
      >
        ✕
      </button>
    </div>
  );
};

export default Widget;
