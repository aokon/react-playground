import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import UserForm from './UserForm';
import LanguageContext from '../contexts/LanguageContext';

const App = () => {
  const [lang, setLang] = useState('en');
  const onClick = lang => setLang(lang);

  return (
    <div id="app">
      <LanguageContext.Provider value={lang}>
        <LanguageSwitcher onClick={onClick} />
        <UserForm />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
