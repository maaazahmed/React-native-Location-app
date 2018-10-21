import { StackNavigator } from "react-navigation"
import { Signin, SignUp, MapComponant } from "../Components/index"
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
    },
    MapComponant: {
        screen: MapComponant
    }
}, {
        navigationOptions: {
            header: null
        },
        initialRouteName: "Dashboard"
    }
)

export default Routers