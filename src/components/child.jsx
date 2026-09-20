import React from 'react'

const Child = ({ isLoggedIn, handleLogin }) => { 
  const [user, setUser] = React.useState('')
  const [pass, setPass] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.trim() && pass.trim()) {
      handleLogin()
    }
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Please Log In</h3>
      {
        isLoggedIn ? (<p style={{ color: 'black' }}>You are logged in!</p>) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <label>
                Username:{' '}
                <input 
                  type="text" 
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  placeholder='Enter name'
                  required
                />
              </label>
              <label>
                Password:{' '}
                <input 
                   type="password" 
                   value={pass}
                   onChange={(e) => setPass(e.target.value)}
                   placeholder='Enter password'
                   required
                />
              </label>
            </div>
            <button type='submit'>Submit</button>
          </form>
        )
      }
    </div>
  )
}

export default Child 