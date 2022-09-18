const PinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g id="eTJLCE5RnfS2_ts" transform="translate(12,23) scale(1,1)">
      <g transform="translate(-12,-23)">
        <path
          d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-2.38695.94821-4.67613,2.63604-6.36396C7.32387,1.94821,9.61305,1,12,1s4.6761.94821,6.364,2.63604s2.636,3.97701,2.636,6.36396Z"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="eTJLCE5RnfS4_to" transform="translate(12,10)">
          <g id="eTJLCE5RnfS4_ts" transform="scale(1,1)">
            <path
              d="M12,13c1.6569,0,3-1.3431,3-3s-1.3431-3-3-3-3,1.34315-3,3s1.3431,3,3,3Z"
              transform="translate(-12,-10)"
              fill="none"
              stroke={props.color || "#FFFFFF"}
              strokeWidth={props.strokeWidth || "2"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default PinIcon;
