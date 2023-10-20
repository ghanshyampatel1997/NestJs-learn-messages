import {MessagesRepository} from './messages.repository';
import {Injectable} from '@nestjs/common';


// To add dependency need to add below decorator, in contructor  use injacteble class and in Module providers list.
@Injectable()
export class MessagesService{
    constructor(public messageRepository:MessagesRepository){
    }

    findOne(id:string){
        return this.messageRepository.findOne(id);
    }

    findAll(){
        return this.messageRepository.findAll();
    }

    create(message:string){
        return this.messageRepository.create(message);
    }

}