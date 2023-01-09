import {Injectable} from "@angular/core";
import {SessionService} from "../../shared/services/session.service";
import {Login, LoginToken} from "../models/login.model";

const AUTH_KEY = 'token';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private readonly sessionService: SessionService) {
  }

  login(payload: Login): LoginToken | null {
    const {email, password} = payload;
    if (email === 'admin@angkasapura.com' && password === 'admin') {
      const token: LoginToken = {token: this.generateToken()};
      this.sessionService.set(AUTH_KEY, JSON.stringify(token));
      return token;
    }
    return null;
  }

  generateToken(): string{
    return Math.random().toString(36).substring(2, 20);
  }
}
