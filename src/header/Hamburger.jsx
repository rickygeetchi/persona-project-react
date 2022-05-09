export default function Hamburger(){
    return(
        <svg class="hamburger hov-scale" xmlns="http://www.w3.org/2000/svg" width="57.326" height="37.108" viewBox="0 0 57.326 37.108">
        <defs>
          <filter id="Line_3" x="0" y="16.108" width="57.326" height="21" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feFlood floodOpacity="0.161"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
          </filter>
        </defs>
        <g id="hamburger" transform="translate(9 1.5)">
          <line id="Line_1" dataName="Line 1" x2="28" y2="0.054" fill="none" stroke="#000" strokeWidth="3"/>
          <line id="Line_2" dataName="Line 2" x2="32" transform="translate(0 11.054)" fill="none" stroke="#000" strokeWidth="3"/>
          <g transform="matrix(1, 0, 0, 1, -9, -1.5)" filter="url(#Line_3)">
            <line id="Line_3-2" dataName="Line 3" x2="39.326" transform="translate(9 23.61)" fill="none" stroke="#000" strokeWidth="3"/>
          </g>
        </g>
      </svg>
    );
}