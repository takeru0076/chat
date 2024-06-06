import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatRooms from './components/ChatRooms';
import ChatRoom from './components/ChatRoom';

const App: React.FC = () => {
  return (
    <div id="app">
      <Router>
        <Routes>
          <Route path="/" element={<ChatRooms />} />
          <Route path="/rooms/:roomId" element={<ChatRoom />} />
          {/* 必要に応じて追加のルートをここに定義します */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
