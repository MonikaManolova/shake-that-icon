const BellIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g id="e27vHnjJEKB2_tr" transform="translate(12,2) rotate(0)">
      <g transform="translate(-12,-2)">
        <path
          d="M18,8c0-1.5913-.6321-3.11742-1.7574-4.24264C15.1174,2.63214,13.5913,2,12,2s-3.11742.63214-4.24264,1.75736C6.63214,4.88258,6,6.4087,6,8c0,7-3,9-3,9h18c0,0-3-2-3-9Z"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="e27vHnjJEKB4_tr" transform="translate(12,2) rotate(0)">
          <path
            d="M13.73,21c-.1758.3031-.4282.5547-.7318.7295s-.6478.267-.9982.267-.6946-.0921-.9982-.267-.556-.4264-.7318-.7295"
            transform="translate(-12,-2)"
            fill="none"
            stroke={props.color || "#FFFFFF"}
            strokeWidth={props.strokeWidth || "2"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default BellIcon;
