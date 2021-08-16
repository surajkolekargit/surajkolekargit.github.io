import React, {Component} from 'react'

class Message extends Component
{
   
     
    constructor()
    {
        super()
        this.state={
            message:'Welcome visitor'
            
        }
    }
    changeMessage()
    {
        var abc=    []
        abc.age=150;
        this.setState({
            message:'Thank you for subscribing'
        })
      
        alert("Changed"+abc.age)
    }
    render()
    {
        return (
            <div>
                <h1>
                {this.state.message}  </h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
               
            </div>
           
        )
    }
}
export default Message