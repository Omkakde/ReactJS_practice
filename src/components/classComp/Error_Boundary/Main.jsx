import React, { Component } from "react";
import Child from "./Child";
import ErrorBoundary from "./ErrorBoundary";

// not for event handling error

export class Main extends Component {
  render() {
    return (
      <div>

        {/* if error data send to child then ErrorBoundary ui is show */}
        {/* <ErrorBoundary>
         <Child title={"HTML"}/>
         <Child title={"CSS"}/>
         <Child title={"JavaScript"}/>
         <Child title={"ErrorData"}/>
      </ErrorBoundary> */}


      
       {/* if error occur then only that particular part is not show, we shoe error ui there */}
        {/* other part is visible  */}
        <ErrorBoundary>
          <Child title={"HTML"} />
        </ErrorBoundary>

        <ErrorBoundary>
          <Child title={"CSS"} />
        </ErrorBoundary>

        <ErrorBoundary>
          <Child title={"JavaScript"} />
        </ErrorBoundary>

        <ErrorBoundary>
           <Child title={"ErrorData"} /> 
          {/* error in that case only this ui is not visble that position ErrorBoundary UI IS  SHOW */}
        </ErrorBoundary>
      </div>
    );
  }
}

export default Main;
