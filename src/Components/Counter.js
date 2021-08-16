import React, {Component} from 'react'

class Counter extends Component
{
    constructor(props)
    {
        super()
        this.state={
            cnt:0
        }
    }
    increament()
    {
        this.setState({      
            cnt : (this.state.cnt+1)
            //console.log(count)
        } ,()=>{ console.log('cllback',this.state.cnt) })
        {
            
        }
      console.log(this.state.cnt)
    }

    render()
    {
        return (
            <div>
                <div> click - {this.state.cnt}</div>
                <button onClick={()=>this.increament()}>Subscribe</button>               
            </div>           
        )
    }
}
export default Counter