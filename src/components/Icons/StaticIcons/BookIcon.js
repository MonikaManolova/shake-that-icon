const BookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g id="em4fFH5G3ru2_ts" transform="translate(12,12) scale(1,1)">
      <g transform="translate(-12,-12)">
        <path
          id="em4fFH5G3ru3"
          d="M4,19.5c0-.663.26339-1.2989.73223-1.7678C5.20107,17.2634,5.83696,17,6.5,17c0,0,13.5,0,13.5,0v-15C20,2,6.5,2,6.5,2"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5,2L20,2v20h-13.5c-.66304,0-1.29893-.2634-1.76777-.7322C4.26339,20.7989,4,20.163,4,19.5v-15c0-.66304.26339-1.29893.73223-1.76777s1.10473-.73223,1.76777-.73223v0Z"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="em4fFH5G3ru5"
          d="M19.2,8.486313h-1.23671"
          transform="translate(-.574065 0)"
          opacity="0"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
        />
        <path
          id="em4fFH5G3ru6"
          d="M19.2,8.486313h-1.23671"
          transform="translate(-.574065 2.944701)"
          opacity="0"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
        />
        <path
          id="em4fFH5G3ru7"
          d="M19.2,8.486313h-1.23671"
          transform="translate(-.574065 5.744737)"
          opacity="0"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
        />
      </g>
    </g>
  </svg>
);

export default BookIcon;
