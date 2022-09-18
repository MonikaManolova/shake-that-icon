import { forwardRef } from "react";

const CoffeeIcon = forwardRef((props, ref) => (
  <svg
    id="eHe6wRAK1Vk1"
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
        #eHe6wRAK1Vk1 {
            pointer-events: all
        }

        #eHe6wRAK1Vk1${props.event} #eHe6wRAK1Vk2_tr {
            animation-name: eHe6wRAK1Vk2_tr__tr;
            animation-duration: ${props.speed || "1.150"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eHe6wRAK1Vk2_tr__tr {
            0% {
                transform: translate(10px, 21px) rotate(0deg)
            }

            10.434783% {
                transform: translate(10px, 21px) rotate(-4deg)
            }

            19.130435% {
                transform: translate(10px, 21px) rotate(0deg)
            }

            33.913043% {
                transform: translate(10px, 21px) rotate(-4deg)
            }

            48.695652% {
                transform: translate(10px, 21px) rotate(0deg)
            }

            100% {
                transform: translate(10px, 21px) rotate(0deg)
            }
        }

        #eHe6wRAK1Vk1${props.event} #eHe6wRAK1Vk5 {
            animation-name: eHe6wRAK1Vk5__m, eHe6wRAK1Vk5_c_o;
            animation-duration: ${props.speed || "1.150"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eHe6wRAK1Vk5__m {
            0% {
                d: path('M14,1L14,4')
            }

            10.434783% {
                d: path('M14,1L14,4')
            }

            27.826087% {
                d: path('M14,1L14,2')
            }

            34.782609% {
                d: path('M14,7L14,7.695652')
            }

            54.782609% {
                d: path('M14,1.000001L14,7.695652')
            }

            61.73913% {
                d: path('M14,1L14,4')
            }

            100% {
                d: path('M14,1L14,4')
            }
        }

        @keyframes eHe6wRAK1Vk5_c_o {
            0% {
                opacity: 1
            }

            10.434783% {
                opacity: 1
            }

            27.826087% {
                opacity: 0
            }

            34.782609% {
                opacity: 0
            }

            56.521739% {
                opacity: 1
            }

            100% {
                opacity: 1
            }
        }

        #eHe6wRAK1Vk1${props.event} #eHe6wRAK1Vk6 {
            animation-name: eHe6wRAK1Vk6__m, eHe6wRAK1Vk6_c_o;
            animation-duration: ${props.speed || "1.150"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eHe6wRAK1Vk6__m {
            0% {
                d: path('M10,1L10,4')
            }

            17.391304% {
                d: path('M10,1L10,2')
            }

            24.347826% {
                d: path('M10,7L10,7.695652')
            }

            44.347826% {
                d: path('M10,1.000002L10,7.695652')
            }

            51.304348% {
                d: path('M10,1L10,4')
            }

            100% {
                d: path('M10,1L10,4')
            }
        }

        @keyframes eHe6wRAK1Vk6_c_o {
            0% {
                opacity: 1
            }

            17.391304% {
                opacity: 0
            }

            24.347826% {
                opacity: 0
            }

            46.086957% {
                opacity: 1
            }

            100% {
                opacity: 1
            }
        }

        #eHe6wRAK1Vk1${props.event} #eHe6wRAK1Vk7 {
            animation-name: eHe6wRAK1Vk7__m, eHe6wRAK1Vk7_c_o;
            animation-duration: ${props.speed || "1.150"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eHe6wRAK1Vk7__m {
            0% {
                d: path('M6,1C6,1,6,4,6,4')
            }

            19.130435% {
                d: path('M6,1C6,1,6,4,6,4')
            }

            36.521739% {
                d: path('M6,1C6,1,6,2,6,2')
            }

            43.478261% {
                d: path('M6,7C6,7,6,7.695652,6,7.695652')
            }

            63.478261% {
                d: path('M6,1C6,1,6,7.407867,6,7.407867')
            }

            70.434783% {
                d: path('M6,1C6,1,6,4,6,4')
            }

            100% {
                d: path('M6,1C6,1,6,4,6,4')
            }
        }

        @keyframes eHe6wRAK1Vk7_c_o {
            0% {
                opacity: 1
            }

            19.130435% {
                opacity: 1
            }

            36.521739% {
                opacity: 0
            }

            43.478261% {
                opacity: 0
            }

            65.217391% {
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
    <g id="eHe6wRAK1Vk2_tr" transform="translate(10,21) rotate(0)">
      <g transform="translate(-10,-21)">
        <path
          d="M18,8h1c1.0609,0,2.0783.42143,2.8284,1.17157C22.5786,9.92172,23,10.9391,23,12s-.4214,2.0783-1.1716,2.8284C21.0783,15.5786,20.0609,16,19,16h-1"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2,8h16v9c0,1.0609-.4214,2.0783-1.1716,2.8284C16.0783,20.5786,15.0609,21,14,21h-8c-1.06087,0-2.07828-.4214-2.82843-1.1716C2.42143,19.0783,2,18.0609,2,17v-9Z"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <path
      id="eHe6wRAK1Vk5"
      d="M14,1v3"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      id="eHe6wRAK1Vk6"
      d="M10,1v3"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      id="eHe6wRAK1Vk7"
      d="M6,1C6,1,6,4,6,4"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="0"
    />
  </svg>
));

export default CoffeeIcon;
