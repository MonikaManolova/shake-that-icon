import { forwardRef } from "react";

const MapIcon = forwardRef((props, ref) => (
  <svg
    id="evQKj9MOwIz1"
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
        #evQKj9MOwIz1 {
            pointer-events: all
        }

        #evQKj9MOwIz1${props.event} #evQKj9MOwIz3 {
          animation-name: evQKj9MOwIz3__m;
          animation-duration: ${props.speed || "1.200"}s;
          animation-fill-mode: forwards;
          animation-timing-function: linear;
          animation-direction: normal;
          animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes evQKj9MOwIz3__m {
            0% {
                d: path('M1,6L1,22L8,18L16,22L23,18L23,2L16,6L8,2L1,6Z')
            }

            15.833333% {
                d: path('M12,4L12,20.209629L12,20.209629L12,20.209629L12,20.294901L12,4L12,4L12,4L12,4Z');
                animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1)
            }

            45.833333% {
                d: path('M1,6L1,22L8,18L16,22L23,18L23,2L16,6L8,2L1,6Z')
            }

            59.166667% {
                d: path('M1,6L1,22L8,18L16,22L22,18L22,2L16,6L8,2L1,6Z')
            }

            76.666667% {
                d: path('M1,6L1,22L8,18L16,22L23,18L23,2L16,6L8,2L1,6Z')
            }

            100% {
                d: path('M1,6L1,22L8,18L16,22L23,18L23,2L16,6L8,2L1,6Z')
            }
        }

        #evQKj9MOwIz1${props.event} #evQKj9MOwIz4_to {
          animation-name: evQKj9MOwIz4_to__to;
          animation-duration: ${props.speed || "1.200"}s;
          animation-fill-mode: forwards;
          animation-timing-function: linear;
          animation-direction: normal;
          animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes evQKj9MOwIz4_to__to {
            0% {
                transform: translate(16px, 14px)
            }

            15.833333% {
                transform: translate(12px, 12px);
                animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1)
            }

            45.833333% {
                transform: translate(16px, 14px)
            }

            100% {
                transform: translate(16px, 14px)
            }
        }

        #evQKj9MOwIz1${props.event} #evQKj9MOwIz5_to {
          animation-name: evQKj9MOwIz5_to__to;
          animation-duration: ${props.speed || "1.200"}s;
          animation-fill-mode: forwards;
          animation-timing-function: linear;
          animation-direction: normal;
          animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes evQKj9MOwIz5_to__to {
            0% {
                transform: translate(8px, 10px)
            }

            15.833333% {
                transform: translate(12px, 12px);
                animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1)
            }

            45.833333% {
                transform: translate(8px, 10px)
            }

            100% {
                transform: translate(8px, 10px)
            }
        }
        `}
      </style>
    ) : (
      ""
    )}
    <g>
      <path
        id="evQKj9MOwIz3"
        d="M1,6v16l7-4l8,4l7-4v-16L16,6L8,2L1,6Z"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="evQKj9MOwIz4_to" transform="translate(16,14)">
        <path
          d="M16,6v16"
          transform="translate(-16,-14)"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g id="evQKj9MOwIz5_to" transform="translate(8,10)">
        <path
          d="M8,2v16"
          transform="translate(-8,-10)"
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

export default MapIcon;
