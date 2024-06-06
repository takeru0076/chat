// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ActionCableProvider } from './contexts/ActionCableContext';
import ActionCable from 'actioncable';
import './index.css'; // 必要に応じてCSSファイルをインポートします

// ActionCableのWebSocket接続を作成
const cable = ActionCable.createConsumer('ws://localhost:3000/cable');

ReactDOM.render(
  <React.StrictMode>
    <ActionCableProvider cable={cable}>
      <Router>
        <App />
      </Router>
    </ActionCableProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
