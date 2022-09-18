const MicIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <path
      d="M8,23h8"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12,19v4"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      id="ed1JF6G9rDH4"
      d="M12,1c-.7956,0-1.5587.31607-2.12132.87868C9.31607,2.44129,9,3.20435,9,4v8c0,.7956.31607,1.5587.87868,2.1213s1.32572.8787,2.12132.8787s1.5587-.3161,2.1213-.8787.8787-1.3257.8787-2.1213v-8c0-.79565-.3161-1.55871-.8787-2.12132s-1.3257-.87868-2.1213-.87868v0Z"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19,10v2c0,1.8565-.7375,3.637-2.0503,4.9497s-3.0932,2.0503-4.9497,2.0503-3.63699-.7375-4.94975-2.0503C5.7375,15.637,5,13.8565,5,12v-2"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="ed1JF6G9rDH6_to" transform="translate(12,8.571384)">
      <path
        id="ed1JF6G9rDH6"
        d="M7,4.030924c0,0,1.592738-1.722446,5-1.722446s5.014661,1.722446,5.014661,1.722446"
        transform="translate(-12,-4.030924)"
        opacity="0"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
      />
    </g>
    <g id="ed1JF6G9rDH7_to" transform="translate(12,8.571384)">
      <path
        id="ed1JF6G9rDH7"
        d="M8,4.030924c0,0,1-1.722446,4-1.722446s4,1.722446,4,1.722446"
        transform="translate(-12,-4.030924)"
        opacity="0"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default MicIcon;
