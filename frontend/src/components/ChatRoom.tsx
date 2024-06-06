import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Message {
  id: number;
  sender_name: string;
  content: string;
}

const ChatRoom: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetchMessages();
  }, [roomId]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/rooms/${roomId}/messages`);
      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>チャットルーム {roomId}</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.sender_name}:</strong> {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoom;
