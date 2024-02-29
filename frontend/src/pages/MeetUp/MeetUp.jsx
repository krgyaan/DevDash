import { Button, button } from '@nextui-org/react'
import { SignOutButton, SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react"
import React, { useEffect, useState } from 'react'
import AgoraRTC from 'agora-rtc-sdk-ng';
import VideoCompo from './VideoCompo';


const TOKEN = "007eJxTYLg/Qf/IaiX72rbzOT18nr+vtVdU7A9h22J0803lvUXKj1wUGFLMk8wNjQyNLROTzU3MLI0SU4wNEg3MDZMsLCyMDNIMTyVfTW0IZGSYebKDmZEBAkF8Nobc1NSS0gIGBgDx1iHY"
const CHANNEL = 'meetup'
const APP_ID = 'd7b712139ac74692ad30a071b88820f1'

const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })

const MeetUp = () => {
    const { user } = useUser()
    const [users, setUsers] = useState([]);
    const [localTracks, setLocalTracks] = useState([]);

    const handleUserJoined = async (user, mediaType) => {
        await client.subscribe(user, mediaType);

        if (mediaType === 'video') {
            setUsers((previousUsers) => [...previousUsers, user]);
        }

        if (mediaType === 'audio') {
            // user.audioTrack.play()
        }
    };

    const handleUserLeft = (user) => {
        setUsers((previousUsers) =>
            previousUsers.filter((u) => u.uid !== user.uid)
        );
    };

    useEffect(() => {
        client.on('user-published', handleUserJoined);
        client.on('user-left', handleUserLeft);

        client
            .join(APP_ID, CHANNEL, TOKEN, null)
            .then((uid) =>
                Promise.all([
                    AgoraRTC.createMicrophoneAndCameraTracks(),
                    uid,
                ])
            )
            .then(([tracks, uid]) => {
                const [audioTrack, videoTrack] = tracks;
                setLocalTracks(tracks);
                setUsers((previousUsers) => [
                    ...previousUsers,
                    {
                        uid,
                        videoTrack,
                        audioTrack,
                    },
                ]);
                client.publish(tracks);
            });

        return () => {
            for (let localTrack of localTracks) {
                localTrack.stop();
                localTrack.close();
            }
            client.off('user-published', handleUserJoined);
            client.off('user-left', handleUserLeft);
            client.unpublish(tracks).then(() => client.leave());
        };
    }, []);

    return (
        <div
            style={{ display: 'flex', justifyContent: 'center' }}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 200px)',
                }}
            >
                {users.map((user) => (
                    <VideoCompo key={user.uid} user={user} />
                ))}
            </div>
        </div>
    );
}

export default MeetUp
