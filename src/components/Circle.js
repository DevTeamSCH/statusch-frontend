import React from 'react'

const Circle = ({ color, diameter }) => (
  <svg width={diameter} height={diameter}>
    <circle cx={diameter / 2} cy={diameter / 2} r={diameter / 2} fill={color} />
  </svg>
)

export { Circle }
