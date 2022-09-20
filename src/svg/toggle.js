import * as React from "react"

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={42} height={29} {...props}>
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={32}
        height={15}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={5} />
        <feGaussianBlur stdDeviation={2} result="blur" />
        <feFlood floodColor="#101010" floodOpacity={0.2} />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="c"
        x={0}
        y={7}
        width={27}
        height={15}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={5} />
        <feGaussianBlur stdDeviation={2} result="blur-2" />
        <feFlood floodColor="#101010" floodOpacity={0.2} />
        <feComposite operator="in" in2="blur-2" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="d"
        x={0}
        y={14}
        width={42}
        height={15}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={5} />
        <feGaussianBlur stdDeviation={2} result="blur-3" />
        <feFlood floodColor="#101010" floodOpacity={0.2} />
        <feComposite operator="in" in2="blur-3" />
        <feComposite in="SourceGraphic" />
      </filter>
      <linearGradient
        id="b"
        x1={1.108}
        y1={5.168}
        x2={0}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#2366d3" />
        <stop offset={0.498} stopColor="#069cc7" />
        <stop offset={1} stopColor="#62d8ac" />
      </linearGradient>
    </defs>
    <g data-name="Group 76">
      <g filter="url(#a)">
        <rect
          data-name="Rectangle 52"
          width={20}
          height={3}
          rx={1.5}
          transform="translate(1 6)"
          fill="url(#b)"
        />
      </g>
      <g filter="url(#c)">
        <rect
          data-name="Rectangle 53"
          width={15}
          height={3}
          rx={1.5}
          transform="translate(1 13)"
          fill="url(#b)"
        />
      </g>
      <g filter="url(#d)">
        <rect
          data-name="Rectangle 54"
          width={30}
          height={3}
          rx={1.5}
          transform="translate(1 20)"
          fill="url(#b)"
        />
      </g>
    </g>
  </svg>
)

export default SvgComponent
