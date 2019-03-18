import React from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const liStyle = {
  cursor: "pointer"
};

const LanguageSwitcher = ({ onClick }) => (
  <div id="langSwitcher">
    <LanguageContext.Consumer>
      {({ onLangChange }) => (
        <ul>
          <li style={liStyle} onClick={() => onLangChange('en')}>EN</li>
          <li style={liStyle} onClick={() => onLangChange('pl')}>PL</li>
        </ul>
      )}
    </LanguageContext.Consumer>
  </div>
);

export default LanguageSwitcher;
