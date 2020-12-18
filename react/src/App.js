import React from "react";
import Twit from "./twit";

function App(){
  return (
  <div>
    <h3>Current topic: Cyberpunk 2077</h3>
    <h1>{Twit.map(createTweet => (createTweet.text))}</h1>
    <p>by {Twit.map(createTweet => (createTweet.user))}</p>
    <div class="userDescription">{Twit.map(createTweet => (createTweet.userDescription))}</div>
 </div>
  )
}

export default App;