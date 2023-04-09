function FourPage() {
  return (
    <>
      <div className="card-container">
        <div className="card front">
          <h2>Page doesn&apos;t exist</h2>
          <img src="cat_wait.gif" alt="Circle Cat" />
          <br />
          <button onClick={() => (location.href = '/')}>Close</button>
        </div>
      </div>
    </>
  )
}

export default FourPage
