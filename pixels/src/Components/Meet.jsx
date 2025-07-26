import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import meetBg from '../assets/bg-createMeet.jpg';

const Meet = () => {
    
    const { meetId } = useParams();
    const meetingRef = useRef();
    const location = useLocation();

    const getQueryParam = (key) => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get(key);
    };

    useEffect(() => {
        let zp;

        const initMeeting = () => {
            const userId = `UserId-${Math.floor(Math.random() * 100000)}`;
            const userName = getQueryParam('userName') || `Guest-${Math.floor(Math.random() * 1000)}`;
            const appID = 2026532919;
            const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SECRET;

            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                meetId,
                userId,
                userName
            );

            zp = ZegoUIKitPrebuilt.create(kitToken);

            zp.joinRoom({
                container: meetingRef.current,
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall,
                },
                sharedLinks: [
                    {
                        name: 'Shared Meeting Link',
                        url: window.location.href,
                    },
                ],
            });
        };

        initMeeting();

        return () => {
            if (zp) {
                zp.destroy();
            }
        };
    }, [meetId, location]);

    return (

        <div
            style={{
                backgroundImage: `url(${meetBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
            }}
        >
            <div className="w-full h-screen flex items-center justify-center">
                <div className="size-full shadow-lg" ref={meetingRef}></div>
            </div>
        </div>

    );
    
};

export default Meet;
