import { CardButton } from "./Buttons"
import { Widget } from "./Widget"
import { Affirmations, RestWidget, Settings } from "./Restmode"
import './App.css';

import { Link } from 'react-router-dom';

export function HOME(props) {
    return (
        <div>
            <Affirmations/>
            <RestWidget/>
            <Settings/>
            <Features/>
            <Exit/>
        </div>
    )
}

// Components appear in the homescreen 
export function Features(props) {
    return (
        <div className="feature-col vert-flex">
            <Link to="/reflection">
                <button className="feature-button">
                    reflection time
                </button>
            </Link>

            <Link to="/therapy">
                <button className="feature-button">
                    exposure therapy
                </button>
            </Link>      
            
            <Link to="/breathing">
                <button className="feature-button">
                    breathing exercise
                </button>
            </Link> 

        </div>
    )
}

export function Exit(props) {
    return (
        <Link to="/home">
            <div className="exit glassmorphism">
                <span className="material-symbols-outlined hort-flex">logout</span>
            </div>
        </Link>
    )
}


