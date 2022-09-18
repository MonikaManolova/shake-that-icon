const CameraIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g id="en5NUzfFMrG2_to" transform="translate(12.5,12)">
      <g transform="translate(-12.5,-12)">
        <path
          id="en5NUzfFMrG3"
          d="M23,19c0,.5304-.2107,1.0391-.5858,1.4142s-.8838.5858-1.4142.5858h-18c-.53043,0-1.03914-.2107-1.41421-.5858s-.58579-.8838-.58579-1.4142L1,8c0-.53043.21071-1.03914.58579-1.41421s.88378-.58579,1.41421-.58579h4C7,6,9,3,9,3s6,0,6,0l2,3h4c.5304,0,1.0391.21071,1.4142.58579s.5858.88378.5858,1.41421v11Z"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="en5NUzfFMrG4_to" transform="translate(12,12)">
          <path
            id="en5NUzfFMrG4"
            d="M16.0625,21.000002L3,21c-.53043,0-1.03914-.2107-1.41421-.5858s-.58579-.8838-.58579-1.4142L1,8c0-.53043.21071-1.03914.58579-1.41421s.88378-.58579,1.41421-.58579h4C7,6,9,3,9,3s6,0,6,0l2,3h2.918884"
            transform="translate(-12,-12)"
            fill="none"
            stroke={props.color || "#FFFFFF"}
            strokeWidth={props.strokeWidth || "2"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g id="en5NUzfFMrG5_to" transform="translate(12,13)">
          <g id="en5NUzfFMrG5_ts" transform="scale(1,1)">
            <path
              d="M12,17c2.2091,0,4-1.7909,4-4s-1.7909-4-4-4-4,1.7909-4,4s1.79086,4,4,4Z"
              transform="translate(-12,-13)"
              fill="none"
              stroke={props.color || "#FFFFFF"}
              strokeWidth={props.strokeWidth || "2"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <g id="en5NUzfFMrG6_to" transform="translate(8,13)">
          <path
            id="en5NUzfFMrG6"
            d="M10,9h-1.985045c-3.062745,1.924362-2.940462,5.926316,0,8.000364L9.999998,17"
            transform="translate(-5.763624,-13)"
            opacity="0"
            fill="none"
            stroke={props.color || "#FFFFFF"}
            strokeWidth={props.strokeWidth || "2"}
          />
        </g>
      </g>
    </g>
  </svg>
);

export default CameraIcon;
