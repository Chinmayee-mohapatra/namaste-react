import React from "react"
import ReactDOM from "react-dom/client"

// JSX => transpiled before it reaches the JS Engine (Babel package of PARCEL is responsible for this)
// JSX => React.createElement => React Element - JS Object => HTMLElement(render)

/*
const jsxHeading = (
    <h1 className="head" tabIndex="5">
        Namaste React 
    </h1>
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
*/

// const Title = () => {
//     return <h1 className="heading" tabIndex="5">
//         Namaste Ract using JSX with return!
//     </h1>
// };

/*
const Title = () => (
    <h1 className="heading" tabIndex="5">
        Namaste Ract using JSX without return!
    </h1>
);


const HeadingComponent = () => (
    <div id="container">
        <Title/> // COMPONENT COMPOSITION : Placing component inside another component.
        <h2 className="head">
            Namaste React Functional Component !
        </h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
*/

// WRITING NORMAL JS FUNCTION as REACT COMPONENT:
/*
const Title = function() {
    return (
        <h1 className="head">
            Namaste React with Normal function.
        </h1>
    );
};
*/

// WRITING ANY JS CODE/EXPRESSION within JSX:
// "{}" within curly braces we can place any js code/expression. It could be variable, expression, string, function.. anything.
/*
const number = 10000;

const HeadingComponent = () => (
    <div id="container">
        <h2>
            {number}
        </h2>
        <h3 className="heading">
            Namaste React.
        </h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
*/

// PLACING REACT ELEMENT INSIDE REACT COMPONENT:
/*
const title = (
    <h1 className="head">
        React Element.
    </h1>
);  // Here, "title" is a react element/oject.

const HeadingComponent = () => (
    <div id="container">
        <h2>
            {title}
        </h2>
        <h3 className="heading">
            React element inside react component.
        </h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
*/

// PLACING REACT ELEMENT INSIDE REACT ELEMENT:
/*
const span = (
    <span>
        Hello World inside span.
    </span>
);

const title = (
    <h1 className="head">
        React Element.
        {span}
    </h1>
);  // Here, "title" is a react element/oject.

const HeadingComponent = () => (
    <div id="container">
        <h2>
            {title}
        </h2>
        <h3 className="heading">
            React element inside react component.
        </h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
*/

// PLACING REACT COMPONENT INSIDE REACT ELEMENT:
/*
const HeadingComponent = () => (
    <div id="container">
        <h3 className="heading">
            React component inside react element.
        </h3>
    </div>
);

const title = (
    <h1 className="head">
        <HeadingComponent/>
        React Element.
    </h1>
);  // Here, "title" is a react element/oject.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
*/

/*
SCENARIO:
Lets say we are getting some data fetched by making an API call. Now if suppose any attacker gets access to attack and inject 
some malicious data into the response then it would be executed in the cilent machine as we could execute JS inside of JSX.
Once the JS code runs in the client's machine/browser then it could access sensitive data on the client machine like
local storage, session storage, read cookies, get information stored on the laptop etc. Suck attacks are called 
CROSS-SITE attack.

But the fact is JSX takes care of these injection attacks. It first sanitise the JS object before executing it inside
curly braces in JSX.
*/

// DATA COLLECTED FROM THE API CALL AND THEN USING IT INSIDE JSX:
const data = api.getData();

// before the data is executed in line 173, it is sanitized by JSX to make sure that there are no malicious data in the object.
const HeadingComponent = () => (
    <div id="container">
        <h2>
            {data}
        </h2>
        <h3 className="heading">
            React element inside react component.
        </h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);