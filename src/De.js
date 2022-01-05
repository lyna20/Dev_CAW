import React from 'react';
export default class De extends React.Component{

    render(){
        
        return(
            <div>
              <img alt={this.props.de}  src ={this.props.de + '.png' }></img> 
            </div>
            )
               
    }
}