const DownloadCloudIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g clipPath="url(#etCEyXwfRpk9)">
      <g>
        <g id="etCEyXwfRpk4_to" transform="translate(11.998735,16.5)">
          <g transform="translate(-11.998734,-16.5)">
            <path
              id="etCEyXwfRpk5"
              d="M12,21l4-4"
              fill="none"
              stroke={props.color || "#FFFFFF"}
              strokeWidth={props.strokeWidth || "2"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDashoffset="13"
              strokeDasharray="20"
            />
            <path
              id="etCEyXwfRpk6"
              d="M8,17l4,4"
              transform="matrix(-1 0 0-1 19.997469 38)"
              fill="none"
              stroke={props.color || "#FFFFFF"}
              strokeWidth={props.strokeWidth || "2"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDashoffset="13"
              strokeDasharray="20"
            />
            <g id="etCEyXwfRpk7_ts" transform="translate(12,16.5) scale(1,-1)">
              <path
                id="etCEyXwfRpk7"
                d="M12,12v9"
                transform="translate(-12,-16.5)"
                fill="none"
                stroke={props.color || "#FFFFFF"}
                strokeWidth={props.strokeWidth || "2"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="20"
              />
            </g>
          </g>
        </g>
        <path
          d="M20.88,18.09c.8694-.6114,1.5214-1.4838,1.8613-2.4909.3399-1.007.3501-2.0961.0291-3.1093s-.9565-1.8977-1.8143-2.52524-1.8933-.96539-2.9561-.96456h-1.26c-.3008-1.17213-.8635-2.26075-1.6459-3.18392s-1.764-1.65682-2.8709-2.14573-2.31036-.72032-3.51968-.67683-2.39301.36075-3.46197.92791-1.99533,1.36942-2.70937,2.3464-1.19713,2.10322-1.41293,3.29392-.158646,2.41485.16712,3.58025.91168,2.2418,1.71362,3.148"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <clipPath id="etCEyXwfRpk9">
        <rect width="24" height="24" rx="0" ry="0" fill="#fff" />
      </clipPath>
    </g>
  </svg>
);

export default DownloadCloudIcon;
