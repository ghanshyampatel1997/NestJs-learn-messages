import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messageService:MessagesService;
    constructor(){
        //Here service class is creating  dependency by it's own.
        //Don't do this in actual app.
        this.messageService=new MessagesService();
    }

    @Get()
    listMessages(){
        return this.messageService.findAll();
    }
    

    @Post()
    createMessages(@Body() body:CreateMessageDto){
        console.log(body);
        return this.messageService.create(body['content']);// or u can use body.content
    }

    @Get('/:id')
    async getMessage(@Param('id') id:string){
        console.log(id);
        const message= await this.messageService.findOne(id); //it's promise
        console.log(message);
        if(!message){
            throw new NotFoundException('Message not found');
        }

        return message;
    }
}
