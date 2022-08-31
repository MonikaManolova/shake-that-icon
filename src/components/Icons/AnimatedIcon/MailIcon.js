import { forwardRef } from "react";

const MailIcon = forwardRef((props, ref) => (
  <svg
    id="elUXhik4LrG1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    heigt="24"
    ref={ref}
    {...props}
  >
    <style>
      {`
        #elUXhik4LrG1 {
            pointer-events: all
        }

        #elUXhik4LrG1:hover #elUXhik4LrG2_to {
            animation: elUXhik4LrG2_to__to 1000ms linear 1 normal forwards
        }

        @keyframes elUXhik4LrG2_to__to {
            0% {
                transform: translate(12px, 12px)
            }

            10% {
                transform: translate(12px, 13.871267px);
                animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1)
            }

            34% {
                transform: translate(12px, 10.506968px);
                animation-timing-function: cubic-bezier(0.42, 0, 1, 1)
            }

            46% {
                transform: translate(12px, 12px)
            }

            100% {
                transform: translate(12px, 12px)
            }
        }

        #elUXhik4LrG1:hover #elUXhik4LrG4 {
            animation: elUXhik4LrG4__m 1000ms linear 1 normal forwards
        }

        @keyframes elUXhik4LrG4__m {
            0% {
                d: path('M22,6L12,13L2,6')
            }

            25% {
                d: path('M22,6L12,13L2,6')
            }

            43% {
                d: path('M22,6L12,9L2,6')
            }

            54% {
                d: path('M22,6L12,13L2,6')
            }

            64% {
                d: path('M22,6L12,12L2,6')
            }

            72% {
                d: path('M22,6L12,13L2,6')
            }

            100% {
                d: path('M22,6L12,13L2,6')
            }
        }
    `}
    </style>
    <g id="elUXhik4LrG2_to" transform="translate(12,12)">
      <g transform="translate(-12,-12)">
        <path
          d="M4,4h16c1.1,0,2,.9,2,2v12c0,1.1-.9,2-2,2h-16c-1.1,0-2-.9-2-2L2,6c0-1.1.9-2,2-2Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="elUXhik4LrG4"
          d="M22,6L12,13L2,6"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
));

export default MailIcon;
