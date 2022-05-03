import { Application } from "express";
import { MessagesController } from "../controllers/messagesControler";

export class MessageRoutes {

    public landController: MessagesController = new MessagesController();


    public routes(app: Application): void {
        app.route('/api/add-land')
            .post(this.landController.addMesage);
    }
}
