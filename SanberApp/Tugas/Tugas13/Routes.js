import React, { Component } from 'react';

import { Router, Stack, Scene } from 'react-native-router-flux';


import Login from './LoginScreen';

import Signup from './AboutScreen';

import Youtube from '../Tugas12/App';



export default class Routes extends Component {

    render() {

        return (

            <Router>

                <Stack key="root" hideNavBar={true}>

                    <Scene key="login" component={Login} title="Login" initial={true} />

                    <Scene key="signup" component={Signup} title="Register" />

                    <Scene key="youtube" component={Youtube} title="Youtube" />

                </Stack>

            </Router>

        )

    }

}
