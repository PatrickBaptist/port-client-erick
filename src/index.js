import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { UserStore } from './context/openMenu';
import { UserImage } from './context/openImage';
import { UserCurrent } from './context/currentImage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserCurrent>
      <UserImage>
        <UserStore>
          <App />
        </UserStore>
      </UserImage>
    </UserCurrent>
  </React.StrictMode>
);