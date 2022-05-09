import './Header.css';
import Hamburger from "./Hamburger";
import PhoneIcon from './Phone';
export default function Header(){
    return (


<div class="header">
<div class="header-details">
  <PhoneIcon></PhoneIcon>
  <div class="header-info">
    <h2 class="grey-header">THE LAW FIRM OF</h2>
    <h1>RODERICK E SMITH</h1>
    <span class="local">KANSAS CITY, MO</span>
  </div>
  {/* <!-- hamburger menu --> */}
  <Hamburger></Hamburger>
</div>
{/* <!-- header wave -->
<!-- <svg class="header-curve" xmlns="http://www.w3.org/2000/svg" width="414.207" height="147.187" viewBox="0 0 414.207 147.187">
  <path id="Path_2" data-name="Path 2" d="M38,378.423c67.122-14.013,107.8-18.712,223.251,0s190.841-5.257,190.921-6.63,0-133.436,0-133.436L38,238.348Z" transform="translate(-38.002 -238.348)" fill="#21409d"/>
</svg> --> */}
<svg class="header-curve" xmlns="http://www.w3.org/2000/svg" width="414.207" height="125.76" viewBox="0 0 414.207 125.76">
  <path id="Path_2" dataName="Path 2" d="M38,358.031c67.122-11.973,107.8-15.988,223.251,0s190.841-4.491,190.921-5.665,0-114.011,0-114.011L38,238.348Z" transform="translate(-38.002 -238.348)" fill="#21409d"/>
</svg>

  
</div>
    );
}