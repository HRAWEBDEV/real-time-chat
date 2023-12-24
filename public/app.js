const socket = io();
socket.emit('chat message', 'message');
