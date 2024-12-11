import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationServiceClient } from '@angular-ddd/data-access-services'

@Injectable({
    providedIn:"root"
})
export class OnlyAuthenticated implements CanActivate {
    constructor(
        private authenticationServiceClient: AuthenticationServiceClient,
        private router: Router
    ){};

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        const isUserAuthenticated = this.authenticationServiceClient.isAuthenticated();

        if(isUserAuthenticated){
            return true;
        }

        this.router.navigate(['/auth/login'])
        return false;
    }
}