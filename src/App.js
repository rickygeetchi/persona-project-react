
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
// import PlaceHolderImg from './assets/photo-exports/placeholder.jpg';
function App() {
  return (
    <div className="App">
     <Header></Header>
     <div class="info-card" 
      style={{backgroundImage: `url(${require("./assets/photo-exports/placeholder.jpg").default})`,
      backgroundSize: 'cover',
    }}>
     
        <div class="info-card-details">
        <h3>A<span class="highlight"> Results-Focused</span> Attorney</h3>
    
    </div>
    {/* <div style={{PlaceHolderImg: `url(${PlaceHolderImg})` }}> */}
       
        
    </div>
    {/* </div> */}

    <div class="alt-info-card">

<svg class="hov-scale" xmlns="http://www.w3.org/2000/svg" width="414" height="186.878" viewBox="0 0 414 186.878">
  <path id="Path_3" data-name="Path 3" d="M0,98.537c65.527-9.661,105.239-12.9,217.944,0s195.943-5.515,196.021-6.462,0-92.075,0-92.075H0Z" transform="translate(414 103.106) rotate(180)" fill="#21409d" opacity="0.997"/>
  <path id="Path_4" data-name="Path 4" d="M38,368.661c65.527-13.056,105.239-17.434,217.944,0s195.943-7.453,196.021-8.733,0-124.431,0-124.431H38Z" transform="translate(-38.002 -187.957)" fill="#21409d" opacity="0.997"/>
  <text id="_816_514_-_7632" data-name="(816) 514 - 7632" transform="translate(84.5 99.378)" fill="#fff" stroke="#000" stroke-width="0.5" font-size="37" font-family="RobotoCondensed-Bold, Roboto Condensed" font-weight="700" letter-spacing="-0.004em">
    <a href="tel:+18165147632">
      <tspan x="0" y="0">(816) 514</tspan><tspan y="0" font-size="30"> </tspan><tspan y="0">-</tspan><tspan y="0" font-size="30"> </tspan><tspan y="0">7632</tspan>
    </a>
  </text>
  <text id="START_WITH_A_FREE_CONSULTATION_" dataName="START WITH A FREE CONSULTATION
" transform="translate(58 46.378)" fill="#cbcbcb" stroke="#707070" strokeWidth="0.25" fontSize="18" fontFamily="Roboto-Medium, Roboto" fontWeight="500"><tspan x="0" y="0" fill="#cbcbcb">START WITH A</tspan><tspan y="0" fill="#000"> </tspan><tspan y="0" fill="#fff" fontSize="19">FREE</tspan><tspan y="0" fill="#000"> </tspan><tspan y="0" fill="#cbcbcb">CONSULTATION</tspan><tspan x="0" y="25"></tspan></text>
  <text id="CONTACT_OUR_LAW_FIRM_TO_SCHEDULE_A_CONSULTATION" dataName="CONTACT OUR LAW FIRM TO SCHEDULE A CONSULTATION" transform="translate(23 138.878)" fill="#fff" stroke="#000" strokeWidth="0.25" fontSize="16" fontFamily="RobotoCondensed-Bold, Roboto Condensed" fontWeight="700" letterSpacing="-0.004em"><tspan x="0" y="0">CONTACT OUR LAW FIRM TO SCHEDULE A CONSULTATION</tspan></text>
</svg>


</div>

<div class="info-card-2">
        <q>LET ME HELP YOU <br></br> SOLVE YOUR LEGAL PROBLEMS</q>
        <button type="button" value="REQUEST A CALL BACK">REQUEST A CALL BACK</button>
    </div>


     <Footer></Footer>
    </div>
  );
}

export default App;
