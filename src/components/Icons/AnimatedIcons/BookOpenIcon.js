import { forwardRef } from "react";

const BookOpenIcon = forwardRef((props, ref) => (
  <svg
    id="exdUbshiIXS1"
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
        #exdUbshiIXS1 {
            pointer-events: all
        }

        #exdUbshiIXS1${props.event} #exdUbshiIXS4 {
            animation-name: exdUbshiIXS4__m, exdUbshiIXS4_c_o;
            animation-duration: ${props.speed || "1.290"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes exdUbshiIXS4__m {
            0% {
                d: path('M9,18C9,18,2,18,2,18L2,3C2,3,8,3,8,3C11.1213,3,12,5.93913,12,7L12,17');
                animation-timing-function: cubic-bezier(0.56, 0, 1, 1)
            }

            13.953488% {
                d: path('M10.790169,18.405554C10,17.518248,8,17,8,17L8,2C8,2,9,1.826808,10.251708,2.7286C11.503416,3.630392,12,5.93913,12,7L12,17');
                animation-timing-function: cubic-bezier(0, 0, 0.5, 1)
            }

            24.806202% {
                d: path('M14.354125,18.06222C15.926055,17.378134,19.85211,16.846579,19.85211,16.846579L19.85211,1.737331C19.85211,1.737331,17,2.185278,15.118093,2.958362C12.693809,3.954253,12,6.096619,12,7L12,17')
            }

            31.007752% {
                d: path('M15,18C17.1213,18,22,18,22,18L22,3C22,3,18.681645,3,16,3C12.681645,3,12,6.12516,12,7L12,17')
            }

            100% {
                d: path('M15,18C17.1213,18,22,18,22,18L22,3C22,3,18.681645,3,16,3C12.681645,3,12,6.12516,12,7L12,17')
            }
        }

        @keyframes exdUbshiIXS4_c_o {
            0% {
                opacity: 1
            }

            37.209302% {
                opacity: 1
            }

            44.186047% {
                opacity: 0
            }

            100% {
                opacity: 0
            }
        }

        #exdUbshiIXS1${props.event} #exdUbshiIXS5 {
            animation-name: exdUbshiIXS5__m, exdUbshiIXS5_c_o;
            animation-duration: ${props.speed || "1.290"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes exdUbshiIXS5__m {
            0% {
                d: path('M9,18C9,18,2,18,2,18L2,3C2,3,8,3,8,3C11.1213,3,12,5.93913,12,7L12,17')
            }

            23.255814% {
                d: path('M9,18C9,18,2,18,2,18L2,3C2,3,8,3,8,3C11.1213,3,12,5.93913,12,7L12,17');
                animation-timing-function: cubic-bezier(0.56, 0, 1, 1)
            }

            37.209302% {
                d: path('M10.790169,18.405554C10,17.518248,8,17,8,17L8,2C8,2,9,1.826808,10.251708,2.7286C11.503416,3.630392,12,5.93913,12,7L12,17');
                animation-timing-function: cubic-bezier(0, 0, 0.5, 1)
            }

            48.062016% {
                d: path('M14.354125,18.06222C15.926055,17.378134,19.85211,16.846579,19.85211,16.846579L19.85211,1.737331C19.85211,1.737331,17,2.185278,15.118093,2.958362C12.693809,3.954253,12,6.096619,12,7L12,17')
            }

            54.263566% {
                d: path('M15,18C17.1213,18,22,18,22,18L22,3C22,3,18.681645,3,16,3C12.681645,3,12,6.12516,12,7L12,17')
            }

            100% {
                d: path('M15,18C17.1213,18,22,18,22,18L22,3C22,3,18.681645,3,16,3C12.681645,3,12,6.12516,12,7L12,17')
            }
        }

        @keyframes exdUbshiIXS5_c_o {
            0% {
                opacity: 1
            }

            60.465116% {
                opacity: 1
            }

            67.44186% {
                opacity: 0
            }

            100% {
                opacity: 0
            }
        }

        #exdUbshiIXS1${props.event} #exdUbshiIXS6 {
            animation-name: exdUbshiIXS6__m, exdUbshiIXS6_c_o;
            animation-duration: ${props.speed || "1.290"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes exdUbshiIXS6__m {
            0% {
                d: path('M9,18C9,18,2,18,2,18L2,3C2,3,8,3,8,3C11.1213,3,12,5.93913,12,7L12,17')
            }

            33.333333% {
                d: path('M9,18C9,18,2,18,2,18L2,3C2,3,8,3,8,3C11.1213,3,12,5.93913,12,7L12,17');
                animation-timing-function: cubic-bezier(0.56, 0, 1, 1)
            }

            47.286822% {
                d: path('M10.790169,18.405554C10,17.518248,8,17,8,17L8,2C8,2,9,1.826808,10.251708,2.7286C11.503416,3.630392,12,5.93913,12,7L12,17');
                animation-timing-function: cubic-bezier(0, 0, 0.5, 1)
            }

            58.139535% {
                d: path('M14.354125,18.06222C15.926055,17.378134,19.85211,16.846579,19.85211,16.846579L19.85211,1.737331C19.85211,1.737331,17,2.185278,15.118093,2.958362C12.693809,3.954253,12,6.096619,12,7L12,17')
            }

            64.341085% {
                d: path('M15,18C17.1213,18,22,18,22,18L22,3C22,3,18.681645,3,16,3C12.681645,3,12,6.12516,12,7L12,17')
            }

            100% {
                d: path('M15,18C17.1213,18,22,18,22,18L22,3C22,3,18.681645,3,16,3C12.681645,3,12,6.12516,12,7L12,17')
            }
        }

        @keyframes exdUbshiIXS6_c_o {
            0% {
                opacity: 1
            }

            70.542636% {
                opacity: 1
            }

            77.51938% {
                opacity: 0
            }

            100% {
                opacity: 0
            }
        }
        `}
      </style>
    ) : (
      ""
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
));

export default BookOpenIcon;
