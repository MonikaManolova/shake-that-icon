import { forwardRef } from "react";

const BellIcon = forwardRef((props, ref) => (
  <svg
    id="e27vHnjJEKB1"
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
        #e27vHnjJEKB1 {
            pointer-events: all
        }

        #e27vHnjJEKB1${props.event} #e27vHnjJEKB2_tr {
          animation-name: e27vHnjJEKB2_tr__tr;
          animation-duration: ${props.speed || "1.150"}s;
          animation-fill-mode: forwards;
          animation-timing-function: linear;
          animation-direction: normal;
          animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes e27vHnjJEKB2_tr__tr {
            0% {
                transform: translate(12px, 2px) rotate(0deg)
            }

            14.782609% {
                transform: translate(12px, 2px) rotate(-20deg)
            }

            26.956522% {
                transform: translate(12px, 2px) rotate(30deg)
            }

            46.956522% {
                transform: translate(12px, 2px) rotate(-20deg)
            }

            58.26087% {
                transform: translate(12px, 2px) rotate(0deg)
            }

            100% {
                transform: translate(12px, 2px) rotate(0deg)
            }
        }

        #e27vHnjJEKB1${props.event} #e27vHnjJEKB4_tr {
          animation-name: e27vHnjJEKB4_tr__tr;
          animation-duration: ${props.speed || "1.150"}s;
          animation-fill-mode: forwards;
          animation-timing-function: linear;
          animation-direction: normal;
          animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes e27vHnjJEKB4_tr__tr {
            0% {
                transform: translate(12px, 2px) rotate(0deg)
            }

            6.086957% {
                transform: translate(12px, 2px) rotate(7deg)
            }

            18.26087% {
                transform: translate(12px, 2px) rotate(-9deg)
            }

            27.826087% {
                transform: translate(12px, 2px) rotate(15deg)
            }

            37.391304% {
                transform: translate(12px, 2px) rotate(-7deg)
            }

            49.565217% {
                transform: translate(12px, 2px) rotate(-16deg)
            }

            57.391304% {
                transform: translate(12px, 2px) rotate(10deg)
            }

            65.217391% {
                transform: translate(12px, 2px) rotate(0deg)
            }

            100% {
                transform: translate(12px, 2px) rotate(0deg)
            }
        }
        `}
      </style>
    ) : (
      ""
    )}
    <g id="e27vHnjJEKB2_tr" transform="translate(12,2) rotate(0)">
      <g transform="translate(-12,-2)">
        <path
          d="M18,8c0-1.5913-.6321-3.11742-1.7574-4.24264C15.1174,2.63214,13.5913,2,12,2s-3.11742.63214-4.24264,1.75736C6.63214,4.88258,6,6.4087,6,8c0,7-3,9-3,9h18c0,0-3-2-3-9Z"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="e27vHnjJEKB4_tr" transform="translate(12,2) rotate(0)">
          <path
            d="M13.73,21c-.1758.3031-.4282.5547-.7318.7295s-.6478.267-.9982.267-.6946-.0921-.9982-.267-.556-.4264-.7318-.7295"
            transform="translate(-12,-2)"
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

export default BellIcon;
