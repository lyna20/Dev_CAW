import react from "react";
import De from './De';
import "./LanceDe.css";
export default  class LanceDe extends react.Component{
       constructor(props) {
            super(props);
            this.state= {de1:"2", de2:"2", identique: true};
            this.roll = this.roll.bind(this);
       }
       roll() {
           const first=Math.floor(Math.random()*6)+1
           const second=Math.floor(Math.random()*6)+1
         if(first===second)
         this.setState({de1:first, de2:second , identique : true});
         else 
         this.setState({de1:first, de2:second , identique : false});
       }
       render(){
           return (
               <div>
                   <De de ={this.state.de1} />
                   <De de ={this.state.de2}/>
                   <button onClick={this.roll}>Lancer les dés</button>
                   <br/>
                    <b> {this.state.identique ?  "You win" :"Try again"} </b>
                   
              </div>
           );
       };
       
    }
    
    