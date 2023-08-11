const firstCandidate = new RTCPeerConnection();

firstCandidate.onicecandidate = (e) => {
  // printing SDP
  console.log(JSON.stringify(firstCandidate.localDescription));
};

// setting up data channel
const textSender = firstCandidate.createDataChannel("textSender");
textSender.onmessage = (event) => console.log("other guy: " + event.data);
textSender.onopen = (event) => console.log("connection opened");
textSender.onclose = (event) => console.log("connection closed");

firstCandidate
  .createOffer()
  .then((offer) => firstCandidate.setLocalDescription(offer));

// answer from secondCandidate
const answer = "";
firstCandidate.setRemoteDescription(answer).then((a) => console.log("done"));

// after connection
textSender.send("hey");
