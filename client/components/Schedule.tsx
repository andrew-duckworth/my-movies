import { useAppSelector } from '../hooks/redux'

function Schedule() {
  const schedulecomp = useAppSelector((state) => state.schedule)

  return (
    <div className="Schedule center">
      {
        (schedulecomp.id,
        schedulecomp.host,
        schedulecomp.day,
        schedulecomp.time)
      }
    </div>
  )
}

export default Schedule
