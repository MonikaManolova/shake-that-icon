import { forwardRef } from "react";

const ActivityIcon = forwardRef((props, ref) => (
  <svg
    id="eBTUfD05yvr1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
    ref={ref}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    {props.is_animated ? (
      <style>
        {`
        #eBTUfD05yvr1 {
            pointer-events: all
        }

        #eBTUfD05yvr1${props.event} #eBTUfD05yvr2 {
          animation-name: eBTUfD05yvr2_s_do;
          animation-duration: ${props.speed || "1.560"}s;
          animation-fill-mode: forwards;
          animation-timing-function: linear;
          animation-direction: normal;
          animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eBTUfD05yvr2_s_do {
            0% {
                stroke-dashoffset: 0;
                animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1)
            }

            50.641026% {
                stroke-dashoffset: 48
            }

            58.333333% {
                stroke-dashoffset: 49
            }

            64.102564% {
                stroke-dashoffset: 48
            }

            96.153846% {
                stroke-dashoffset: 0
            }

            100% {
                stroke-dashoffset: 0
            }
        }
        `}
      </style>
    ) : (
      ""
    )}
    <path
      id="eBTUfD05yvr2"
      d="M22,12h-4l-3,9L9,3L6,12h-4"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="50"
    />
  </svg>
));

export default ActivityIcon;
