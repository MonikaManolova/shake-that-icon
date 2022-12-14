import { forwardRef } from "react";

const WatchIcon = forwardRef((props, ref) => (
  <svg
    id="eFzrfbCo2y61"
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
        #eFzrfbCo2y61 {
            pointer-events: all
        }

        #eFzrfbCo2y61${props.event} #eFzrfbCo2y63_tr {
            animation-name: eFzrfbCo2y63_tr__tr;
            animation-duration: ${props.speed || "1.070"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eFzrfbCo2y63_tr__tr {
            0% {
                transform: translate(12px, 12px) rotate(0deg)
            }

            33.64486% {
                transform: translate(12px, 12px) rotate(0deg)
            }

            43.925234% {
                transform: translate(12px, 12px) rotate(20deg)
            }

            56.074766% {
                transform: translate(12px, 12px) rotate(0deg)
            }

            100% {
                transform: translate(12px, 12px) rotate(0deg)
            }
        }

        #eFzrfbCo2y61${props.event} #eFzrfbCo2y64_tr {
            animation-name: eFzrfbCo2y64_tr__tr;
            animation-duration: ${props.speed || "1.070"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eFzrfbCo2y64_tr__tr {
            0% {
                transform: translate(12px, 12px) rotate(0deg)
            }

            9.345794% {
                transform: translate(12px, 12px) rotate(0deg)
            }

            42.056075% {
                transform: translate(12px, 12px) rotate(380deg)
            }

            52.336449% {
                transform: translate(12px, 12px) rotate(350deg)
            }

            57.009346% {
                transform: translate(12px, 12px) rotate(360deg)
            }

            100% {
                transform: translate(12px, 12px) rotate(360deg)
            }
        }

        #eFzrfbCo2y61${props.event} #eFzrfbCo2y65 {
            animation-name: eFzrfbCo2y65__m, eFzrfbCo2y65_c_o;
            animation-duration: ${props.speed || "1.070"}s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
            animation-direction: normal;
            animation-iteration-count: ${props.iteration_count || 1};
        }

        @keyframes eFzrfbCo2y65__m {
            0% {
                d: path('M16.51,17.35L16.16,21.18C16.1149,21.6786,15.8845,22.1423,15.5142,22.4792C15.1439,22.8162,14.6607,23.002,14.16,23L9.83,23C9.32932,23.002,8.8461,22.8162,8.4758,22.4792C8.1055,22.1423,7.87505,21.6786,7.83,21.18L7.48,17.35M7.49,6.65L7.84,2.82C7.8849,2.32308,8.11393,1.86088,8.48211,1.52415C8.8503,1.18742,9.33105,1.00047,9.83,0.999999L14.18,0.999999C14.6807,0.997968,15.1639,1.1838,15.5342,1.52077C15.9045,1.85775,16.1349,2.32136,16.18,2.82L16.53,6.65')
            }

            13.084112% {
                d: path('M16.51,17.35L16.16,18.501819C16.1149,19.000419,15.8845,19.464119,15.5142,19.801019C15.1439,20.138019,14.6607,20.323819,14.16,20.321819L9.83,20.321819C9.32932,20.323819,8.8461,20.138019,8.4758,19.801019C8.1055,19.464119,7.87505,19.000419,7.83,18.501819L7.48,17.35M7.49,6.65L7.84,5.721878C7.8849,5.224958,8.11393,4.762758,8.48211,4.426028C8.8503,4.089298,9.33105,3.902348,9.83,3.901877L14.18,3.901877C14.6807,3.899846,15.1639,4.085678,15.5342,4.422648C15.9045,4.759628,16.1349,5.223238,16.18,5.721878L16.53,6.65')
            }

            42.056075% {
                d: path('M16.51,17.35L16.16,21.18C16.1149,21.6786,15.8845,22.1423,15.5142,22.4792C15.1439,22.8162,14.6607,23.002,14.16,23L9.83,23C9.32932,23.002,8.8461,22.8162,8.4758,22.4792C8.1055,22.1423,7.87505,21.6786,7.83,21.18L7.48,17.35M7.49,6.65L7.84,2.82C7.8849,2.32308,8.11393,1.86088,8.48211,1.52415C8.8503,1.18742,9.33105,1.00047,9.83,0.999999L14.18,0.999999C14.6807,0.997968,15.1639,1.1838,15.5342,1.52077C15.9045,1.85775,16.1349,2.32136,16.18,2.82L16.53,6.65')
            }

            100% {
                d: path('M16.51,17.35L16.16,21.18C16.1149,21.6786,15.8845,22.1423,15.5142,22.4792C15.1439,22.8162,14.6607,23.002,14.16,23L9.83,23C9.32932,23.002,8.8461,22.8162,8.4758,22.4792C8.1055,22.1423,7.87505,21.6786,7.83,21.18L7.48,17.35M7.49,6.65L7.84,2.82C7.8849,2.32308,8.11393,1.86088,8.48211,1.52415C8.8503,1.18742,9.33105,1.00047,9.83,0.999999L14.18,0.999999C14.6807,0.997968,15.1639,1.1838,15.5342,1.52077C15.9045,1.85775,16.1349,2.32136,16.18,2.82L16.53,6.65')
            }
        }

        @keyframes eFzrfbCo2y65_c_o {
            0% {
                opacity: 1
            }

            13.084112% {
                opacity: 0
            }

            27.102804% {
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
    <path
      d="M12,19c3.866,0,7-3.134,7-7s-3.134-7-7-7-7,3.13401-7,7s3.13401,7,7,7Z"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="eFzrfbCo2y63_tr" transform="translate(12,12) rotate(0)">
      <path
        d="M12,12l1.5,1.5"
        transform="translate(-12,-12)"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <g id="eFzrfbCo2y64_tr" transform="translate(12,12) rotate(0)">
      <path
        d="M12,9v3"
        transform="translate(-12,-12)"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <path
      id="eFzrfbCo2y65"
      d="M16.51,17.35l-.35,3.83c-.0451.4986-.2755.9623-.6458,1.2992s-.8535.5228-1.3542.5208h-4.33c-.50068.002-.9839-.1838-1.3542-.5208s-.60075-.8006-.6458-1.2992l-.35-3.83m.01-10.7l.35-3.83c.0449-.49692.27393-.95912.64211-1.29585s.84894-.52368,1.34789-.524151h4.35c.5007-.002031.9839.183801,1.3542.520771s.6007.80059.6458,1.29923l.35,3.83"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

export default WatchIcon;
