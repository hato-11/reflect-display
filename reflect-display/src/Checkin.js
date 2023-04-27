import './App.css';

import { Link } from "react-router-dom"
import { RestWidget } from './Restmode';

// Carousel 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components appeared in the daily checkin of the mirror

export function CHECKIN(props) {
    return (
        <div>
            <DisplayTheme />
            <Greetings/>
            <Carousel />
            <Skip/>
        </div>
    )
}

export function DisplayTheme(){
    return (
        <div className="theme-widget hort-flex">
            <div className="theme-widget-label">monthly intention:</div>
            <div className="theme-frame">
                <div className="theme-text">gratitude</div>
            </div>
        </div>
    )
}

function Greetings(props) {
    return (
        <div className="affirmation-frame hort-flex">
            <div className="affirmation-text">hello avery, how are you doing, really?</div>
        </div>
    )
}

function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3, 
      vertical: true
    };
  
    return (
      <Slider {...settings} className="checkin-col">
        <button> <img className="checkin-card" src="/checkin/happy.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/inspired.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/focused.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/calm.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/fulfilled.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/grateful.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/anxious.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/frustrated.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/fearful.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/sad.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/exhausted.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/confused.png" /> </button>
      </Slider>
    );
  }
  
export function Skip(props) {
    return (
        <Link to="/home">
            <button className="bottom-middle-btn button-outer-frame">
                <div className="button-inner-frame">
                    <div className='button-text'>not now</div>
                </div>
            </button>
        </Link>
    )
}