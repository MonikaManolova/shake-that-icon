import { forwardRef } from "react";

const ChevronRightIcon = forwardRef((props, ref) => (
  <svg
    id="eaGhQV1wrzI1"
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
        #eaGhQV1wrzI1 {
            pointer-events: all
        }

        #eaGhQV1wrzI1${props.event} #eaGhQV1wrzI3 {
            animation-name: eaGhQV1wrzI3__m;
            animation-duration: ${props.speed || "1.000"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eaGhQV1wrzI3__m {
            0% {
                d: path('M9,18L15,12L9,6');
                animation-timing-function: cubic-bezier(0.42, 0, 0.48, 1.31)
            }

            20% {
                d: path('M9,18L7.570577,12L9,6');
                animation-timing-function: cubic-bezier(0.42, 0, 0.48, 1.31)
            }

            31% {
                d: path('M9,18L9,12L9,6')
            }

            55% {
                d: path('M9,18L16,12L9,6')
            }

            65% {
                d: path('M9,18L14,12L9,6')
            }

            73% {
                d: path('M9,18L15,12L9,6')
            }

            100% {
                d: path('M9,18L15,12L9,6')
            }
        }

        #eaGhQV1wrzI1${props.event} #eaGhQV1wrzI3_to {
          animation-name: eaGhQV1wrzI3_to__to;
          animation-duration: ${props.speed || "1.000"}s;
          animation-fill-mode: forwards;
          animation-timing-function: linear;
          animation-direction: normal;
          animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eaGhQV1wrzI3_to__to {
            0% {
                transform: translate(9px, 12px)
            }

            31% {
                transform: translate(9px, 12px)
            }

            44% {
                transform: translate(9px, 13px)
            }

            55% {
                transform: translate(9px, 12px)
            }

            100% {
                transform: translate(9px, 12px)
            }
        }
        `}
      </style>
    ) : (
      ""
    )}
    <g transform="matrix(0-1 1 0-3 21)">
      <g id="eaGhQV1wrzI3_to" transform="translate(9,12)">
        <path
          id="eaGhQV1wrzI3"
          d="M9,18l6-6L9,6"
          transform="rotate(90) translate(-9,-12)"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="20"
        />
      </g>
    </g>
  </svg>
));

export default ChevronRightIcon;
