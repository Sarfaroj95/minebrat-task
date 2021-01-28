import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class AuthService {

    // private baseUrl = "http://localhost:3002";
    private baseUrl = "http://api.minebrat.com";

    private getState = this.baseUrl + "/api/v1/states"
    private getCity = this.baseUrl + "/api/v1/states/cities/"





    constructor(private http: HttpClient) { }


    public getStateFunc(): Observable<any> {
        return this.http.get(this.getState);
    }



    public getCityFunc(id): Observable<any> {
        return this.http.get(this.getCity + "/" + id);
    }




    private data;
    getSate() {
        return this.data;
    }
    setSate(value) {
        this.data = value;
    }

    private _bar;
    get() {
        return this._bar;
    }
    set(value) {
        this._bar = value;
    }

}
