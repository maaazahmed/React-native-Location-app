import { StackNavigator } from "react-navigation"
import { Signin, SignUp,  } from "../Components/index"
import Dashboard from "../../src/index"



const Routers = StackNavigator({
    SignUp: {
        screen: SignUp
    },
    SignIn: {
        screen: Signin
    },
    Dashboard: {
        screen: Dashboard
    }
}, {
        navigationOptions: {
            header: null
        },
        initialRouteName: "SignUp"
    }
)

export default Routers