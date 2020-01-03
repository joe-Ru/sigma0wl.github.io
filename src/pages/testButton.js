import React from "react"
import Layout from "../components/layout"

class testButton extends React.Component {
    constructor(){
        super();
        this.state = {
            hitPoints: "",
            atkBonus: "",
            armorClass: "",
            atkDamage: "",
            weapon: ""


        };

    }
    clicked(){
        let k = Math.floor(Math.random() *8)
        this.setState({hitPoints: k})
    }

    render() {
        return <div>
            <Layout>
            <h1>Click The Button Below To Obtain an NPC Made for Combat</h1>
            <button onClick={ event => this.clicked() }> Generate Combat NPC </button>    
        <p>Hit Points: {this.state.hitPoints}</p>
        <p>Attack bonus: {this.state.atkBonus}</p>
        <p>Armor Class: {this.state.armorClass}</p>
        <p>Damage: {this.state.atkDamage}</p>
        <p>By Weapon:  {this.state.weapon}</p>
  
        </Layout>
        </div>
        } 
} //End of testButton component

export default testButton