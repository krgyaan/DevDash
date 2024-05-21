import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import { CometChatUsersWithMessages } from "@cometchat/chat-uikit-react"; //import the component in your App.js file
import { UIKitSettingsBuilder } from "@cometchat/uikit-shared";
import { CometChatUIKit } from "@cometchat/chat-uikit-react";


export default function ChatHome() {

    const COMETCHAT_CONSTANTS = {
        APP_ID: "2577257d54d39a96",
        REGION: "in",
        AUTH_KEY: "fab257c6f1e9b971c512fdf4663a97f8f8d4f873",
    };

    //create the builder
    const UIKitSettings = new UIKitSettingsBuilder()
        .setAppId(COMETCHAT_CONSTANTS.APP_ID)
        .setRegion(COMETCHAT_CONSTANTS.REGION)
        .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
        .subscribePresenceForFriends()
        .build();

    
    //Initialize CometChat UIKit
    CometChatUIKit.init(UIKitSettings)
        .then(() => {
            console.log("Initialization completed successfully");
            const UID = "kamran"; //Replace with your UID

            CometChatUIKit.getLoggedinUser().then((user) => {
                console.log(user)
                if (!user) {
                    //Login user
                    CometChatUIKit.login("superhero1")
                        .then((user) => {
                            console.log("Login Successful:", { user });
                        })
                        .catch(console.log);
                } else {
                    console.log("Helloo");
                }
            })
        })
        .catch(console.log);

    return <CometChatUsersWithMessages />
}