import React from "react"
import Layout from "../components/layout"


class UrbanEncounter extends React.Component {
    constructor() {
        super()
        this.state = {
           venue: "",
           pcInvolvement: "",
           natureOfEvent: "",
           conflict: "",
           antagonist: "",
           urbanFeatures: ""

        }
    }

    clicked = () => {
        let venue = () => {
            var venueList = ["In the middle of the street",
                "In a public plaza",
                "Down a side alley",
                "Inside a local business",
                "Next to or in a public park",
                "At a mass-transit station"];
        
            let k = Math.floor(Math.random() *6);
            let output = venueList[k];
            this.setState({venue: output})
        }
    
        let pcInvolvement = () => {
            var involvementList = ["A sympathetic participant appeals to them",
                "Ways around it are all dangerous/blocked",
                "It happens immediately around them",
                "A valuable thing looks snatchable amid it",
                "A participant offers a reward for help",
                "Someone mistakenly involves the PCs in it",
                "The seeming way out just leads deeper in",
                "Responsibility is somehow pinned on them"]
    
            let k = Math.floor(Math.random() *8);
            let output = involvementList[k]
            this.setState({pcInvolvement: output})
    }
    
    // <input type= "button" onClick="backGroundRoll()"><input>
    
    let natureOfEvent = () => {
        var eventList = ["A parade or festival is being disrupted",
            "Innocents are being assaulted",
            "An establishment is being robbed",
            "A disturbance over local politics happens",
            "Someone is being blamed for something",
            "Fires or building collapses are happening",
            "A medical emergency is happening",
            "Someone’s trying to cheat the PCs",
            "A vehicle accident is happening",
            "A religious ceremony is being disrupted"];
    
        let k = Math.floor(Math.random() *10);
        let output = eventList[k];
        this.setState({natureOfEvent: output})
    }
    
    let conflict = () => {
        var conflictList = ["Money, extortion, payment due, debts",
            "Respect, submission to social authority",
            "Grudges, ethnic resentment, gang payback",
            "Politics, religion, or other ideology"];
        
        let k = Math.floor(Math.random() *4);
        let output = conflictList[k]
        this.setState({conflict: output})
    }
    
    let antagonist = () => {
        var antagonistList = ["A local bully and their thugs",
            "A ruthless political boss and their zealots",
            "Violent criminals",
            "Religious fanatics",
            "A blisteringly obnoxious offworlder",
            "Corrupt or over-strict government official",
            "A mob of intoxicated locals",
            "A ranting demagogue and their followers",
            "A stupidly bull-headed local grandee",
            "A very capable assassin or strong-arm",
            "A self-centered local scion of power",
            "A confused foreigner or backwoodsman"];
    
        let k = Math.floor(Math.random() *12);
        let output = antagonistList[k];
        this.setState({antagonist: output})
    }
    
    let urbanFeatures = () => {
        var urbanFeaturesList = ["Heavy traffic running through the place",
            "Music blaring at deafening volumes",
            "Two groups present that detest each other",
            "Large delivery taking place right there",
            "Swarm of schoolkids or feral youth",
            "Insistent soapbox preacher here",
            "Several pickpockets working the crowd",
            "A kiosk is tipping over and spilling things",
            "Streetlights are out or visibility is low",
            "A cop patrol is here and reluctant to act",
            "PC-hostile reporters are recording here",
            "Someone’s trying to sell something to PCs",
            "Feral dogs or other animals crowd here",
            "Unrelated activists are protesting here",
            "Street kids are trying to steal from the PCs",
            "GPS maps are dangerously wrong here",
            "Downed power lines are a danger here",
            "Numerous open manholes and utility holes",
            "The street’s blockaded by something",
            "Crowds so thick one can barely move"];
        
        let k = Math.floor(Math.random() *20);
        let output = urbanFeaturesList[k];
        this.setState({urbanFeatures: output})
    }
    venue();
    pcInvolvement();
    natureOfEvent();
    conflict();
    antagonist();
    urbanFeatures();
    }
    render() {
       return <div>
            <Layout>
            <h1>Click the button below to generate an urban encounter</h1>
            <button onClick={ event => this.clicked() }> Generate an urban encounter </button> 
        <p>General venue of the event: {this.state.venue}</p>    
        <p>The PC's are involved because: {this.state.pcInvolvement}</p>    
        <p>The nature of the event is: {this.state.natureOfEvent}</p>    
        <p>The conflict is about: {this.state.conflict}</p>    
        <p>The antagonists involved: {this.state.antagonist}</p>    
        <p>Revelant urban features: {this.state.urbanFeatures}</p> 
            </Layout>
        </div>
    }
}

export default UrbanEncounter