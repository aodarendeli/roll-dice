import * as React from 'react'

const SvgComponent = (props) => (
  <svg
    data-name='Icon awesome-volume-mute'
    xmlns='http://www.w3.org/2000/svg'
    width={40.5}
    height={33.752}
    {...props}
  >
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
      data-name='Icon awesome-volume-up'
      d='m15.119 5-6.255 6.25H1.688A1.687 1.687 0 0 0 0 12.938v10.125a1.687 1.687 0 0 0 1.688 1.687h7.176L15.119 31A1.688 1.688 0 0 0 18 29.811V6.189A1.689 1.689 0 0 0 15.119 5Zm16.406-3.6a1.7 1.7 0 1 0-1.868 2.845 16.428 16.428 0 0 1 0 27.5 1.7 1.7 0 1 0 1.868 2.855 19.832 19.832 0 0 0 0-33.192ZM33.75 18a12.982 12.982 0 0 0-6.031-10.986 1.68 1.68 0 0 0-2.329.525 1.708 1.708 0 0 0 .521 2.346 9.61 9.61 0 0 1 0 16.231 1.707 1.707 0 0 0-.521 2.346 1.683 1.683 0 0 0 2.329.525A12.981 12.981 0 0 0 33.75 18Zm-9.968-5.4a1.688 1.688 0 0 0-1.628 2.957 2.771 2.771 0 0 1 0 4.9 1.688 1.688 0 0 0 1.628 2.943 6.148 6.148 0 0 0 0-10.81Z'
      transform='translate(0 -1.125)'
      fill='url(#a)'
    />
  </svg>
)

export default SvgComponent
