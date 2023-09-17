// answer from firstCandidate
const offer = "";
const secondCandidate = new RTCPeerConnection();

secondCandidate.onicecandidate = (event) => {
  // printing SDP
  console.log(JSON.stringify(secondCandidate.localDescription));
};

// setting up data channel
let textReceiver;
secondCandidate.ondatachannel = (event) => {
  textReceiver = event.channel;
  textReceiver.onmessage = (event) => console.log("other guy: " + event.data);
  textReceiver.onopen = (event) => console.log("connection opened");
  textReceiver.onclose = (event) => console.log("connection closed");
  secondCandidate.channel = textReceiver;
};

secondCandidate
  .setRemoteDescription(offer)
  .then((answer) => console.log("done"));

//create answer
await secondCandidate
  .createAnswer()
  .then((answer) => secondCandidate.setLocalDescription(answer))
  .then((answer) =>
    console.log(JSON.stringify(secondCandidate.localDescription))
  );

// after connection
textReceiver.send("wassup");
