import React from 'react'
import {App as SendbirdApp} from 'sendbird-uikit'
import "sendbird-uikit/dist/index.css";

export const APP_ID = '7C51784A-B3B4-4C86-B2EE-DFFF1AAA4985'
export const USER_ID = 't'

function App() {
    return (
        <div className="App"
             style={{height: '520px', width: '800px', position: "fixed", bottom: 0}}>
            <SendbirdApp
                appId={APP_ID} userId={USER_ID}/>
            <SendbirdApp/>
        </div>
    );
}

export default App;