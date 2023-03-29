import {CollectionData}  from '../../models/Collections'

interface Props {
  singleCollection: CollectionData
}

function ACollection({ singleCollection }: Props) {
  return (
    <div>

      <h3>{singleCollection.title}</h3>
      <p>{singleCollection.content}</p>
    </div>
  )
}

export default ACollection