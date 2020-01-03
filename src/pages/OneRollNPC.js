import React from "react"
import Layout from "../components/layout"

class OneRollNPC extends React.Component {
    constructor(){
        super();
        this.state = {
            backGround: "",
            society: "",
            biggestProblem: "",
            age: "",
            greatestDesire: "",
            obviousTrait: ""
        }

    }

    clicked = () => {
        let backGround = () => {
            var backGroundList = [ 
            ' The local under class or poorest natives ',
            ' Common laborers or cube workers ', 
            ' Aspiring bourgeoise or upper class ', 
            ' The elite of this society ', 
            ' Minority or foreigners; ', //roll 1d4
            ' Offworlders or exotics; ']; //roll 1d4
        
            let rollDice = (numberOfDice) => {
                return Math.floor(Math.random() * numberOfDice);
            }
        
            let k = rollDice(6);
            let output = backGroundList[k];
            
            if ((output === backGroundList[4]) || (output === backGroundList[5])) {
                let v = rollDice(4);
                let newOutput = backGroundList[v];
                let newAndOld = output + newOutput;
                this.setState({backGround: newAndOld})
                
            }
            else {
                this.setState({backGround: output})
            }
        }


        let society = () => {
            var societyRollList = [
            'Criminal, thug, thief, swindler',
            'Menial, cleaner, retail worker, servant',
            'Unskilled heavy labor, porter, construction',
            'Skilled trade, electrician, mechanic, pilot',
            'Idea worker, programmer, writer',
            'Merchant, business owner, trader, banker',
            'Official, bureaucrat, courtier, clerk',
            'Military, soldier, enforcer, law officer',
            ]
        
            let k = Math.floor(Math.random() *8);
            let output = societyRollList[k]

            this.setState({society: output})
        }

        let biggestProblem = () => {
            var biggestProblemList = [
            'They have significant debt or money woes',
            'A loved one is in trouble; reroll for it',
            'Romantic failure with a desired person',
            'Drug or behavioral addiction',
            'Their superior dislikes or resents them',
            'They have a persistent sickness',
            'They hate their job or life situation',
            'Someone dangerous is targeting them',
            'They are pursuing a disastrous purpose',
            'They have no problems worth mentioning',
            ];
        
            let k = Math.floor(Math.random() *10);
            let output = biggestProblemList[k]

            this.setState({biggestProblem: output})
        }

        let age = () => {
            var ageList = [
            'Unusually young or old for their role',
            'Young adult',
            'Mature prime',
            'Middle-aged or elderly'];
        
            let k = Math.floor(Math.random() *4);
            let output = ageList[k];

            this.setState({age: output})
        }

        let greatestDesire = () => {
            var greatestDesireList = [
            'They want a particular romantic partner',
             'They want money for them or a loved one',
             'They want a promotion in their job',
             'They want answers about a past trauma',
             'They want revenge on an enemy',
             'They want to help a beleaguered friend',
             'They want an entirely different job',
             'They want protection from an enemy',
             'They want to leave their current life',
             'They want fame and glory',
             'They want power over those around them',
             'They have everything they want from life',
            ];
        
            let k = Math.floor(Math.random() *12);
            let output = greatestDesireList[k];

            this.setState({greatestDesire: output})
        }

        let obviousTrait = () => {
            var obviousTraitList = [
            'Ambition',
            'Avarice',
            'Bitterness',
            'Courage',
            'Cowardice',
            'Curiosity',
            'Deceitfulness',
            'Determination',
            'Devotion to a cause',
            'Filiality',
            'Hatred',
            'Honesty',
            'Hopefulness',
            'Love of a person',
            'Nihilism',
            'Paternalism',
            'Pessimism',
            'Protectiveness',
            'Resentment',
            'Shame'
            ];
            
            let k = Math.floor(Math.random() *20);
            let output = obviousTraitList[k];

            this.setState({obviousTrait: output})
        }
        backGround()
        society()
        biggestProblem()
        age()
        greatestDesire()
        obviousTrait()
    }

    render() {
        return <div>
            <Layout>
            <h1>Click The Button Below To Obtain a Simple NPC</h1>
            <button onClick={ event => this.clicked() }> Generate NPC </button> 
    <p>Background: {this.state.backGround}</p>    
    <p>Roll in Society: {this.state.society}</p>    
    <p>Biggest Problem: {this.state.biggestProblem}</p>    
    <p>Age: {this.state.age}</p>    
    <p>Greatest Desire: {this.state.greatestDesire}</p>    
    <p>Obvious Trait {this.state.obviousTrait}</p>     
        </Layout>
        </div>
        } 
} //End of testButton component

export default OneRollNPC