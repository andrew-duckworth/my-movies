import { useNavigate } from 'react-router-dom'

function SiteEntry() {
  const navigate = useNavigate()
  return (
    <header className="header">
      <h1>Olivia&apos;s Very Bad Dad Jokes</h1>
      <h2>
        If these jokes are all that they are cracked up to be, they will be
        cracking you up before you know it.
      </h2>
      <button onClick={() => navigate('/jokes')}>
        I&apos;m ready to laugh, open the joke inventory!
      </button>
    </header>
  )
}
export default SiteEntry
