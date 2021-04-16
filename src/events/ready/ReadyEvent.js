const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run(client) {
    console.log(client.user.tag + ' has logged in.');
    client.user.setPresence({ activity: { 
      name: `>help | dsc.gg/kekv`,
      type: "WATCHING"
    }, 
    status: 'idle' 
  })
      .catch(console.error);
  }
}