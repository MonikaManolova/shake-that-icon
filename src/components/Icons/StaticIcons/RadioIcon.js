const RadioIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g id="ejwWUY4aGQi2_ts" transform="translate(12,12) scale(1,1)">
      <path
        d="M12,14c1.1046,0,2-.8954,2-2s-.8954-2-2-2-2,.8954-2,2s.8954,2,2,2Z"
        transform="translate(-12,-12)"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <g>
      <g
        id="ejwWUY4aGQi4_ts"
        transform="translate(12.00002,11.999995) scale(1,1)"
      >
        <path
          id="ejwWUY4aGQi4"
          d="M4.93,19.07C3.05529,17.1947,2.00214,14.6516,2.00214,12s1.05315-5.19473,2.92786-7.07001"
          transform="translate(-12.00002,-11.999995)"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g
        id="ejwWUY4aGQi5_ts"
        transform="translate(12.00002,11.999995) scale(1,1)"
      >
        <path
          id="ejwWUY4aGQi5"
          d="M7.76,16.24c-.55786-.5572-1.00041-1.219-1.30236-1.9474s-.45736-1.5091-.45736-2.2976.15542-1.5693.45736-2.29765.7445-1.39012,1.30236-1.94736"
          transform="translate(-12.00002,-11.999995)"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <g transform="matrix(-1 0 0 1 24 0)">
      <g
        id="ejwWUY4aGQi7_ts"
        transform="translate(12.00002,11.999995) scale(1,1)"
      >
        <path
          id="ejwWUY4aGQi7"
          d="M4.93,19.07C3.05529,17.1947,2.00214,14.6516,2.00214,12s1.05315-5.19473,2.92786-7.07001"
          transform="translate(-12.00002,-11.999995)"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g
        id="ejwWUY4aGQi8_ts"
        transform="translate(12.00002,11.999995) scale(1,1)"
      >
        <path
          id="ejwWUY4aGQi8"
          d="M7.76,16.24c-.55786-.5572-1.00041-1.219-1.30236-1.9474s-.45736-1.5091-.45736-2.2976.15542-1.5693.45736-2.29765.7445-1.39012,1.30236-1.94736"
          transform="translate(-12.00002,-11.999995)"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export default RadioIcon;
