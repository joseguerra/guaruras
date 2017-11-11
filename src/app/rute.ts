export class Rutas{
  urlbase: string = "http://guaruras.herokuapp.com/";
  constructor(){}


  login(){
    return this.urlbase+ "api/v1/api-token-auth/";
  }
  change_password(token){
    return this.urlbase+ "api/v1/change-password/?token={0}".replace("{0}", token);
  }
  reset_password(){
    return this.urlbase+ "api/v1/reset-password/";
  }

  phone(perfil_id){
      return this.urlbase+ "/api/v1/perfil/"+perfil_id+"/telefono/";
  }

  profile(){
      return this.urlbase+ "api/v1/perfil/";
  }


  trivias(token){
    if(token){
      return this.urlbase+ "trivias/?token={0}".replace("{0}", token) + "&d=" + new Date().getTime();
    }
    return this.urlbase+ "trivias" + "?d=" + new Date().getTime();;
  }


}
