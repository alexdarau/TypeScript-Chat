import Message from '../models/messages';
import { Request, Response } from 'express';

export class MessagesController {

    public async addMesage(req: Request, res: Response) {
        const { from, to, message } = req.body;
        console.log("🚀 ~ file: landsController.ts ~ line 9 ~ LandController ~ addLand ~ points", from, to, message)
        try {
            const response = await Message.create({
                from,
                to,
                message
            });
            res.json(response);
            console.log("Response", JSON.stringify(response))
        } catch (err) {
            console.log("Error", err)
        }
    }
}