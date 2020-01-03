import React from "react"
import Layout from "../components/layout"


class OneRollPatron extends React.Component {
    constructor() {
        super()
        this.state = {
            trust: "",
            challengeOfJob: "",
            counterForce: "",
            eagerness: "",
            nonCashRewards: "",
            complications: ""
        }
    }

    clicked = () => {
        let trust = () => {
            var trustList = ["They intend to totally screw the PCs",
            "They won't pay unless forced to do so",
            "They'll pay slowly or reluctantly",
            "They'll pay, but discount for mistakes",
            "They'll pay without quibilling",
            "They'll pay more than they promised"];
            
                let k = Math.floor(Math.random() *6);
                let output = trustList[k];
                this.setState({trust: output})
        }
        
        let challengeOfJob = () => {
            var challengeList = ["Kill somebody who might deserve it",
                "Kidnap someone dangerous",
                "Steal a well-guarded object",
                "Arson or sabotage on a place",
                "Get proof of some misdeed",
                "Protect someone from an immediate threat",
                "Transport someone through danger",
                "Guard an object being transported"];
            
                let k = Math.floor(Math.random() *8);
                let output = challengeList[k];
               this.setState({challengeOfJob: output})
        }
        
        let counterForce = () => {
            var counterForceList = ["A treacherous employer or subordinate",
                "An open and known enemy of the patron",
                "Official governmental meddling",
                "An unknown rival of the patron",
                "The macguffin itself opposes them",
                "Very short time frame allowed",
                "The job is spectacularly illegal",
                "A participant would profit by their failure",
                "The patron is badly wrong about a thing",
                "The locals are against the pat"];
            
                let k = Math.floor(Math.random() *10);
                let output = counterForceList[k];

                this.setState({counterForce: output})
        }
        
        let eagerness = () => {
            var eagernessList = ["Cautious, but can be convinced to hire",
                "Willing to promise standard rates",
                "Eager, willing to offer a bonus",
                "Desperate, might offer what they can't pay"];
            
                let k = Math.floor(Math.random() *4);
                let output = eagernessList[k];

                this.setState({eagerness: output})
                
        }
        
        let nonCashRewards = () => {
            var nonCashRewardsList = ["Government official favors owed",
                "Property in the area",
                "An item very valuable on another world",
                "Pretech mod components",
                "Useful pretech artifact",
                "Information the PCs need",
                "Membership in a powerful group",
                "Black market access",
                "Use of restricted facilities or shipyards",
                "Shares in a profitable business",
                "Maps to a hidden or guarded treasure",
                "Illegal but valuable weapons or gear"];
            
                let k = Math.floor(Math.random() *12);
                let output = nonCashRewardsList[k];

                this.setState({nonCashRewards: output})
                
        }
        
        let complications = () => {
            var complicationsList = ["An ambush is laid somewhere",
                "PC involvement is leaked to the enemy",
                "The patron gives faulty aid somehow",
                "Failing would be extremely unhealthy",
                "The job IDs them as allies of a local faction",
                "The macguffin is physically dangerous",
                "An important location is hard to get into",
                "Succeeding would be morally distasteful",
                "A supposed ally is very unhelpful or stupid",
                "The patron badly misunderstood the PCs",
                "The job changes suddenly partway through",
                "An unexpected troublemaker is involved",
                "Critical gear will fail partway through",
                "An unrelated accident complicates things",
                "Payment comes in a hard-to-handle form",
                "Someone is turning traitor on the patron",
                "A critical element has suddenly moved",
                "Payment is in avidly-pursued hot goods",
                "The true goal is a subsidiary part of the job",
                "No complications, its just as it seems to be"];
            
                let k = Math.floor(Math.random() *20);
                let output = complicationsList[k];

                this.setState({complications: output})
                
        }
        
        trust();
        challengeOfJob();
        counterForce();
        eagerness();
        nonCashRewards();
        complications();

    }
    render() {
       return <div>
            <Layout>
            <h1>Click The Button Below To Obtain a Simple NPC</h1>
            <button onClick={ event => this.clicked() }> Generate a simple NPC </button> 
        <p>Patron trustworthiness {this.state.trust}</p>    
        <p>Basic challenge of job: {this.state.challengeOfJob}</p>    
        <p>Counter Force: {this.state.counterForce}</p>    
        <p>Patron eagerness to hire: {this.state.eagerness}</p>    
        <p>Potential non-cash rewards: {this.state.nonCashRewards}</p>    
        <p>Complications to the job: {this.state.complications}</p> 
            </Layout>
        </div>
    }
}

export default OneRollPatron