// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.createRef();
  const [ error, setError ] = React.useState(null);

  function handleSubmit(event) {
      event.preventDefault();
      onSubmitUsername(usernameInputRef.current.value);
  }

  function handleChange(event) {
      const { value } = event.target;
      const isLowerCase = value === value.toLowerCase();
      setError( isLowerCase ? null : 'Username must be lowercase.')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <div style={{color:'red'}}>{error}</div>
        <input type="text" id="usernameInput" ref={usernameInputRef} onChange={handleChange}/>
      </div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
