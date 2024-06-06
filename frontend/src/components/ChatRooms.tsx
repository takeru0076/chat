import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface ChatRoom {
  id: number;
  name: string;
}

const ChatRooms: React.FC = () => {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const [newRoomName, setNewRoomName] = useState<string>('');

  useEffect(() => {
    fetchChatRooms();
  }, []);

  const fetchChatRooms = async () => {
    try {
      const response = await axios.get('http://localhost:3000/rooms');
      setChatRooms(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createRoom = async () => {
    try {
      const response = await axios.post('http://localhost:3000/rooms', {
        name: newRoomName,
      });
      setChatRooms((prevRooms) => [...prevRooms, response.data]);
      setNewRoomName('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>ReactChat - チャットルーム一覧</h1>
      <ul>
        {chatRooms.map((room) => (
          <li key={room.id}>
            <Link to={`/rooms/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
      <h3>チャットルーム作成</h3>
      <input
        type="text"
        value={newRoomName}
        onChange={(e) => setNewRoomName(e.target.value)}
      />
      <div>
        <button onClick={createRoom}>作成</button>
      </div>
    </div>
  );
};

export default ChatRooms;
