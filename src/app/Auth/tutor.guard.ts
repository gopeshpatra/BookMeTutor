import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticateService } from "./authenticate.service";

@Injectable({
  providedIn: "root"
})
export class TutorGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticateService
  ) {}

  canActivate(): boolean {
    if (this.authenticationService.LoggedIn() && localStorage.getItem('role')==='tutor') {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
