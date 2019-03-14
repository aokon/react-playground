import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import UserForm from './UserForm';
import LanguageContext from '../contexts/LanguageContext';

const App = () => (
  <div id="app">
    <LanguageContext.Provider>
      <LanguageSwitcher />
      <UserForm />
    </LanguageContext.Provider>
  </div>
);

export default App;
