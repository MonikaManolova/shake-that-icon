import { forwardRef } from "react";

const FlagIcon = forwardRef((props, ref) => (
  <svg
    id="e4592zZkjVY1"
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
        #e4592zZkjVY1 {
            pointer-events: all
        }

        #e4592zZkjVY1${props.event} #e4592zZkjVY3 {     
          animation-name: e4592zZkjVY3__m;
          animation-duration: ${props.speed || "1.250"}s;
          animation-fill-mode: forwards;
          animation-timing-function: linear;
          animation-direction: normal;
          animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes e4592zZkjVY3__m {
            0% {
                d: path('M4,15C4,15,5,14,8,14C11,14,13,16,16,16C19,16,20,15,20,15L20,3C20,3,19,4,16,4C13,4,11,2,8,2C5,2,4,3,4,3L4,15Z')
            }

            13.6% {
                d: path('M4,15C4,15,4.975448,15.596549,8,16C11.024552,16.403451,13.015262,16.642336,16,16C18.984738,15.357664,20,15,20,15L20,3C20,3,19.10418,3.222296,16,4C12.89582,4.777704,10.666224,4.618447,8,4C5.333776,3.381553,4,3,4,3L4,15Z')
            }

            32% {
                d: path('M4,15C4,15,5.174519,15.980756,8,15C10.825481,14.019244,13.214333,12.98142,15.961513,13.99071C18.708693,15,20,15,20,15L20,3C20,3,18.828135,2.46848,15.961513,1.99071C13.094891,1.51294,10.546782,2.897147,8,3.702721C5.453218,4.508295,4,3,4,3L4,15Z')
            }

            35.2% {
                d: path('M4,15C4,15,5.186316,15.771265,8,14.851852C10.813684,13.932439,13.155349,12.957532,15.97331,13.908132C18.79127,14.858733,20,15,20,15L20,3C20,3,18.88122,2.403598,15.97331,1.908132C13.065399,1.412667,10.549436,2.919512,8,3.450466C5.450564,3.98142,4,3,4,3L4,15Z')
            }

            53.6% {
                d: path('M4,15C4,15,5.254147,14.566689,8,14C10.745853,13.433311,12.816191,12.820173,16.041141,13.433311C19.266091,14.046449,20,15,20,15L20,3C20,3,19.186462,2.030524,16.041141,1.433311C12.89582,0.836098,10.228268,1.433311,8,2C5.771732,2.566689,4,3,4,3L4,15Z')
            }

            80.8% {
                d: path('M4,15C4,15,5,14,8,14C11,14,13,16,16,16C19,16,20,15,20,15L20,3C20,3,19,4,16,4C13,4,11,2,8,2C5,2,4,3,4,3L4,15Z')
            }

            100% {
                d: path('M4,15C4,15,5,14,8,14C11,14,13,16,16,16C19,16,20,15,20,15L20,3C20,3,19,4,16,4C13,4,11,2,8,2C5,2,4,3,4,3L4,15Z')
            }
        }
        `}
      </style>
    ) : (
      ""
    )}
    <path
      d="M4,22v-7"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      id="e4592zZkjVY3"
      d="M4,15c0,0,1-1,4-1s5,2,8,2s4-1,4-1v-12c0,0-1,1-4,1s-5-2-8-2-4,1-4,1v12Z"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

export default FlagIcon;
