import './App.css';
import img1 from './img1/448900891_1517987695798721_5092223408935416574_n.jpg';
import img3 from './img1/15-removebg-preview.png';
import img4 from './img1/c214fb4710f7b69beafc9d094aaa058b-removebg-preview.png';
import img5 from './img1/10.png';
import img2 from './img1/12.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export function Content() {
    return (
        <>
            <div className="Section1">
                <div className="img1">
                    <img className="img" src={img1} alt="ảnh 1" />
                </div>
                <div className="item3">
                    <div className="img2">
                        <img src={img2} alt="ảnh 2" />
                    </div>
                    <div className="img3">
                        <img src={img3} alt="ảnh 3" />
                    </div>
                    <div className="img4">
                        <img src={img3} alt="ảnh 3" />
                    </div>
                    {/* <div className="img5">
                        <img src={img4} alt="ảnh 4" />
                    </div>
                    <div className="img6">
                        <img src={img4} alt="ảnh 4" />
                    </div> */}
                    <div className="item3-content">
                        <div className="top text-[24px]">
                            <div className="mb-[10px]" data-aos="fade-right">Save</div>
                            <div className="mb-[10px]" data-aos="fade-left">The</div>
                            <div data-aos="fade-right">Date</div>
                        </div>
                        <div className="name text-[20px]" data-aos="fade-left">
                            QUAN GIOI & TA TRANG
                        </div>
                        <div className="invite text-[18px]" data-aos="fade-right">
                            Invite you to my wedding party!
                        </div>
                        <div className="bottom" >
                            <div className="item" data-aos="fade-right">March</div>
                            <div className="item" data-aos="fade-up">|</div>
                            <div className="item" data-aos="fade-down"> 11</div>
                            <div className="item" data-aos="fade-up">|</div>
                            <div className="item" data-aos="fade-left">Tuesday</div>
                        </div>
                        <div className="text-center text-[28px] nam" data-aos="fade-up">2025</div>
                    </div>

                </div>
            </div>
            <div className="Section2">

            </div>
        </>
    )
}