import { forwardRef } from "react";

const MicIcon = forwardRef((props, ref) => (
  <svg
    id="ed1JF6G9rDH1"
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
        #ed1JF6G9rDH1 {
            pointer-events: all
        }

        #ed1JF6G9rDH1${props.event} #ed1JF6G9rDH4 {
            animation-name: ed1JF6G9rDH4__m;
            animation-duration: ${props.speed || "1.810"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes ed1JF6G9rDH4__m {
            0% {
                d: path('M12,1C11.2044,1,10.4413,1.31607,9.87868,1.87868C9.31607,2.44129,9,3.20435,9,4L9,12C9,12.7956,9.31607,13.5587,9.87868,14.1213C10.4413,14.6839,11.2044,15,12,15C12.7956,15,13.5587,14.6839,14.1213,14.1213C14.6839,13.5587,15,12.7956,15,12L15,4C15,3.20435,14.6839,2.44129,14.1213,1.87868C13.5587,1.31607,12.7956,1,12,1L12,1Z');
                animation-timing-function: cubic-bezier(0.42, 0, 0.2, 1.34)
            }

            25.414365% {
                d: path('M12,7C11.2044,7,10.4413,7.31607,9.87868,7.87868C9.31607,8.44129,9,9.20435,9,10L9,12C9,12.7956,9.31607,13.5587,9.87868,14.1213C10.4413,14.6839,11.2044,15,12,15C12.7956,15,13.5587,14.6839,14.1213,14.1213C14.6839,13.5587,15,12.7956,15,12L15,10C15,9.20435,14.6839,8.44129,14.1213,7.87868C13.5587,7.31607,12.7956,7,12,7L12,7Z')
            }

            66.298343% {
                d: path('M12,7C11.2044,7,10.4413,7.31607,9.87868,7.87868C9.31607,8.44129,9,9.20435,9,10L9,12C9,12.7956,9.31607,13.5587,9.87868,14.1213C10.4413,14.6839,11.2044,15,12,15C12.7956,15,13.5587,14.6839,14.1213,14.1213C14.6839,13.5587,15,12.7956,15,12L15,10C15,9.20435,14.6839,8.44129,14.1213,7.87868C13.5587,7.31607,12.7956,7,12,7L12,7Z');
                animation-timing-function: cubic-bezier(0.42, 0, 0.2, 1.34)
            }

            83.977901% {
                d: path('M12,1C11.2044,1,10.4413,1.31607,9.87868,1.87868C9.31607,2.44129,9,3.20435,9,4L9,12C9,12.7956,9.31607,13.5587,9.87868,14.1213C10.4413,14.6839,11.2044,15,12,15C12.7956,15,13.5587,14.6839,14.1213,14.1213C14.6839,13.5587,15,12.7956,15,12L15,4C15,3.20435,14.6839,2.44129,14.1213,1.87868C13.5587,1.31607,12.7956,1,12,1L12,1Z')
            }

            100% {
                d: path('M12,1C11.2044,1,10.4413,1.31607,9.87868,1.87868C9.31607,2.44129,9,3.20435,9,4L9,12C9,12.7956,9.31607,13.5587,9.87868,14.1213C10.4413,14.6839,11.2044,15,12,15C12.7956,15,13.5587,14.6839,14.1213,14.1213C14.6839,13.5587,15,12.7956,15,12L15,4C15,3.20435,14.6839,2.44129,14.1213,1.87868C13.5587,1.31607,12.7956,1,12,1L12,1Z')
            }
        }

        #ed1JF6G9rDH1${props.event} #ed1JF6G9rDH6_to {
            animation-name: ed1JF6G9rDH6_to__to;
            animation-duration: ${props.speed || "1.810"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes ed1JF6G9rDH6_to__to {
            0% {
                transform: translate(12px, 8.571384px)
            }

            26.519337% {
                transform: translate(12px, 8.571384px);
                animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1)
            }

            44.751381% {
                transform: translate(12px, 3.064131px)
            }

            100% {
                transform: translate(12px, 3.064131px)
            }
        }

        #ed1JF6G9rDH1${props.event} #ed1JF6G9rDH6 {
            animation-name: ed1JF6G9rDH6_c_o;
            animation-duration: ${props.speed || "1.810"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes ed1JF6G9rDH6_c_o {
            0% {
                opacity: 0
            }

            32.596685% {
                opacity: 0
            }

            41.436464% {
                opacity: 1
            }

            44.751381% {
                opacity: 1
            }

            49.723757% {
                opacity: 0
            }

            100% {
                opacity: 0
            }
        }

        #ed1JF6G9rDH1${props.event} #ed1JF6G9rDH7_to {
            animation-name: ed1JF6G9rDH7_to__to;
            animation-duration: ${props.speed || "1.810"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes ed1JF6G9rDH7_to__to {
            0% {
                transform: translate(12px, 8.571384px)
            }

            40.883978% {
                transform: translate(12px, 8.571384px);
                animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1)
            }

            56.906077% {
                transform: translate(12px, 4.301209px)
            }

            100% {
                transform: translate(12px, 4.301209px)
            }
        }

        #ed1JF6G9rDH1${props.event} #ed1JF6G9rDH7 {
            animation-name: ed1JF6G9rDH7_c_o;
            animation-duration: ${props.speed || "1.810"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes ed1JF6G9rDH7_c_o {
            0% {
                opacity: 0
            }

            45.856354% {
                opacity: 0
            }

            56.353591% {
                opacity: 1
            }

            58.563536% {
                opacity: 1
            }

            64.088398% {
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
      d="M8,23h8"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12,19v4"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      id="ed1JF6G9rDH4"
      d="M12,1c-.7956,0-1.5587.31607-2.12132.87868C9.31607,2.44129,9,3.20435,9,4v8c0,.7956.31607,1.5587.87868,2.1213s1.32572.8787,2.12132.8787s1.5587-.3161,2.1213-.8787.8787-1.3257.8787-2.1213v-8c0-.79565-.3161-1.55871-.8787-2.12132s-1.3257-.87868-2.1213-.87868v0Z"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19,10v2c0,1.8565-.7375,3.637-2.0503,4.9497s-3.0932,2.0503-4.9497,2.0503-3.63699-.7375-4.94975-2.0503C5.7375,15.637,5,13.8565,5,12v-2"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="ed1JF6G9rDH6_to" transform="translate(12,8.571384)">
      <path
        id="ed1JF6G9rDH6"
        d="M7,4.030924c0,0,1.592738-1.722446,5-1.722446s5.014661,1.722446,5.014661,1.722446"
        transform="translate(-12,-4.030924)"
        opacity="0"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
      />
    </g>
    <g id="ed1JF6G9rDH7_to" transform="translate(12,8.571384)">
      <path
        id="ed1JF6G9rDH7"
        d="M8,4.030924c0,0,1-1.722446,4-1.722446s4,1.722446,4,1.722446"
        transform="translate(-12,-4.030924)"
        opacity="0"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
      />
    </g>
  </svg>
));

export default MicIcon;
