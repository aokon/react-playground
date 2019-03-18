import React from 'react';

const liStyle = {
  cursor: "pointer"
};

const LanguageSwitcher = ({ onClick }) => (
  <div id="langSwitcher">
    <ul>
      <li style={liStyle} onClick={() => onClick('en')}>EN</li>
      <li style={liStyle} onClick={() => onClick('pl')}>PL</li>
    </ul>
  </div>
);

export default LanguageSwitcher;
