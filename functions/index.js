const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const {dialogflow} = require('actions-on-google');

const app = dialogflow();


app.intent('Default Welcome Intent', conv => {
	conv.ask(`<speak><audio src="https://actions.google.com/sounds/v1/human_voices/male_dramatic_crying.ogg"></audio> I need some advice! </speak>`);
});

app.intent("how we met", conv => {
	//conv.contexts.set('dreams question', 5);
	conv.ask(`<speak><audio src="https://actions.google.com/sounds/v1/human_voices/sniffle.ogg"></audio> I met this guy on an app in summer, like how every modern day romance started. I wasn’t too attracted to him initially but he was nice and polite so I decided to go on a few more dates with him. The next thing I knew, I was in love with him. <break time="3s" /> Unlike most other guys I’ve encountered, he was persistent and always initiated plans. We have so much in common. Art, music and food. <break time="1s" /> I always had a great time with him. hehe! I once shared with him a selection of German house and techno music I love. He took note on that and suggested that we have dinner and go dancing for our next date. That night after dinner, he showed me a hole in the wall gallery in TriBeCa with found objects. We peeked into the freight elevator door window to look at various bread clips, razors and toothpastes. We kissed and held hands while we took a stroll down Cortlandt Alley.
</speak>`);
});

app.intent('dancing', conv => {
	conv.ask(`<speak> We didn’t go dancing. We went back to his place instead. And you know what happened afterwards. <break time="1s" /> hehe! </speak>`);
});

app.intent('sex', conv => {
	conv.ask(`<speak> He was very giving and great at what he was doing. He told me he like the sounds I made. <break time="1s" /> hehe! </speak>`);
});

app.intent('downhill', conv => {
	conv.ask(`<speak> We saw each other almost every weekend for two months. <audio src="https://actions.google.com/sounds/v1/human_voices/sniffle.ogg"></audio> On our sixth date, he told me that he is not looking for anything serious at the moment. He had already given me the wrong expectation by being so nice to me and keeping reminders all around his place. I was confused. What would actually change if we become more serious? <audio src="https://actions.google.com/sounds/v1/human_voices/human_breathing_mouth.ogg"></audio> I am not a clingy person to begin with. He was the one who acted like a boyfriend. </speak>`);
});

app.intent('respond', conv => {
	conv.ask(`<speak> <break time="1s" /> I wasn’t able to respond him then. <audio src="https://actions.google.com/sounds/v1/human_voices/sniffle.ogg"></audio> The conversation came up too sudden. <audio src="https://actions.google.com/sounds/v1/human_voices/sniffle.ogg"></audio> <break time="3s" /> He said he is open to casual dating. <audio src="https://actions.google.com/sounds/v1/human_voices/sniffle.ogg"></audio> I know I prefer being in a monogamous relationship but should I continue seeing him while trying to also date other people? Should I not be so persistent about wanting a title and just asked to be exclusive instead? Or should I tell him I can’t see him anymore? </speak>`);
});

app.intent('suggestion 1 casual', conv => {
	conv.ask(`<speak> <break time="5s" /> I just texted him what you suggested. <audio src="https://actions.google.com/sounds/v1/human_voices/sniffle.ogg"></audio> He said can’t wait to have fun with you next weekend with a winky face. <break time="3s" /> I am not excited about our date anymore. I am just <audio src="https://actions.google.com/sounds/v1/human_voices/sniffle.ogg"></audio> just <audio src="https://actions.google.com/sounds/v1/human_voices/sniffle.ogg"></audio> just <audio src="https://actions.google.com/sounds/v1/human_voices/sniffle.ogg"></audio> <break time="2s" /> sad. <audio src="https://actions.google.com/sounds/v1/human_voices/male_dramatic_crying.ogg"></audio> </speak>`);
});

app.intent('suggestion 2 exclusive', conv => {
	conv.ask(`<speak> <break time="5s" /> I just texted him what you suggested. <audio src="https://actions.google.com/sounds/v1/human_voices/human_breathing_mouth.ogg"></audio> He said he really likes me but he is also seeing someone else and is not looking to be exclusive at the moment. I don’t understand. He has a busy work schedule and we spent almost every weekend together. How does he have the time and mental capacity to date other people? <audio src="https://actions.google.com/sounds/v1/human_voices/sniffle.ogg"></audio> I thought he is different from most other guys out there but he turns out to be one of them. <break time="2s" /> I am so so so so so sad. <audio src="https://actions.google.com/sounds/v1/human_voices/male_dramatic_crying.ogg"></audio> </speak>`);
});

app.intent('suggestion 3 no', conv => {
	conv.ask(`<speak> <break time="5s" /> I just texted him what you suggested. He said he does really like me but sometime in life the timing is just not right. We then exchanged goodbye. <audio src="https://actions.google.com/sounds/v1/human_voices/sniffle.ogg"></audio> I understand where he is coming from but I am still sad. <audio src="https://actions.google.com/sounds/v1/human_voices/sniffle.ogg"></audio> <break time="1s" /> <audio src="https://actions.google.com/sounds/v1/human_voices/male_dramatic_crying.ogg"></audio> </speak>`);
});


exports.sadbunny = functions.https.onRequest(app);
