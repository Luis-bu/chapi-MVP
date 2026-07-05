import { hours } from '../data/info.js'

function Hours() {
  return (
    <div className="hours-card">
      <h3 className="hours-title">Horarios</h3>

      <ul className="hours-rows">
        {hours.map((slot) => {
          const isClosed = slot.time.toLowerCase() === 'cerrado'
          return (
            <li className="hours-row" key={slot.day}>
              <span className="hours-day">{slot.day}</span>
              <span className={`hours-time ${isClosed ? 'hours-time-closed' : ''}`}>{slot.time}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Hours
