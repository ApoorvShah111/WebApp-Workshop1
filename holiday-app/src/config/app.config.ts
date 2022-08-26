import express from "express";
import {router} from "../controller/app.controller"

class APP{
    private app: express.Application;
    constructor(){
        this.app=express();
    }
    private portConfig(){
        this.app.listen(3000,()=>{
            console.log("Server is Running.");
        });
    }
    public start(){
        this.portConfig();
        this.routeConfig();
    }
    private routeConfig(){
        this.app.use(router);
    }
}

export const app=new APP();