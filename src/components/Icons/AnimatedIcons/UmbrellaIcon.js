import { forwardRef } from "react";

const UmbrellaIcon = forwardRef((props, ref) => (
  <svg
    id="e3ua7J4DkMT1"
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
        #e3ua7J4DkMT1 {
            pointer-events: all
        }

        #e3ua7J4DkMT1${props.event} #e3ua7J4DkMT2 {
            animation-name: e3ua7J4DkMT2__m;
            animation-duration: ${props.speed || "1.260"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes e3ua7J4DkMT2__m {
            0% {
                d: path('M18,19C18,19.7956,17.6839,20.5587,17.1213,21.1213C16.5587,21.6839,15.7956,22,15,22C14.2044,22,13.4413,21.6839,12.8787,21.1213C12.3161,20.5587,12,19.7956,12,19L12,12M23,12C22.7388,9.26357,21.467,6.72275,19.433,4.87366C17.399,3.02458,14.7489,2,12,2C9.25114,2,6.568828,3.02458,4.534838,4.87366C2.500838,6.72275,1.2612,9.26357,1,12C1,12,5.931581,12,11.124947,12C16.900584,12,23,12,23,12Z');
                animation-timing-function: cubic-bezier(0, 0, 0.33, 1)
            }

            24.603175% {
                d: path('M18,19C18,19.7956,17.6839,20.5587,17.1213,21.1213C16.5587,21.6839,15.7956,22,15,22C14.2044,22,13.4413,21.6839,12.8787,21.1213C12.3161,20.5587,12,19.7956,12,19L12,12M18,16C17.7388,13.26357,16.692798,9.243556,15.411909,6.87366C14.13102,4.503764,12,2,12,2C12,2,9.8839,4.425114,8.534838,6.87366C7.185776,9.322206,6.2612,13.26357,6,16C6,16,9.318366,12,12,12C15.261286,12,18,16,18,16Z');
                animation-timing-function: cubic-bezier(0.625, 0.005, 1, 1)
            }

            43.650794% {
                d: path('M18,19C18,19.7956,17.6839,20.5587,17.1213,21.1213C16.5587,21.6839,15.7956,22,15,22C14.2044,22,13.4413,21.6839,12.8787,21.1213C12.3161,20.5587,12,19.7956,12,19L12,12M23,11C22.7388,8.26357,21.467,5.72275,19.433,3.87366C17.399,2.02458,14.7489,1,12,1C9.25114,1,6.568828,2.02458,4.534838,3.87366C2.500838,5.72275,1.2612,8.26357,1,11C1,11,5.931581,12,11.124947,12C16.900584,12,23,11,23,11Z');
                animation-timing-function: cubic-bezier(0, 0, 0.555, 1)
            }

            60.31746% {
                d: path('M18,19C18,19.7956,17.6839,20.5587,17.1213,21.1213C16.5587,21.6839,15.7956,22,15,22C14.2044,22,13.4413,21.6839,12.8787,21.1213C12.3161,20.5587,12,19.7956,12,19L12,12M23,12C22.7388,9.26357,21.467,6.72275,19.433,4.87366C17.399,3.02458,14.7489,2,12,2C9.25114,2,6.568828,3.02458,4.534838,4.87366C2.500838,6.72275,1.2612,9.26357,1,12C1,12,5.931581,12,11.124947,12C16.900584,12,23,12,23,12Z')
            }

            100% {
                d: path('M18,19C18,19.7956,17.6839,20.5587,17.1213,21.1213C16.5587,21.6839,15.7956,22,15,22C14.2044,22,13.4413,21.6839,12.8787,21.1213C12.3161,20.5587,12,19.7956,12,19L12,12M23,12C22.7388,9.26357,21.467,6.72275,19.433,4.87366C17.399,3.02458,14.7489,2,12,2C9.25114,2,6.568828,3.02458,4.534838,4.87366C2.500838,6.72275,1.2612,9.26357,1,12C1,12,5.931581,12,11.124947,12C16.900584,12,23,12,23,12Z')
            }
        }

        #e3ua7J4DkMT1${props.event} #e3ua7J4DkMT2_to {
            animation-name: e3ua7J4DkMT2_to__to;
            animation-duration: ${props.speed || "1.260"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes e3ua7J4DkMT2_to__to {
            0% {
                transform: translate(11.960185px, 12px)
            }

            24.603175% {
                transform: translate(11.960185px, 11.488773px)
            }

            39.68254% {
                transform: translate(11.960185px, 13px);
                animation-timing-function: cubic-bezier(0, 0, 0.485, 1)
            }

            59.52381% {
                transform: translate(11.960185px, 12px)
            }

            100% {
                transform: translate(11.960185px, 12px)
            }
        }
        `}
      </style>
    ) : (
      ""
    )}
    <g id="e3ua7J4DkMT2_to" transform="translate(11.960185,12)">
      <path
        id="e3ua7J4DkMT2"
        d="M18,19c0,.7956-.3161,1.5587-.8787,2.1213s-1.3257.8787-2.1213.8787-1.5587-.3161-2.1213-.8787-.8787-1.3257-.8787-2.1213v-7m11,0c-.2612-2.73643-1.533-5.27725-3.567-7.12634C17.399,3.02458,14.7489,2,12,2s-5.431172,1.02458-7.465162,2.87366-3.273638,4.38991-3.534838,7.12634c0,0,4.931581,0,10.124947,0C16.900584,12,23,12,23,12Z"
        transform="translate(-12,-12)"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
));

export default UmbrellaIcon;
