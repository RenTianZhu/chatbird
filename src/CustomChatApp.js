// import React from 'react'
// import {APP_ID, USER_ID} from './App'
//
// import {SendBirdProvider} from "sendbird-uikit";
// import "sendbird-uikit/dist/index.css";
// import ChannelList from "./smart-components/ChannelList";
//
// // const MyCustomPreview = ({channel, onLeaveChannel}) => (
// //     <div style={{border: '1px solid gray'}}>
// //         <img height="20px" width="20px" src={channel.coverUrl}/>
// //         <button onClick={() => {
// //             const callback = () => {
// //                 console.warn('Leave channel success')
// //             };
// //             onLeaveChannel(channel, callback);
// //         }}
// //         > Leave
// //         </button>
// //     </div>);
//
// const CustomChatApp = () => (
//     <SendBirdProvider appId={APP_ID} userId={USER_ID}>
//         <div style={{height: '520px'}}>
//             <ChannelList
//                 // renderChannelPreview={MyCustomPreview}
//                 onChannelSelect={(channel) => {
//                     console.warn(channel);
//                 }}
//             />
//         </div>
//     </SendBirdProvider>);
//
// export default CustomChatApp;