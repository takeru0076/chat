// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatRooms from './components/ChatRooms';
import ChatRoom from './components/ChatRoom';

const App: React.FC = () => {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<ChatRooms />} />
        <Route path="/rooms/:roomId" element={<ChatRoom />} />
      </Routes>
    </div>
  );
};

export default App;
