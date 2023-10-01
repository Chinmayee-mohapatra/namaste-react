import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1> About </h1>
        <h2> This is Namaste React Web Series.</h2>
        <UserClass name={"First "} location={"Hyderabad"} />
        {/* <UserClass name={"Second "} location={"Hyderabad"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1> About </h1>
//       <h2> This is Namaste React Web Series.</h2>
//       <UserClass name={"Chinmayee class-based"} location={"Hyderabad"} />
//     </div>
//   );
// };

export default About;
