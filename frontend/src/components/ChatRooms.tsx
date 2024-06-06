import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface ChatRoom {
  id: number;
  name: string;
}

const ChatRooms: React.FC = () => {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

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
    </div>
  );
};

export default ChatRooms;
