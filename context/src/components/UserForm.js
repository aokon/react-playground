import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

const i18n = {
  en: {
    inputLabel: 'Name',
    submitLabel: 'Submit'
  },

  pl: {
    inputLabel: 'Imię',
    submitLabel: 'Wyślij'
  }
}

const t = (lang, key) => i18n[lang][key]

const UserForm = () => (
  <LanguageContext.Consumer>
    {(lang) => (
      <form id="userForm">
        <div>
          <label>{t(lang, 'inputLabel')}</label>
          <input type="text" name="name" />
        </div>
        <div>
          <button>{t(lang, 'submitLabel')}</button>
        </div>
      </form>
    )}
  </LanguageContext.Consumer>
);

export default UserForm;
