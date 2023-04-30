import React from "react";
import Accounts from "./Accounts";
function App (){
  return(
    <div className="ui raised segment">
      <div className="ui segment blue inverted" >
        <h2>Bank of Flatiron</h2>
      </div>
      <Accounts />
    </div>
  );
}


export default App;
