// Import "React" and "Component"
import React, {Component} from 'react';

// Import the stylesheet
import './button.style.scss';



class Button extends Component
{
    render ()
    {
        return (
            <button onClick = {this.props.onButtonClick} className = {this.props.className}>
                {this.props.city}
            </button>
        );
    }
}



export default Button;