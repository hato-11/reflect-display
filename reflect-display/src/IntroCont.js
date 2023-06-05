import './App.css';
import {RestWidget} from './Restmode';
import { Link } from 'react-router-dom';

export function INTRO_CONT(){
    return (
        <div>
            <RestWidget />
            <Heading />
            <SubHeading />
            <AppOverview />
            <ContinueButton />
        </div>
    )
}

export function Heading(){
    return(
        <div className="head-intro-frame">
            <div className='intro-guide-text'>
                i'm here to help you take some <br />
                <div className='orange-text'>time for yourself</div>            </div>
        </div>
    )
}

export function SubHeading(){
    return(
        <div className="subhead-intro-frame">
            what you do is up to you 
        </div>
    )
}

export function AppOverview(){
    return(
        <div className="container">
            <div className="row-1">
                <img className="col-1" src="breathing.png" alt="breathing exercise" />
                <div className="col-2-breathing">
                    <div className="col-2-title">breathing exercise</div>
                    <div className="col-2-text">take a minute to center your breathing</div>
                </div>
            </div>
            <div className="row-2">
                <img className="col-1" src="reflection.png" alt="breathing exercise" />
                <div className="col-2-reflection">
                    <div className="col-2-title">reflection time</div>
                    <div className="col-2-text">reflect on your day with thoughtful prompts</div>
                </div>
            </div>
            <div className="row-3">
                <img className="col-1" src="therapy.png" alt="breathing exercise" />
                <div className="col-2-therapy">
                    <div className="col-2-title col-2-title-therapy">mirror exposure therapy</div>
                    <div className="col-2-text-therapy">build a better relationship with your body using clinically-proven techniques</div>
                </div>
            </div>
        </div> 
    )
}

export function ContinueButton(props) {
    return (
        <Link to="/home">
            <button className="bottom-middle-btn">
                <div className="button-outer-frame">
                    <div className="button-inner-frame">
                        <div className='pink-btn-content'>
                            <div className='button-text'>continue</div>
                        </div>
                    </div>
                </div>
            </button>
        </Link>   
    )
}