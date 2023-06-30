import './webFooter.css'
import paymentimage from './images/6-footer/visa.png';
import socialmedia from './images/6-footer/social-media.png';
import whitecat from './images/6-footer/white-cat.png';
import whitelogo from './images/00-logos/2.png';
import gingercat from './images/6-footer/gingercat.png';


const WebFooter = () => {
    return (
        <div className="mainDiv">
<section className='web-footer'>

    <div ClassName= 'ginger-cat'>
    <img src={gingercat}
                width={325}
                height={475}
                alt= 'ginger cat'
    />
    </div>
        
    <div className = 'web-information'>
        <div className = 'white-logo'>
            <img 
            src={whitelogo}
            width={150}
            height={150}
            alt= 'white logo'
            />
            
        </div>   
        <div className= 'web-footer-1'>
            <h3>CALL US</h3>
            <p>0161 432 5678</p>
            <h3>ADDRESS</h3>
            <p>123 Anywhere St.</p>
            <p>Macclesfield SK9 CAT</p>
        </div>
        
        {/* <div className= 'web-footer-2'>
            <h3 ClassName= 'f2.1'>PRIVACY STATEMENT</h3>
            <h3 ClassName= 'f2.2'>T&C'S</h3>
        </div> */}
        <div className="veryBottom">
        <div className= 'web-footer-3'>
            <img src={paymentimage}
                        width={200}
                        height={70}
                        alt= 'white logo'
                        />

        <div className = 'web-footer-4'>
            <img src={socialmedia}></img>
        </div>
        </div>
        
        </div>

    </div>

        <div className='white-cat'>
            <img src={whitecat}
                        width={345}
                        height={520}
                        alt= 'white cat'
                        />
            </div>

</section>
</div>
            




    );
  };
  




export default WebFooter;