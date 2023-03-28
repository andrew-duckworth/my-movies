import { useState } from 'react'

function Nav() {
  const [signedIn, setSignedIn] = useState(true)

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    setSignedIn(!signedIn)
  }

  return (
    <header className="nav">
      <h1>Title</h1>
      <div className="nav__button">
        {signedIn ? (
          <>
            <p>Hello, User!</p> <button onClick={handleClick}>Log Out</button>
          </>
        ) : (
          <button onClick={handleClick}>Log In</button>
        )}
      </div>
    </header>
  )
}

export default Nav
