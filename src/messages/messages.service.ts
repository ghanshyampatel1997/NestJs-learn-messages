import {MessagesRepository} from './messages.repository';
export class MessagesService{
    messageRepository:MessagesRepository;
    constructor(){
        //Here service class is creating  dependency by it's own.
        //Don't do this in actual app.
        this.messageRepository=new MessagesRepository();
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