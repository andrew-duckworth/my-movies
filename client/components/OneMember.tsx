import * as Models from '../../server/common/allModels'
// import allModels from '../../server/common/allModels'

interface Props {
  oneMember: Models.Family
}


function ShowOneMember({oneMember}: Props) {
  return (
    <div>
      <h1>{oneMember.name}</h1>
      {/* <img  src={oneMember.image} alt={oneMember.name}></img> */}
      <p> Nicknames: {oneMember.nicknames} </p>
            <br></br>
      <h4>Position in the family: {oneMember.position}</h4>
            <br></br>
    </div>
  )
}

export default ShowOneMember

