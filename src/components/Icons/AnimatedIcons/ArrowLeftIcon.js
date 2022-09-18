import { forwardRef } from "react";

const ArrowLeftIcon = forwardRef((props, ref) => (
  <svg
    id="eqYziWDQfhr1"
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
        #eqYziWDQfhr1 {
            pointer-events: all
        }

        #eqYziWDQfhr1${props.event} #eqYziWDQfhr3 {
            animation-name: eqYziWDQfhr3_s_do;
            animation-duration: ${props.speed || "1.300"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eqYziWDQfhr3_s_do {
            0% {
                stroke-dashoffset: 0
            }

            22.307692% {
                stroke-dashoffset: 16
            }

            42.307692% {
                stroke-dashoffset: 16
            }

            71.538462% {
                stroke-dashoffset: 0
            }

            100% {
                stroke-dashoffset: 0
            }
        }

        #eqYziWDQfhr1${props.event} #eqYziWDQfhr4 {
            animation-name: eqYziWDQfhr4__m;
            animation-duration: ${props.speed || "1.300"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eqYziWDQfhr4__m {
            0% {
                d: path('M12,5L19,12L12,19')
            }

            15.384615% {
                d: path('M12,5L19,12L12,19')
            }

            34.615385% {
                d: path('M15.924218,8.924214L19,12L15.964718,15.035295')
            }

            57.692308% {
                d: path('M15.924218,8.924214L19,12L15.964718,15.035295')
            }

            69.230769% {
                d: path('M12,5L19,12L12,19')
            }

            100% {
                d: path('M12,5L19,12L12,19')
            }
        }

        #eqYziWDQfhr1${props.event} #eqYziWDQfhr4_to {
            animation-name: eqYziWDQfhr4_to__to;
            animation-duration: ${props.speed || "1.300"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eqYziWDQfhr4_to__to {
            0% {
                transform: translate(19px, 12px)
            }

            14.615385% {
                transform: translate(19px, 12px);
                animation-timing-function: cubic-bezier(0.42, 0, 0.45, 1.35)
            }

            35.384615% {
                transform: translate(10.616273px, 12px)
            }

            41.538462% {
                transform: translate(11px, 12px);
                animation-timing-function: cubic-bezier(0.42, 0, 0.45, 1.35)
            }

            64.615385% {
                transform: translate(19px, 12px)
            }

            100% {
                transform: translate(19px, 12px)
            }
        }

        #eqYziWDQfhr1${props.event} #eqYziWDQfhr4_ts {
            animation-name: eqYziWDQfhr4_ts__ts;
            animation-duration: ${props.speed || "1.300"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eqYziWDQfhr4_ts__ts {
            0% {
                transform: scale(1, 1)
            }

            62.307692% {
                transform: scale(1, 1)
            }

            69.230769% {
                transform: scale(1.1, 1.1);
                animation-timing-function: cubic-bezier(0.535, 0, 0.45, 1.35)
            }

            76.923077% {
                transform: scale(1, 1)
            }

            100% {
                transform: scale(1, 1)
            }
        }
        `}
      </style>
    ) : (
      ""
    )}
    <g transform="matrix(-1 0 0-1 24 24)">
      <path
        id="eqYziWDQfhr3"
        d="M5,12h14"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="20"
      />
      <g id="eqYziWDQfhr4_to" transform="translate(19,12)">
        <g id="eqYziWDQfhr4_ts" transform="scale(1,1)">
          <path
            id="eqYziWDQfhr4"
            d="M12,5l7,7-7,7"
            transform="translate(-19,-12)"
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
));

export default ArrowLeftIcon;
