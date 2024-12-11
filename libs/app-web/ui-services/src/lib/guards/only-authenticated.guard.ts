import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { AuthenticationServiceClient } from '@angular-ddd/data-access-services'

@Injectable({
    providedIn:"root"
})
export class OnlyAuthenticated implements CanActivate {
    constructor(
        private authenticationServiceClient: AuthenticationServiceClient
    ){};

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        const isUserAuthenticated = this.authenticationServiceClient.isAuthenticated();

        if(isUserAuthenticated){
            return true;
        }

        return false;
    }
}