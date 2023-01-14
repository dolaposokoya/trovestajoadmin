import React from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';


export default function DisplayMessage(message, type,title = 'Information') {
    switch (type) {
        case 'info':
            NotificationManager.info(title, message, 9000);
            break;
        case 'success':
            NotificationManager.success(message, title, 9000);
            break;
        case 'warning':
            NotificationManager.warning(message, title, 9000);
            break;
        case 'error':
            NotificationManager.error(message, title, 9000);
            break;
    }
}