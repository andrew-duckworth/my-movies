import { useAppDispatch, useAppSelector } from '../hooks/redux'
import * as Models from '../../common/Starsign'
import { useEffect } from 'react'
import { getChartThunk } from '../actions/zodiac'

function Details() {
  const dispatch = useAppDispatch()
  const charts = useAppSelector((state) => state.chart as Models.ChartData[])

  useEffect(() => {
    dispatch(getChartThunk())
  }, [dispatch])

  const clickHandler = () => {
    console.log(charts)
  }

  return (
    <>
      <div className="users">
        <button onClick={clickHandler}>click</button>
      </div>
    </>
  )
}

export default Details
