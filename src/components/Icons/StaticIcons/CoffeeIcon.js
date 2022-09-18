const CoffeeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g id="eHe6wRAK1Vk2_tr" transform="translate(10,21) rotate(0)">
      <g transform="translate(-10,-21)">
        <path
          d="M18,8h1c1.0609,0,2.0783.42143,2.8284,1.17157C22.5786,9.92172,23,10.9391,23,12s-.4214,2.0783-1.1716,2.8284C21.0783,15.5786,20.0609,16,19,16h-1"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2,8h16v9c0,1.0609-.4214,2.0783-1.1716,2.8284C16.0783,20.5786,15.0609,21,14,21h-8c-1.06087,0-2.07828-.4214-2.82843-1.1716C2.42143,19.0783,2,18.0609,2,17v-9Z"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <path
      id="eHe6wRAK1Vk5"
      d="M14,1v3"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      id="eHe6wRAK1Vk6"
      d="M10,1v3"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      id="eHe6wRAK1Vk7"
      d="M6,1C6,1,6,4,6,4"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="0"
    />
  </svg>
);

export default CoffeeIcon;
