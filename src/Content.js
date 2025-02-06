import './App.css';
import img1 from './img1/atus.png';
import img2 from './img1/dieu-nhi-anh-tu-1-3383-removebg-preview.png';
import meo1 from './img1/meo1.png';
import meo2 from './img1/meo2.png';
import tulip1 from './img1/tulip2.png';
import tulip2 from './img1/tulip3.png';
import flowerbg from './img1/15-removebg-preview.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export function Content() {
    return (
        <>
            <div className="Section1">
                <div className='item1'>
                    <div className="img1" data-aos="zoom-out">
                        <img className="img1-1" src={img1} alt="ảnh 1" />
                    </div>
                </div>
                <div className="item3">
                    <div className='imgflower' data-aos="zoom-in">
                        <img src={flowerbg} alt='bg' />
                    </div>
                    <div className='imgflower1' data-aos="zoom-in">
                        <img src={flowerbg} alt='bg' />
                    </div>
                    <div className="item3-content1">
                        <div className="imgmeo" >
                            <img className="img" src={meo1} alt="mèo 1" />
                        </div>
                        <div className="imgtulip2" data-aos="zoom-in">
                            <img className="img" src={tulip2} alt="tulip2" />
                        </div>
                    </div>
                    <div className="item3-content">
                        <div className="imgmeo2" >
                            <img className="img" src={meo2} alt="mèo 2" />
                        </div>
                        <div className="imgtulip1" >
                            <img className="img" src={tulip1} alt="tulip2" />
                        </div>
                        <div className="top text-[26px]">
                            <div className="mb-[10px]" data-aos="fade-right">Save</div>
                            <div className="mb-[10px]" data-aos="fade-left">The</div>
                            <div data-aos="fade-right">Date</div>
                        </div>
                        <div className="name text-[14px]" data-aos="fade-left">
                            QUAN GIOI & TA TRANG
                        </div>
                        <div className="invite text-[16px]" data-aos="fade-right">
                            Invite you to my wedding party!
                        </div>
                        <div className="bottom" >
                            <div className="item" data-aos="fade-right">March</div>
                            <div className="item" data-aos="fade-up">|</div>
                            <div className="item" data-aos="fade-down"> 11</div>
                            <div className="item" data-aos="fade-up">|</div>
                            <div className="item" data-aos="fade-left">Tuesday</div>
                        </div>
                        <div className="text-center text-[16px] nam" data-aos="fade-up">2025</div>
                    </div>

                </div>
            </div>
            <div className="Section2">

            </div>
        </>
    )
}