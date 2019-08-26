const { VK } = require('vk-io'); 
var request = require("request");
const title = require("console-title");
const vk = new VK({ 
token: '123' // туда пиши свой токен
}); 
var count = 0;
//function leave() {
	//vk.api.messages.removeChatUser({
		//chat_id: 9,
		//user_id: 551930651,
		
	///});
//}
function imback() {
vk.api.messages.addChatUser({ 
user_id: 123, //cюда айди бота
chat_id: 123, //сюда айди конфы

}); 
} 




function adding() { 
vk.api.messages.addChatUser({ 
user_id: 123, //сюда айди кого добавить
chat_id: 123, //сюда айди конфы

}); 
}

function leave() {
	vk.api.messages.removeChatUser({
		chat_id: 123,//сюда айди конфы
		user_id: 123,//cюда айди бота
		
	});
	count++;
title(`Spam by awoken~ Сделано ${count} оплевух`);
}
setInterval(adding, 30000);
setInterval(leave, 30000);
setInterval(imback, 30000);
