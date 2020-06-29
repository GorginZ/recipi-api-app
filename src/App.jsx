import React from "react";
import Recipes from "./Recipes";
import Search from "./Search";

class App extends React.Component {
    render() {
        return (
            <div>
               <Search>

               </Search>
               <Recipes></Recipes>
            </div>
        );
    }
}

export default App;
