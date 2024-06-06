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
  const [senderName, setSenderName] = useState<string>('');
  const [newMessageContent, setNewMessageContent] = useState<string>('');

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

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/rooms/${roomId}/messages`, {
        content: newMessageContent,
        sender_name: senderName,
      });
      setMessages((prevMessages) => [...prevMessages, response.data]);
      setNewMessageContent('');
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
      <form onSubmit={sendMessage}>
        <div>
          <h3>名前</h3>
          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="名前を入力"
            required
          />
        </div>
        <div>
          <h3>メッセージ</h3>
          <input
            type="text"
            value={newMessageContent}
            onChange={(e) => setNewMessageContent(e.target.value)}
            placeholder="メッセージを入力"
            required
          />
        </div>
        <div>
          <button type="submit">送信</button>
        </div>
      </form>
    </div>
  );
};

export default ChatRoom;
