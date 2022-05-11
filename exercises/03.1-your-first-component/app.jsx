import React from "react";
import ReactDOM from "react-dom";

export const PrintHello = () => {
	return <h1>I Love React</h1>;
};

const content = <PrintHello/>
// change the syntax of the first parameter to make it <PrintHello /> instead of PrintHello()
ReactDOM.render(content, document.querySelector("#myDiv"));
