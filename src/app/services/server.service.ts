import { ServerModel } from "../models/server.model";

export class ServerService
{
    private servers:ServerModel[] = [
        {sid:1,name:'Test Server',status:'Online'},
        {sid:2,name:'Dev Server',status:'Offline'},
        {sid:3,name:'Production Server',status:'Online'},
    ];
    getServers():ServerModel[] {
        return this.servers;
    }
}