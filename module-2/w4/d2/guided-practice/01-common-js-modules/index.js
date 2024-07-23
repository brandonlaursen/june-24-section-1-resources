const sayHelloTo = require("./send-messages/say-hello-to");

const {
  giveMessageToMrsPotato,
} = require("./send-messages/give-message-to-mrs-potato");

// const messages = require("./messages");
// console.log('====>', messages);


const {
  message1: msg1,
  message2: msg2,
  message3: msg3,
} = require("./messages");


// let message1 = 'hello';
// let obj = { name: 'brandon'};

// let { name:firstName } = obj;
// console.log(firstName);

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
