import { fetchSchedule } from '../actions/Schedule'
import { useAppDispatch } from '../hooks/redux'

function SchedulerButton() {
  const dispatch = useAppDispatch()
  return (
    <div className="center">
      {/* dispatch is calling the action fetchQuote */}
      <button onClick={() => dispatch(fetchSchedule())}>Fetch Schedule</button>
    </div>
  )
}

export default SchedulerButton
