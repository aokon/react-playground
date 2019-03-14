import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

const printLabel = lang =>
  lang === 'pl' ? 'Imię' : 'Name';

const UserForm = () => {
  return (
    <LanguageContext.Consumer>
      {(lang) => (
        <form id="userForm">
          <div>
            <label>{printLabel(lang)}</label>
            <input type="text" name="name" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      )}
    </LanguageContext.Consumer>
  );
};

export default UserForm;
