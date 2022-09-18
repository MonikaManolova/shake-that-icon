const MapIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g>
      <path
        id="evQKj9MOwIz3"
        d="M1,6v16l7-4l8,4l7-4v-16L16,6L8,2L1,6Z"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="evQKj9MOwIz4_to" transform="translate(16,14)">
        <path
          d="M16,6v16"
          transform="translate(-16,-14)"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g id="evQKj9MOwIz5_to" transform="translate(8,10)">
        <path
          d="M8,2v16"
          transform="translate(-8,-10)"
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

export default MapIcon;
