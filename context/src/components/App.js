import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import UserForm from './UserForm';
import LanguageStore from '../contexts/LanguageContext';

const App = () => (
  <div id="app">
    <LanguageStore>
      <LanguageSwitcher  />
      <UserForm />
    </LanguageStore>
  </div>
);

export default App;
