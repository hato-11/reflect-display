import '../App.css';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getRandomIndex } from "../App";
import { DisplayTheme } from '../Checkin';
import { PromptContentTherapy } from '../TherapySessions/Therapy';

// Shared components for Therapy
export function REFLECTION(props) {
    return (
        <div>
            <DisplayTheme />
            <DisplayFeature />
            <Outlet/>
        </div>
    )
}

export function DisplayFeature(){
    return (
        <div className='current-feature-frame'>
            <div className='pink-ellipse'>
                <div className='current-feature-text'>reflection time</div>
            </div>
        </div>
    )
}

export function HandleBeginClickRef() {
    // const chosenTheme = 'gratitude';
    // const [refs, setRefs] = useState(() => {return []});

    // console.log('ToRandRef renders');
    // // hook only run when there is a change in refs
    // useEffect(() => {
    //     fetch('/data/reflect-reflections.json')
    //         .then(response => response.json())
    //         .then(json => {
    //             // Get array of reflection questions based on the theme
    //             let refArray = json[chosenTheme];
    //             console.log(refArray);
    //             // Generate 3 random reflection questions (with individual replacement)
    //             let randInds = [];  //to handle when randomly generated index are repeated among generations
    //             let randRefs = [];

    //             for (let i = 0; i < 3; i++) {
    //                 let index = getRandomIndex(refArray.length);
    //                 // if the index generated duplicates with one of those already in the randInds, run generator again
    //                 // while (randInds.includes(index)) {
    //                 //     index = getRandomIndex(refArray.length);
    //                 // }
    //                 console.log(refArray[index]);
    //                 randInds.push(index);
    //                 randRefs.push(refArray[index]);
    //             }
    //             console.log(randInds);
                
    //             // Update refs
    //             setRefs(randRefs);
                
    //         })
    // }, [refs]);

    // Static data: Random 3-4 quetions from 'general' in /public/reflect-reflection.json
    const generalRefs = [
        "what are your lows?",
        "what are your highs?",
        "did you set any goals recently?",
        "what is a recent lesson you've learned?",
        "what have you recently accomplished?",
        "were there any challenges you overcome today (or recently)?",
        "what are you proud of yourself for?",
        "what aspects of yourself are you grateful for today?",
        "how do you show kindness to yourself?",
        "what do you look forward to tomorrow?",
        "were there anything that didn't meet your expectations recently?",
        "what personal strengths have you used recently?",
        "what sparked joy today?"
    ];

    // Get random 3 refs
    let randInds = [];
    let randRefs = [];
    for (let i = 0; i < 3; i++) {
        let index = getRandomIndex(generalRefs.length);
        // if the index generated duplicates with one of those already in the randInds, run generator again
        while (randInds.includes(index)) {
            index = getRandomIndex(generalRefs.length);
        }

        randInds.push(index);
        randRefs.push(generalRefs[index]);
    }
    console.log(randInds);
    console.log(randRefs);

    // IMPRPOVE: May need to define their own PromptContent. Using PromptContentTherapy (including TherapyEnd) in TherapySession/Therapy.js for now
    return (
        <div>
            {PromptContentTherapy(randRefs)}
        </div>
    )

}