const UmbrellaIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g id="e3ua7J4DkMT2_to" transform="translate(11.960185,12)">
      <path
        id="e3ua7J4DkMT2"
        d="M18,19c0,.7956-.3161,1.5587-.8787,2.1213s-1.3257.8787-2.1213.8787-1.5587-.3161-2.1213-.8787-.8787-1.3257-.8787-2.1213v-7m11,0c-.2612-2.73643-1.533-5.27725-3.567-7.12634C17.399,3.02458,14.7489,2,12,2s-5.431172,1.02458-7.465162,2.87366-3.273638,4.38991-3.534838,7.12634c0,0,4.931581,0,10.124947,0C16.900584,12,23,12,23,12Z"
        transform="translate(-12,-12)"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default UmbrellaIcon;
