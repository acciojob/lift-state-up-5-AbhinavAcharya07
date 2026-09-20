import React from 'react'
import Child from './child'

const Parent = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <div style={{ margin: '20px', fontFamily: 'sans-serif' }}>
        <p>Parent component</p>
        
        <Child isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
     </div>
  )
}

export default Parent