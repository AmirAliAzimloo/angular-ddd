import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class TestService {
    private api_url: string = "";

    constructor() {
       if(typeof window == "undefined"){
        this.api_url = process.env["API_BASE"] as string;
       }
    }

    get ApiUrl(): string {
        return this.api_url;
    }
}
