import { CardButton } from "./Buttons"
import { Widget } from "./Widget"

// Components appeared in restmode of the mirror
export function OkButton(props) {
    return (
        <button>Click Ok to Start</button>
    )
}

export function Affirmations(props) {
    const msg = "My baby can feel my peace." 
    return (
        <div>
            {msg}
        </div>
    )
}

function Clock(props) {
    //API
    return(
        <div>
            Clock
        </div>
    )
}
function Weather(props) {
    //API
    return (
        <div>
            Weather
        </div>
    )

}

export function RestWidget(props) {
    return (
        <div id='rest-widget' class='widget'>
            <Clock/>
            <Weather/>
            <CardButton imgSrc="/public/balance_theme.png" content="balance (Test for CardButton)"/>
        </div>
    )
}