import React from 'react'
export const Item = ({equipo}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{equipo}</h5>
      </div>
    </div>
  )
}
