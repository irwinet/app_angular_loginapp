import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apiKey = 'AIzaSyCzSH1w7h0dibhXUENk7IhOZodVoFSfoqg';
  
  // Crear Nuevo Usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { }

  logout(){
    
  }

  login(usuario: UsuarioModel){

  }

  nuevoUsuario(usuario: UsuarioModel){
    const authData = {
      // email: usuario.email,
      // password: usuario.password,
      ...usuario,
      returnSecureToken: true
    }

    return this.http.post(
      `${this.url}:signUp?key=${this.apiKey}`,
      authData
    );
  }
}
