import { useState } from 'react'

function Nav() {
  const [signedIn, setSignedIn] = useState(true)

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    setSignedIn(!signedIn)
  }

  return (
    <nav className="nav">
      <a href="/">
        <h1>Title</h1>
      </a>
      <div className="nav__button">
        {signedIn ? (
          <>
            <p>Hello, User!</p> <button onClick={handleClick}>Log Out</button>
          </>
        ) : (
          <button onClick={handleClick}>Log In</button>
        )}
      </div>
    </nav>
  )
}

export default Nav
