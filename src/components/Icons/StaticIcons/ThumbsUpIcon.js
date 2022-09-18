const ThumbsUpIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g id="eNqymD3lcft2_tr" transform="translate(12,16.046065) rotate(0)">
      <g id="eNqymD3lcft2_ts" transform="scale(1,1)">
        <path
          id="eNqymD3lcft2"
          d="M7,22h-3c-.53043,0-1.03914-.2107-1.41421-.5858s-.58579-.8838-.58579-1.4142v-7c0-.5304.21071-1.0391.58579-1.4142s.88378-.5858,1.41421-.5858h3m7-2v-4c0-.79565-.3161-1.55871-.8787-2.12132s-1.3257-.87868-2.1213-.87868c0,0-4,9-4,9v11h11.28c.4823.0055.9504-.1636,1.3179-.476s.6098-.7471.6821-1.224l1.38-9c.0435-.2866.0242-.5793-.0567-.8577s-.2212-.53601-.4114-.75479-.4258-.39358-.6903-.51229-.5517-.1785-.8416-.17522L14,9Z"
          transform="translate(-12,-16.046065)"
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

export default ThumbsUpIcon;
