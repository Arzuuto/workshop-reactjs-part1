import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

/**
 * here you have declare your Alert component and return
 * the html that bootstrap dictates for its alert component
 */
const Alert = (props) => {
    return ( <div className="alert alert-danger" role="alert">
        {props.text}
        </div>
    );
};
const Jumbotron = (props) => {
	//here you have to return expected html using the properties being passed to the component
	return ( <div className="jumbotron m-5">
		<h1 className="display-4">{props.title}</h1>
		<p className="lead">{props.description}</p>
		<a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">
			{props.buttonLabel}
		</a>
	</div>
    );
};

Alert.propTypes = {
    text: PropTypes.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understan what properties is the component using
ReactDOM.render(<Alert text="OMG! Something really bad has happended!" />, document.querySelector("#myDiv"));
