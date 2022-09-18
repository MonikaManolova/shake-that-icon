import { forwardRef } from "react";

const HeartIcon = forwardRef((props, ref) => (
  <svg
    id="ej9zosiBWGc1"
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
        #ej9zosiBWGc1 {
            pointer-events: all
        }

        #ej9zosiBWGc1${props.event} #ej9zosiBWGc2_ts {
            animation-name: ej9zosiBWGc2_ts__ts;
            animation-duration: ${props.speed || "0.900"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes ej9zosiBWGc2_ts__ts {
            0% {
                transform: translate(12px, 21.23px) scale(1, 1)
            }

            15.555556% {
                transform: translate(12px, 21.23px) scale(0.749528, 0.749528)
            }

            40% {
                transform: translate(12px, 21.23px) scale(1, 1.050891)
            }

            51.111111% {
                transform: translate(12px, 21.23px) scale(1, 1)
            }

            100% {
                transform: translate(12px, 21.23px) scale(1, 1)
            }
        }
        `}
      </style>
    ) : (
      ""
    )}
    <g id="ej9zosiBWGc2_ts" transform="translate(12,21.23) scale(1,1)">
      <path
        d="M20.84,4.60999c-.5108-.51099-1.1172-.91635-1.7846-1.19291s-1.3829-.41891-2.1054-.41891-1.4379.14235-2.1054.41891-1.2738.68192-1.7846,1.19291L12,5.66999l-1.06-1.06C9.9083,3.5783,8.50903,2.9987,7.05,2.9987s-2.85831.5796-3.89,1.61129-1.61129,2.43097-1.61129,3.89.57959,2.85831,1.61129,3.89001l1.06,1.06L12,21.23l7.78-7.78l1.06-1.06c.511-.5108.9163-1.1172,1.1929-1.7847s.4189-1.38282.4189-2.10531-.1423-1.43789-.4189-2.10535-.6819-1.27389-1.1929-1.78465v0Z"
        transform="translate(-12,-21.23)"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
));

export default HeartIcon;
