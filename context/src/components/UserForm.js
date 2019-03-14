import React from 'react';

const UserForm = () => {
  return (
    <form id="userForm">
      <div>
        <label>Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default UserForm;
