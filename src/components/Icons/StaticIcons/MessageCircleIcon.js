const MessageCircleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g id="eANIcMlJKSC2_ts" transform="translate(3,21) scale(1,1)">
      <path
        d="M21,11.5c.0034,1.3199-.3049,2.6219-.9,3.8-.7056,1.4117-1.7902,2.5992-3.1326,3.4293s-2.8892,1.2701-4.4674,1.2707c-1.3199.0034-2.62188-.3049-3.8-.9L3,21l1.9-5.7c-.59507-1.1781-.90344-2.4801-.9-3.8.00061-1.57824.44061-3.12515,1.27072-4.46745s2.01753-2.42698,3.42928-3.13255c1.17812-.59507,2.4801-.90344,3.8-.9h.5c2.0843.11499,4.053.99476,5.5291,2.47086s2.3559,3.44479,2.4709,5.52914v.5Z"
        transform="translate(-3,-21)"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <g transform="translate(-.396019-.44307)">
      <g id="eANIcMlJKSC4_ts" transform="translate(15.946251,12) scale(0,0)">
        <ellipse
          rx="1"
          ry="1"
          transform="translate(0,0)"
          strokeWidth="0"
          fill="#ffffff"
        />
      </g>
      <g id="eANIcMlJKSC5_ts" transform="translate(12.850697,12) scale(0,0)">
        <ellipse
          rx="1"
          ry="1"
          transform="translate(0,0)"
          strokeWidth="0"
          fill="#ffffff"
        />
      </g>
      <g
        id="eANIcMlJKSC6_ts"
        transform="translate(9.755143,12.44307) scale(0,0)"
      >
        <ellipse
          rx="1"
          ry="1"
          transform="translate(0,-0.44307)"
          strokeWidth="0"
          fill="#ffffff"
        />
      </g>
    </g>
  </svg>
);

export default MessageCircleIcon;
