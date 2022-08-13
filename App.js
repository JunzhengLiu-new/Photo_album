
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/Login.js"
import Register from "./src/Register.js"
import ChangePassword from "./src/Change_password.js"
import Map from "./src/Map.js"
import New_album from './src/New_album.js';
import Home from './src/Home'
import Chart from "./src/Chart"
// import Details from "./Details"
// import Refresh_data from './Refresh_data.js';
// import Report from './Report.js'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Change Password" component={ChangePassword} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="New_album" component={New_album} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chart" component={Chart} />
        {/* <Stack.Screen name="Report" component={Report} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;