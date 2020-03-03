/* IMPORTS */

// React and Component
import React, {Component} from 'react';

// The Stylesheet
import './temperature.component.scss';



// The Temperature class
class Temperature extends Component
{
    render ()
    {
        return (
            <div className = "temperature">
                {this.props.value}
            </div>
        );
    }
}



// Export the Class
export default Temperature;