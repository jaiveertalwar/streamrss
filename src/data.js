import { v4 as uuidv4 } from "uuid";
function chillHop() {
	return [
		{
			name: "Virgin Radio Dubai",
			cover:
				"https://pbs.twimg.com/profile_images/1285129262576676865/XHNylhVc.jpg",
			artist: "ARN Network, UAE",
			audio: "https://n08.radiojar.com/nhq0vcqwuueuv?rj-ttl=5&rj-tok=AAABez22tkMA5piBRFr93ZoeYg",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Virgin Radio Oman",
			cover:
				"https://mytuner.global.ssl.fastly.net/media/tvos_radios/bcnaa2dyvjun.png",
			artist: "ARN Network, Oman",
			audio: "http://node-13.zeno.fm/agtp9c146qzuv?rj-ttl=5&rj-tok=AAABdz22zfMA5AuhTptJQYMhLQ",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: true,
		},
		
		//ADD MORE HERE
	];
}

export default chillHop;
