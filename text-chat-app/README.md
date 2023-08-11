This is just a simple text based chat application built using WebRTC

Using WebRTC, we can transfers data from one system to other system without a intermediate server

Here in the application:

1. Open two tabs on any browser and open dev tools in both of them
2. Copy the code from firstCandidate.js till line 16. This step just creates a offer and sets a data channel
3. Now open second tab and make a variable "offer" with the offer generated from firstCandidate.js (check console)
4. Paste the code from secondCandidate.js line3-line29. If you run it, it will create a answer.
5. Create a variable "answer" in first tab and paste that. Set that answer as remoteDesc using "setRemoteDescription" method
6. Now if you see "connection open", then everything went well.
7. On first tab use textSender.send("#msg here") and textReceiver.channel.send("# msg here") for communication.
