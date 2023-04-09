import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const { pathname } = useLocation()

  const renderHomeLink = () => <Link to="/">Home</Link>

  return (
    <nav>
      <div className="nav-button">
        {pathname === '/' ? renderHomeLink() : renderHomeLink()}
      </div>
      <div className="nav-button">
        <Link to="/chart">Charts</Link>
      </div>
      <div className="nav-button">
        <Link to="info">Info</Link>
      </div>
    </nav>
  )
}

export default Nav
