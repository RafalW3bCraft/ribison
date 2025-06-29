import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';

const NotificationContext = createContext();

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const showNotification = (message, type = 'info') => {
    const id = Date.now();
    const notification = { id, message, type };
    
    setNotifications(prev => [...prev, notification]);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="notification-container">
        {notifications.map(notification => (
          <Alert
            key={notification.id}
            variant={notification.type === 'error' ? 'danger' : notification.type}
            dismissible
            onClose={() => removeNotification(notification.id)}
            className="notification"
          >
            {notification.message}
          </Alert>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;