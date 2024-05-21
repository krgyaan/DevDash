import React, { Component } from "react";

import { COMETCHAT_CONSTANTS } from "./const.js";

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
        };
    }

    componentDidMount() {
        this.init();
    }

    init() {
        CometChat.init(
            COMETCHAT_CONSTANTS.APP_ID,
            new CometChat.AppSettingsBuilder()
                .setRegion(COMETCHAT_CONSTANTS.REGION)
                .subscribePresenceForAllUsers()
                .build()
        ).then(
            () => {
                this.login();
            },
            (error) => {
                console.log("Init failed with exception:", error);
            }
        );
    }

    login() {
        let UID = "superhero1";
        CometChat.login(UID, COMETCHAT_CONSTANTS.AUTH_KEY).then(
            (user) => {
                this.setState({ user });
            },
            (error) => {
                console.log("Login failed with exception:", error);
            }
        );
    }

    render() {
        return this.state.user ? (
            <div>User logged in</div>
        ) : (
            <div>User not logged in</div>
        );
    }
}