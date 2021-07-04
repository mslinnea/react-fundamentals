// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.createRef();
  const [ username, setUsername ] = React.useState('');

  function handleSubmit(event) {
      event.preventDefault();
      onSubmitUsername(username);
  }

  function handleChange(event) {
      const { value } = event.target;
      setUsername(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input value={username} type="text" id="usernameInput" ref={usernameInputRef} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
