function ShowOneMember() {
  return (
    <div className="container-middle">
      {f.map((dataValue) => (
        <OneMember key={dataValue.id} {...dataValue} />
      ))}
    </div>
  )
}

export default ShowOneMember
