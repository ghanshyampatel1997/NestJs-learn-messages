import { Injectable } from '@nestjs/common';
import {readFile,writeFile} from 'fs/promises'

// To add dependency need to add below decorator, in contructor  use injacteble class and in Module providers list.
@Injectable()
export class MessagesRepository{
    async findOne(id:string){
        const contents= await readFile('src/messages/DB data/messages.json','utf-8');
        const messages = JSON.parse(contents);
        return messages[id];
    }
    async findAll(){
        const contents= await readFile('src/messages/DB data/messages.json','utf-8');
        const messages = JSON.parse(contents);
        return messages;
    }
    async create(message:string){
        const contents= await readFile('src/messages/DB data/messages.json','utf-8');
        const messages = JSON.parse(contents);
        const id= Math.floor(Math.random()*999);

        messages[id]={
            "id": id,
            "content": message
        };
        await writeFile('src/messages/DB data/messages.json',JSON.stringify(messages));

    }
}