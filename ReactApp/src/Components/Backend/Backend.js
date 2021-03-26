
const io = require('socket.io-client');
const ENDPOINT =  'localhoast:5000'


class backend {

    constructor() {
        this.socket =  io(ENDPOINT);
    }
    getMessages = async() => {
    
        this.socket.emit('user', { mess: 'hello'}, (error) => {
          if(error) {
            alert(error);
          }
        });
    }
       
    
}

export default new backend()