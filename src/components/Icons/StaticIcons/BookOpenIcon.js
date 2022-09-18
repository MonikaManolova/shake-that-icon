const BookOpenIcon = (props) => (
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
      d="M22,3h-6c-1.0609,0-2.0783.42143-2.8284,1.17157s-1.1716,1.76756-1.1716,2.82843v14c0-.7956.3161-1.5587.8787-2.1213s1.3257-.8787,2.1213-.8787h7v-15Z"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2,3h6c1.06087,0,2.0783.42143,2.8284,1.17157s1.1716,1.76756,1.1716,2.82843v14c0-.7956-.3161-1.5587-.8787-2.1213s-1.32565-.8787-2.1213-.8787h-7L2,3Z"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      id="exdUbshiIXS4"
      d="M9,18c0,0-7,0-7,0L2,3C2,3,8,3,8,3c3.1213,0,4,2.93913,4,4v10"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      id="exdUbshiIXS5"
      d="M9,18c0,0-7,0-7,0L2,3C2,3,8,3,8,3c3.1213,0,4,2.93913,4,4v10"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      id="exdUbshiIXS6"
      d="M9,18c0,0-7,0-7,0L2,3C2,3,8,3,8,3c3.1213,0,4,2.93913,4,4v10"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BookOpenIcon;
