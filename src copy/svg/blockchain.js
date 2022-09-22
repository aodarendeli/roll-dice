import * as React from 'react'

const SvgComponent = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={24} height={27.037} {...props}>
    <defs>
      <linearGradient
        id='a'
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits='objectBoundingBox'
      >
        <stop offset={0} stopColor='#2366d3' />
        <stop offset={0.498} stopColor='#069cc7' />
        <stop offset={1} stopColor='#62d8ac' />
      </linearGradient>
    </defs>
    <path
      d='m7.576 10.531 4.042-2.258V4.029a2.032 2.032 0 0 1-1.2-.7L3.941 7.081a2.057 2.057 0 0 1 .035 1.27Zm2.5-7.785a2.031 2.031 0 1 1 3.809-.015l6.507 3.763c.046-.055.092-.11.143-.161a2.031 2.031 0 1 1 1.7 3.448v7.462a2.03 2.03 0 1 1-1.84 3.3l-6.515 3.763a2.031 2.031 0 1 1-3.809-.015L3.6 20.548a2.03 2.03 0 1 1-1.848-3.3V9.779a2.031 2.031 0 1 1 1.854-3.294l6.467-3.739Zm3.468.574a2.023 2.023 0 0 1-1.221.711v4.243l4.033 2.337 3.708-2.143a2 2 0 0 1-.123-.7 2.043 2.043 0 0 1 .117-.68L13.541 3.32Zm8.073 6.447a2.015 2.015 0 0 1-1.085-.567 1.662 1.662 0 0 1-.119-.13l-3.7 2.139v4.572l3.717 2.145c.033-.037.066-.075.1-.11a2.023 2.023 0 0 1 1.083-.563V9.768Zm-1.558 10.182a2.032 2.032 0 0 1 .013-1.417l-3.6-2.075-4.152 2.416v4.135a2.023 2.023 0 0 1 1.221.711l6.518-3.769ZM10.417 23.7a2.032 2.032 0 0 1 1.2-.7v-4.147l-4.172-2.42-3.54 2.044a2.039 2.039 0 0 1 .033 1.481Zm-8.049-6.446a2.022 2.022 0 0 1 1.1.568l.062.066 3.606-2.082v-4.725l-3.472-2.1a1.93 1.93 0 0 1-.2.227 2.036 2.036 0 0 1-1.1.568v7.481ZM2.033 9.1h.044a1.238 1.238 0 1 0-.044 0Zm10.879 14.97a1.328 1.328 0 1 0 .389.94 1.325 1.325 0 0 0-.389-.94Zm0-22.979a1.328 1.328 0 1 0 .389.94 1.325 1.325 0 0 0-.389-.94Zm9.994 17.227a1.328 1.328 0 1 0 .389.94 1.325 1.325 0 0 0-.389-.939Zm-19.936 0a1.328 1.328 0 1 0 .389.94 1.325 1.325 0 0 0-.389-.94Zm17.812-9.95a.313.313 0 0 1 .044.062.381.381 0 0 1 .031.068 1.563 1.563 0 0 0 .169.209 1.328 1.328 0 1 0-.389-.94 1.367 1.367 0 0 0 .146.601Zm-12.99 7.363a.371.371 0 0 1 .095.194l3.769 2.216v-4.375l-3.864-2.3Zm8.265-4.205-3.743 2.242v4.377l3.743-2.211v-4.408ZM11.968 8.8l-3.653 2.185 3.673 2.215 3.567-2.165Z'
      fillRule='evenodd'
      fill='url(#a)'
    />
  </svg>
)

export default SvgComponent