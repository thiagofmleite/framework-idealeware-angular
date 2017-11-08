import { Injectable } from "@angular/core";
import { HttpClientHelper } from "../helpers/http.helper";
import { Group } from "../models/group/group";
import { environment } from "../../environments/environment";

@Injectable()
export class GroupService{
    constructor(private client: HttpClientHelper){}

    getAll(): Promise<Group[]>{
        return new Promise((resolve, reject) => {
            let url = `${environment.API_GROUP}/groups`;
            this.client.get(url)
            .map(res => res.json())
            .subscribe(response => {
                let groups = response.map(g => g = new Group(g));
                resolve(groups);
            }, error => reject(error));
        });
    }

    getById(id): Promise<Group>{
        return new Promise((resolve, reject) => {
            let url = `${environment.API_GROUP}/groups/${id}`;
            this.client.get(url)
            .map(res => res.json())
            .subscribe(response => {
                let group = new Group(response);
                resolve(group);
            }, error => reject(error));
        });
    }

    
}