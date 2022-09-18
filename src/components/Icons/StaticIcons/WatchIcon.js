const WatchIcon = (props) => (
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
      d="M12,19c3.866,0,7-3.134,7-7s-3.134-7-7-7-7,3.13401-7,7s3.13401,7,7,7Z"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="eFzrfbCo2y63_tr" transform="translate(12,12) rotate(0)">
      <path
        d="M12,12l1.5,1.5"
        transform="translate(-12,-12)"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <g id="eFzrfbCo2y64_tr" transform="translate(12,12) rotate(0)">
      <path
        d="M12,9v3"
        transform="translate(-12,-12)"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <path
      id="eFzrfbCo2y65"
      d="M16.51,17.35l-.35,3.83c-.0451.4986-.2755.9623-.6458,1.2992s-.8535.5228-1.3542.5208h-4.33c-.50068.002-.9839-.1838-1.3542-.5208s-.60075-.8006-.6458-1.2992l-.35-3.83m.01-10.7l.35-3.83c.0449-.49692.27393-.95912.64211-1.29585s.84894-.52368,1.34789-.524151h4.35c.5007-.002031.9839.183801,1.3542.520771s.6007.80059.6458,1.29923l.35,3.83"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default WatchIcon;
