import { forwardRef } from "react";

const PinIcon = forwardRef((props, ref) => (
  <svg
    id="eTJLCE5RnfS1"
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
        #eTJLCE5RnfS1 {
            pointer-events: all
        }

        #eTJLCE5RnfS1${props.event} #eTJLCE5RnfS2_ts {
            animation-name: eTJLCE5RnfS2_ts__ts;
            animation-duration: ${props.speed || "0.930"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eTJLCE5RnfS2_ts__ts {
            0% {
                transform: translate(12px, 23px) scale(1, 1)
            }

            6.451613% {
                transform: translate(12px, 23px) scale(0.681107, 0.68111)
            }

            23.655914% {
                transform: translate(12px, 23px) scale(0.971228, 0.971228)
            }

            46.236559% {
                transform: translate(12px, 23px) scale(0.908888, 0.94)
            }

            60.215054% {
                transform: translate(12px, 23px) scale(1, 1)
            }

            100% {
                transform: translate(12px, 23px) scale(1, 1)
            }
        }

        #eTJLCE5RnfS1${props.event} #eTJLCE5RnfS4_to {
            animation-name: eTJLCE5RnfS4_to__to;
            animation-duration: ${props.speed || "0.930"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eTJLCE5RnfS4_to__to {
            0% {
                transform: translate(12px, 10px)
            }

            23.655914% {
                transform: translate(12px, 7.527084px)
            }

            33.333333% {
                transform: translate(12px, 7.256699px)
            }

            51.612903% {
                transform: translate(12px, 10px)
            }

            100% {
                transform: translate(12px, 10px)
            }
        }

        #eTJLCE5RnfS1${props.event} #eTJLCE5RnfS4_ts {
            animation-name: eTJLCE5RnfS4_ts__ts;
            animation-duration: ${props.speed || "0.930"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eTJLCE5RnfS4_ts__ts {
            0% {
                transform: scale(1, 1)
            }

            12.903226% {
                transform: scale(0.334298, 0.334298)
            }

            32.258065% {
                transform: scale(0.616717, 0.906584)
            }

            48.387097% {
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
    <g id="eTJLCE5RnfS2_ts" transform="translate(12,23) scale(1,1)">
      <g transform="translate(-12,-23)">
        <path
          d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-2.38695.94821-4.67613,2.63604-6.36396C7.32387,1.94821,9.61305,1,12,1s4.6761.94821,6.364,2.63604s2.636,3.97701,2.636,6.36396Z"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="eTJLCE5RnfS4_to" transform="translate(12,10)">
          <g id="eTJLCE5RnfS4_ts" transform="scale(1,1)">
            <path
              d="M12,13c1.6569,0,3-1.3431,3-3s-1.3431-3-3-3-3,1.34315-3,3s1.3431,3,3,3Z"
              transform="translate(-12,-10)"
              fill="none"
              stroke={props.color || "#FFFFFF"}
              strokeWidth={props.strokeWidth || "2"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
));

export default PinIcon;
