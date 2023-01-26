import { PropsSVG } from "../../@types/imgSvg";

export function Coracao({ fill, stroke}: PropsSVG) {
    return(
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
            fill={fill} stroke="none">
            <path d="M37 192 c-29 -31 -20 -60 33 -115 l50 -52 50 52 c32 33 50 60 50 76
            0 44 -59 74 -88 45 -9 -9 -15 -9 -24 0 -18 18 -53 15 -71 -6z"/>
            </g>
        </svg>
    )
}