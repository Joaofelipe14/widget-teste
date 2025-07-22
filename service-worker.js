self.addEventListener('install', function(event) {
});

self.addEventListener('activate', function(event) {
});

self.addEventListener('notificationclick', function(event) {
    if (event.action === 'focusWindow') {
        clients.openWindow('/');
    }
    event.notification.close();
});

self.addEventListener('push', function(event) {
    console.log('Ta usando o do cliente')
    const options = {
        body: event.data.text(),
        icon: '/icon-notification-powerzap.png',
        badge: '/icon-notification-powerzap.png',
        vibrate: [200, 100, 200],
        tag: 'powerzap'
    };
    
    event.waitUntil(
        self.registration.showNotification('Nova Notificação', options)
    );
});
