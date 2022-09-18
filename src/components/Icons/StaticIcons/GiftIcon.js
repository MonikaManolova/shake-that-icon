const GiftIcon = (props) => (
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
      d="M4,12h16v10h-16v-10Z"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="eU3yHA5GOm13_tr" transform="translate(2,12) rotate(0)">
      <path
        d="M22,7L2,7v5h20v-5Z"
        transform="translate(-2,-12)"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <path
      id="eU3yHA5GOm14"
      d="M12,22v-15"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="18"
    />
    <path
      id="eU3yHA5GOm15"
      d="M12,7h4.5c.663,0,1.2989-.26339,1.7678-.73223C18.7366,5.79893,19,5.16304,19,4.5s-.2634-1.29893-.7322-1.76777C17.7989,2.26339,17.163,2,16.5,2C13,2,12,7,12,7Z"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="20"
    />
    <path
      id="eU3yHA5GOm16"
      d="M12,7h-4.5c-.66304,0-1.29893-.26339-1.76777-.73223s-.73223-1.10473-.73223-1.76777.26339-1.29893.73223-1.76777s1.10473-.73223,1.76777-.73223C11,2,12,7,12,7Z"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="20"
    />
  </svg>
);

export default GiftIcon;
