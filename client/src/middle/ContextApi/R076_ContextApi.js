import React, { Component } from "react";
import Children from "./contextChildren";

const {Provider, Consumer} = React.createContext()
export {Consumer}

class R076_ContextApi extends Component{
    render() {
        return (
            <Provider value="React200">
                <Children />
            </Provider>
        )
    }
}

export default R076_ContextApi