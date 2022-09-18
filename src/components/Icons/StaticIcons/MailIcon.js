const MailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g id="elUXhik4LrG2_to" transform="translate(12,12)">
      <g transform="translate(-12,-12)">
        <path
          d="M4,4h16c1.1,0,2,.9,2,2v12c0,1.1-.9,2-2,2h-16c-1.1,0-2-.9-2-2L2,6c0-1.1.9-2,2-2Z"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="elUXhik4LrG4"
          d="M22,6L12,13L2,6"
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

export default MailIcon;
