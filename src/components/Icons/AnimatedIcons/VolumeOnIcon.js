import { forwardRef } from "react";

const VolumeOnIcon = forwardRef((props, ref) => (
  <svg
    id="erHBPCWR5q71"
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
        #erHBPCWR5q71 {
            pointer-events: all
        }

        #erHBPCWR5q71${props.event} #erHBPCWR5q72 {
            animation-name: erHBPCWR5q72__m;
            animation-duration: ${props.speed || "0.900"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes erHBPCWR5q72__m {
            0% {
                d: path('M11,5L6,9L2,9L2,15L6,15L11,19L11,5Z')
            }

            14.444444% {
                d: path('M9,5L6,9L2,9L2,15L6,15L9,19L9,5Z')
            }

            21.111111% {
                d: path('M9,5L6,9L2,9L2,15L6,15L9,19L9,5Z')
            }

            40% {
                d: path('M12,5L6,9L2,9L2,15L6,15L12,19L12,5Z')
            }

            47.777778% {
                d: path('M11,5L6,9L2,9L2,15L6,15L11,19L11,5Z')
            }

            100% {
                d: path('M11,5L6,9L2,9L2,15L6,15L11,19L11,5Z')
            }
        }

        #erHBPCWR5q71${props.event} #erHBPCWR5q73_to {
            animation-name: erHBPCWR5q73_to__to;
            animation-duration: ${props.speed || "0.900"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes erHBPCWR5q73_to__to {
            0% {
                transform: translate(18.76895px, 12px)
            }

            14.444444% {
                transform: translate(12.76895px, 12px)
            }

            28.888889% {
                transform: translate(12.76895px, 12px)
            }

            47.777778% {
                transform: translate(19.76895px, 12px)
            }

            53.333333% {
                transform: translate(18.76895px, 12px)
            }

            100% {
                transform: translate(18.76895px, 12px)
            }
        }

        #erHBPCWR5q71${props.event} #erHBPCWR5q73_ts {
            animation-name: erHBPCWR5q73_ts__ts;
            animation-duration: ${props.speed || "0.900"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes erHBPCWR5q73_ts__ts {
            0% {
                transform: scale(1, 1)
            }

            14.444444% {
                transform: scale(0, 0);
                animation-timing-function: cubic-bezier(0.42, 0, 0.515, 1.38)
            }

            26.666667% {
                transform: scale(0, 0);
                animation-timing-function: cubic-bezier(0.42, 0, 0.515, 1.38)
            }

            45.555556% {
                transform: scale(1, 1)
            }

            100% {
                transform: scale(1, 1)
            }
        }

        #erHBPCWR5q71${props.event} #erHBPCWR5q73 {
            animation-name: erHBPCWR5q73_c_o;
            animation-duration: ${props.speed || "0.900"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes erHBPCWR5q73_c_o {
            0% {
                opacity: 1
            }

            11.111111% {
                opacity: 0
            }

            14.444444% {
                opacity: 0
            }

            26.666667% {
                opacity: 1
            }

            100% {
                opacity: 1
            }
        }

        #erHBPCWR5q71${props.event} #erHBPCWR5q74_to {
            animation-name: erHBPCWR5q74_to__to;
            animation-duration: ${props.speed || "0.900"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes erHBPCWR5q74_to__to {
            0% {
                transform: translate(18.76895px, 12px)
            }

            14.444444% {
                transform: translate(12.76895px, 12px)
            }

            26.666667% {
                transform: translate(12.76895px, 12px)
            }

            54.444444% {
                transform: translate(18.99895px, 12px)
            }

            60% {
                transform: translate(18.76895px, 12px)
            }

            100% {
                transform: translate(18.76895px, 12px)
            }
        }

        #erHBPCWR5q71${props.event} #erHBPCWR5q74_ts {
            animation-name: erHBPCWR5q74_ts__ts;
            animation-duration: ${props.speed || "0.900"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes erHBPCWR5q74_ts__ts {
            0% {
                transform: scale(1, 1)
            }

            14.444444% {
                transform: scale(0, 0)
            }

            24.444444% {
                transform: scale(0, 0)
            }

            48.888889% {
                transform: scale(1, 1)
            }

            100% {
                transform: scale(1, 1)
            }
        }

        #erHBPCWR5q71${props.event} #erHBPCWR5q74 {
            animation-name: erHBPCWR5q74_c_o;
            animation-duration: ${props.speed || "0.900"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes erHBPCWR5q74_c_o {
            0% {
                opacity: 1
            }

            11.111111% {
                opacity: 0
            }

            33.333333% {
                opacity: 0
            }

            50% {
                opacity: 1
            }

            100% {
                opacity: 1
            }
        }
        `}
      </style>
    ) : (
      ""
    )}
    <path
      id="erHBPCWR5q72"
      d="M11,5L6,9h-4v6h4l5,4v-14Z"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="erHBPCWR5q73_to" transform="translate(18.76895,12)">
      <g id="erHBPCWR5q73_ts" transform="scale(1,1)">
        <path
          id="erHBPCWR5q73"
          d="M15.54,8.46c.9373.93764,1.4639,2.2092,1.4639,3.535s-.5266,2.5974-1.4639,3.535"
          transform="translate(-18.76895,-12)"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <g id="erHBPCWR5q74_to" transform="translate(18.76895,12)">
      <g id="erHBPCWR5q74_ts" transform="scale(1,1)">
        <path
          id="erHBPCWR5q74"
          d="M19.07,4.93c1.8747,1.87528,2.9279,4.41836,2.9279,7.07s-1.0532,5.1947-2.9279,7.07"
          transform="translate(-18.76895,-12)"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
));

export default VolumeOnIcon;
