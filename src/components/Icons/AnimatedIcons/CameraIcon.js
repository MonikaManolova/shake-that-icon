import { forwardRef } from "react";

const CameraIcon = forwardRef((props, ref) => (
  <svg
    id="en5NUzfFMrG1"
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

        #en5NUzfFMrG1 {
            pointer-events: all
        }

        #en5NUzfFMrG1${props.event} #en5NUzfFMrG2_to {
            animation-name: en5NUzfFMrG2_to__to;
            animation-duration: ${props.speed || "1.260"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes en5NUzfFMrG2_to__to {
            0% {
                transform: translate(12.5px, 12px)
            }

            7.142857% {
                transform: translate(12.5px, 12px)
            }

            18.253968% {
                transform: translate(12.5px, 11px)
            }

            31.746032% {
                transform: translate(12.5px, 11px)
            }

            43.650794% {
                transform: translate(12.5px, 12px)
            }

            100% {
                transform: translate(12.5px, 12px)
            }
        }

        #en5NUzfFMrG1${props.event} #en5NUzfFMrG3 {
            animation-name: en5NUzfFMrG3__m;
            animation-duration: ${props.speed || "1.260"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes en5NUzfFMrG3__m {
            0% {
                d: path('M23,19C23,19.5304,22.7893,20.0391,22.4142,20.4142C22.0391,20.7893,21.5304,21,21,21L3,21C2.46957,21,1.96086,20.7893,1.58579,20.4142C1.21071,20.0391,1,19.5304,1,19L1,8C1,7.46957,1.21071,6.96086,1.58579,6.58579C1.96086,6.21071,2.46957,6,3,6L7,6C7,6,9,3,9,3C9,3,15,3,15,3L17,6L21,6C21.5304,6,22.0391,6.21071,22.4142,6.58579C22.7893,6.96086,23,7.46957,23,8L23,19Z')
            }

            16.666667% {
                d: path('M23,18C23,18.5304,22.7893,19.0391,22.4142,19.4142C22.0391,19.7893,21.5304,20,21,20L5,21C4.46957,21,3.96086,20.7893,3.58579,20.4142C3.21071,20.0391,3,19.5304,3,19L3,8C3,7.46957,3.21071,6.96086,3.58579,6.58579C3.96086,6.21071,4.46957,6,5,6L8.907198,5.58579C8.907198,5.58579,10.907198,3,10.907198,3C10.907198,3,15.048064,3,15.048064,3L17.048064,5L21,5C21.5304,5,22.0391,5.21071,22.4142,5.58579C22.7893,5.96086,23,6.46957,23,7L23,18Z')
            }

            41.269841% {
                d: path('M23,18C23,18.5304,22.7893,19.0391,22.4142,19.4142C22.0391,19.7893,21.5304,20,21,20L5,21C4.46957,21,3.96086,20.7893,3.58579,20.4142C3.21071,20.0391,3,19.5304,3,19L3,8C3,7.46957,3.21071,6.96086,3.58579,6.58579C3.96086,6.21071,4.46957,6,5,6L8.907198,5.58579C8.907198,5.58579,10.907198,3,10.907198,3C10.907198,3,15.048064,3,15.048064,3L17.048064,5L21,5C21.5304,5,22.0391,5.21071,22.4142,5.58579C22.7893,5.96086,23,6.46957,23,7L23,18Z')
            }

            54.761905% {
                d: path('M23,19C23,19.5304,22.7893,20.0391,22.4142,20.4142C22.0391,20.7893,21.5304,21,21,21L3,21C2.46957,21,1.96086,20.7893,1.58579,20.4142C1.21071,20.0391,1,19.5304,1,19L1,8C1,7.46957,1.21071,6.96086,1.58579,6.58579C1.96086,6.21071,2.46957,6,3,6L7,6C7,6,9,3,9,3C9,3,15,3,15,3L17,6L21,6C21.5304,6,22.0391,6.21071,22.4142,6.58579C22.7893,6.96086,23,7.46957,23,8L23,19Z')
            }

            100% {
                d: path('M23,19C23,19.5304,22.7893,20.0391,22.4142,20.4142C22.0391,20.7893,21.5304,21,21,21L3,21C2.46957,21,1.96086,20.7893,1.58579,20.4142C1.21071,20.0391,1,19.5304,1,19L1,8C1,7.46957,1.21071,6.96086,1.58579,6.58579C1.96086,6.21071,2.46957,6,3,6L7,6C7,6,9,3,9,3C9,3,15,3,15,3L17,6L21,6C21.5304,6,22.0391,6.21071,22.4142,6.58579C22.7893,6.96086,23,7.46957,23,8L23,19Z')
            }
        }

        #en5NUzfFMrG1${props.event} #en5NUzfFMrG4 {
            animation-name: en5NUzfFMrG4__m;
            animation-duration: ${props.speed || "1.260"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes en5NUzfFMrG4__m {
            0% {
                d: path('M16.0625,21.000002L3,21C2.46957,21,1.96086,20.7893,1.58579,20.4142C1.21071,20.0391,1,19.5304,1,19L1,8C1,7.46957,1.21071,6.96086,1.58579,6.58579C1.96086,6.21071,2.46957,6,3,6L7,6C7,6,9,3,9,3C9,3,15,3,15,3L17,6L19.918884,6')
            }

            16.666667% {
                d: path('M16.048064,20.4142L5,21C4.46957,21,3.96086,20.7893,3.58579,20.4142C3.21071,20.0391,3,19.5304,3,19L3,8C3,7.46957,3.21071,6.96086,3.58579,6.58579C3.96086,6.21071,4.46957,6,5,6L8.907198,5.58579C8.907198,5.58579,10.907198,3,10.907198,3C10.907198,3,15.048064,3,15.048064,3L17.048064,5L20,5')
            }

            41.269841% {
                d: path('M16.048064,20.4142L5,21C4.46957,21,3.96086,20.7893,3.58579,20.4142C3.21071,20.0391,3,19.5304,3,19L3,8C3,7.46957,3.21071,6.96086,3.58579,6.58579C3.96086,6.21071,4.46957,6,5,6L8.907198,5.58579C8.907198,5.58579,10.907198,3,10.907198,3C10.907198,3,15.048064,3,15.048064,3L17.048064,5L20,5')
            }

            54.761905% {
                d: path('M16.0625,21.000002L3,21C2.46957,21,1.96086,20.7893,1.58579,20.4142C1.21071,20.0391,1,19.5304,1,19L1,8C1,7.46957,1.21071,6.96086,1.58579,6.58579C1.96086,6.21071,2.46957,6,3,6L7,6C7,6,9,3,9,3C9,3,15,3,15,3L17,6L19.918884,6')
            }

            100% {
                d: path('M16.0625,21.000002L3,21C2.46957,21,1.96086,20.7893,1.58579,20.4142C1.21071,20.0391,1,19.5304,1,19L1,8C1,7.46957,1.21071,6.96086,1.58579,6.58579C1.96086,6.21071,2.46957,6,3,6L7,6C7,6,9,3,9,3C9,3,15,3,15,3L17,6L19.918884,6')
            }
        }

        #en5NUzfFMrG1${props.event} #en5NUzfFMrG4_to {
            animation-name: en5NUzfFMrG4_to__to;
            animation-duration: ${props.speed || "1.260"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes en5NUzfFMrG4_to__to {
            0% {
                transform: translate(12px, 12px)
            }

            16.666667% {
                transform: translate(11px, 12px)
            }

            41.269841% {
                transform: translate(11px, 12px)
            }

            54.761905% {
                transform: translate(12px, 12px)
            }

            100% {
                transform: translate(12px, 12px)
            }
        }

        #en5NUzfFMrG1${props.event} #en5NUzfFMrG5_to {
            animation-name: en5NUzfFMrG5_to__to;
            animation-duration: ${props.speed || "1.260"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes en5NUzfFMrG5_to__to {
            0% {
                transform: translate(12px, 13px)
            }

            16.666667% {
                transform: translate(19px, 13px)
            }

            30.15873% {
                transform: translate(18px, 13px)
            }

            46.825397% {
                transform: translate(18px, 13px)
            }

            66.666667% {
                transform: translate(12px, 13px)
            }

            100% {
                transform: translate(12px, 13px)
            }
        }

        #en5NUzfFMrG1${props.event} #en5NUzfFMrG5_ts {
            animation-name: en5NUzfFMrG5_ts__ts;
            animation-duration: ${props.speed || "1.260"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes en5NUzfFMrG5_ts__ts {
            0% {
                transform: scale(1, 1)
            }

            16.666667% {
                transform: scale(0.833503, 1)
            }

            46.825397% {
                transform: scale(0.833503, 1)
            }

            66.666667% {
                transform: scale(1, 1)
            }

            100% {
                transform: scale(1, 1)
            }
        }

        #en5NUzfFMrG1${props.event} #en5NUzfFMrG6 {
            animation-name: en5NUzfFMrG6__m, en5NUzfFMrG6_c_o;
            animation-duration: ${props.speed || "1.260"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes en5NUzfFMrG6__m {
            0% {
                d: path('M10,9L8.014955,9C4.95221,10.924362,5.074493,14.926316,8.014955,17.000364L9.999998,17')
            }

            16.666667% {
                d: path('M14.763624,9L8.014955,9C4.95221,10.924362,5.074493,14.926316,8.014955,17.000364L14.763622,17')
            }

            30.15873% {
                d: path('M13.763624,9L8.014955,9C4.95221,10.924362,5.074493,14.926316,8.014955,17.000364L13.763622,17')
            }

            46.825397% {
                d: path('M13.763624,9L8.014955,9C4.95221,10.924362,5.074493,14.926316,8.014955,17.000364L13.763622,17')
            }

            66.666667% {
                d: path('M10,9L8.014955,9C4.95221,10.924362,5.074493,14.926316,8.014955,17.000364L9.999998,17')
            }

            100% {
                d: path('M10,9L8.014955,9C4.95221,10.924362,5.074493,14.926316,8.014955,17.000364L9.999998,17')
            }
        }

        @keyframes en5NUzfFMrG6_c_o {
            0% {
                opacity: 0
            }

            7.936508% {
                opacity: 1
            }

            46.825397% {
                opacity: 1
            }

            66.666667% {
                opacity: 0
            }

            100% {
                opacity: 0
            }
        }

        #en5NUzfFMrG1${props.event} #en5NUzfFMrG6_to {
            animation-name: en5NUzfFMrG6_to__to, en5NUzfFMrG6_c_o;
            animation-duration: ${props.speed || "1.260"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes en5NUzfFMrG6_to__to {
            0% {
                transform: translate(8px, 13px)
            }

            16.666667% {
                transform: translate(10px, 13px)
            }

            46.825397% {
                transform: translate(10px, 13px)
            }

            66.666667% {
                transform: translate(8px, 13px)
            }

            100% {
                transform: translate(8px, 13px)
            }
        }
        `}
      </style>
    ) : (
      ""
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
));

export default CameraIcon;
