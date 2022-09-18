const VolumeDownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g id="eFm9n7JcjLB2_ts" transform="translate(20,12) scale(1,1)">
      <g transform="translate(-20,-12)">
        <g id="eFm9n7JcjLB3_to" transform="translate(20,12)">
          <g id="eFm9n7JcjLB3_tr" transform="rotate(0)">
            <g id="eFm9n7JcjLB3_ts" transform="scale(1,1)">
              <path
                id="eFm9n7JcjLB3"
                d="M23,9c0,0-6,6-6,6"
                transform="translate(-20,-12)"
                fill="none"
                stroke={props.color || "#FFFFFF"}
                strokeWidth={props.strokeWidth || "2"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
        <g id="eFm9n7JcjLB4_to" transform="translate(20,12)">
          <g id="eFm9n7JcjLB4_tr" transform="rotate(-90)">
            <g id="eFm9n7JcjLB4_ts" transform="scale(1,1)">
              <path
                id="eFm9n7JcjLB4"
                d="M23,9c0,0-6,6-6,6"
                transform="translate(-20,-12)"
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
    </g>
    <g id="eFm9n7JcjLB6_to" transform="translate(6.5,12)">
      <path
        id="eFm9n7JcjLB6"
        d="M11,5L6,9h-4v6h4l5,4c0,0,0-14,0-14Z"
        transform="translate(-6.5,-12)"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default VolumeDownIcon;
