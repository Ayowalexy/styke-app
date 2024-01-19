import { SvgXml } from "react-native-svg";

export const Eye = ({color}:{color : string}) => (
    <SvgXml
        xml={`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
        <path d="M9.84546 5.45455L12.7273 8.32727V8.18182C12.7273 7.4585 12.4399 6.76481 11.9285 6.25335C11.417 5.74188 10.7233 5.45455 10 5.45455H9.84546ZM5.93636 6.18182L7.34545 7.59091C7.3 7.78182 7.27273 7.97273 7.27273 8.18182C7.27273 8.90514 7.56006 9.59883 8.07153 10.1103C8.58299 10.6218 9.27668 10.9091 10 10.9091C10.2 10.9091 10.4 10.8818 10.5909 10.8364L12 12.2455C11.3909 12.5455 10.7182 12.7273 10 12.7273C8.79447 12.7273 7.63832 12.2484 6.78588 11.3959C5.93344 10.5435 5.45455 9.38735 5.45455 8.18182C5.45455 7.46364 5.63636 6.79091 5.93636 6.18182ZM0.909091 1.15455L2.98182 3.22727L3.39091 3.63636C1.89091 4.81818 0.709091 6.36364 0 8.18182C1.57273 12.1727 5.45455 15 10 15C11.4091 15 12.7545 14.7273 13.9818 14.2364L14.3727 14.6182L17.0273 17.2727L18.1818 16.1182L2.06364 0M10 3.63636C11.2055 3.63636 12.3617 4.11526 13.2141 4.9677C14.0666 5.82013 14.5455 6.97629 14.5455 8.18182C14.5455 8.76364 14.4273 9.32727 14.2182 9.83636L16.8818 12.5C18.2455 11.3636 19.3364 9.87273 20 8.18182C18.4273 4.19091 14.5455 1.36364 10 1.36364C8.72727 1.36364 7.50909 1.59091 6.36364 2L8.33636 3.95455C8.85455 3.75455 9.40909 3.63636 10 3.63636Z" fill="${color}"/>
      </svg>`}
        width={20}
        height={16}
    />
)