export default function AddTeam() {
  const clickHandler = () => {
    console.log('hey')
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={clickHandler}>
        <label htmlFor="name">Team Name: </label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="logo">Logo Url: </label>
        <input type="text" id="logo" name="logo" />
        <br />
        <label htmlFor="name">Manager: </label>
        <input type="text" id="manager" name="manager" />
        <br />
        <label htmlFor="city">City: </label>
        <input type="text" id="city" name="city" />

        <button>Add Team</button>
      </form>
    </div>
  )
}
