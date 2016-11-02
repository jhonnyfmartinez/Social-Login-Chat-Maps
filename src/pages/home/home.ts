import { Component,NgZone } from '@angular/core';
import { NavParams } from 'ionic-angular';
import io from 'socket.io-client';

@Component({
  templateUrl: 'home.html',
  selector: 'home',
})
export class HomePage {
    zone;chats;chatinp;socket;
    msg = {user:'',body:'',img:''};
    constructor(private ngzone:NgZone,private params:NavParams) {
        this.msg.user = params.data.name;
        this.msg.img = params.data.img;
        this.zone = ngzone;
        this.chats = [];
        this.chatinp ='';
        this.socket = io('https://shrouded-crag-91196.herokuapp.com/');
        this.socket.on('message', (msg) => {
            this.zone.run(() => {
                this.chats.push(msg);
            });
        });
}
    
    send() {
        this.msg.body = this.chatinp;
        if(this.msg != null && this.msg.body != ""){
            this.socket.emit('message', this.msg);
        }
        this.chatinp = '';
    }

}
