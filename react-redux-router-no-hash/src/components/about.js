import React,{Component} from 'react';
import { Link } from 'react-router-dom'
class About extends Component{

    render (){
        return (
            <div >
                <h1>Home <Link to="/">about</Link></h1>
                {this.props.s}
            </div>
        )
    }
}
export default About