import React, { useState } from 'react';

export const LanguageContext = React.createContext('en');

const LanguageStore = ({ children }) => {
  const [lang, setLang] = useState('en');
  const onLangChange = lang => setLang(lang);

  return (
    <LanguageContext.Provider value={{ lang, onLangChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageStore;
