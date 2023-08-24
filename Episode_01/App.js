/*
const heading = React.createElement(
    "h1",  // type
    {id: "heading", xyz: "abc"},  // attributes
    "Hello World from React!"  // child/children => This cann be a single child or multiple children passed as array to the function
);

console.log(heading); 
// Heading is a react element. Its a JS object.
// props are children

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // passing a react element -> a JS object to the render function
// the render function then manipulates the actual DOM and adds the h1 element under the root element.

// REACT ELEMENT IS CREATING AN OBJECT WHICH IS THEN RENDERES TO BE A HTML ELEMENT THAT THE BROWSER UNDERSTOOD.

*/

/*
CREATING NESTED TAGS:

<div id="parent">
    <div id="child">
        <h1>I am h1 tag!</h1>
    </div>
</div>

*/

/*
const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        React.createElement(
            "h1",
            {},
            "I am h1 tag!"
        )
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

/*
CREATING NESTED TAGS WITH SIBLINGS: --- using array of children passed

<div id="parent">
    <div id="child">
        <h1>I am h1 tag!</h1>
        <h2>I am h2 tag!</h2>
    </div>
</div>

*/
/*
const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1", {}, "I am h1 tag!"), React.createElement("h2", {}, "I am h2 tag!")]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

/*
CREATING NESTED TAGS WITH SIBLINGS: --- using array of children passed

<div id="parent">
    <div id="child1">
        <h1>I am h1 tag!</h1>
        <h2>I am h2 tag!</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag!</h1>
        <h2>I am h2 tag!</h2>
    </div>
</div>

*/


const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "div",
        {id: "child1"},
        [React.createElement("h1", {}, "I am h1 tag!"), React.createElement("h2", {}, "I am h2 tag!")]
    ),
    React.createElement(
        "div",
        {id: "child2"},
        [React.createElement("h1", {}, "I am h1 tag!"), React.createElement("h2", {}, "I am h2 tag!")]
    )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);