export default class RestoService{
    _apiBase = process.env.REACT_APP_API_BASE || window.location.origin.replace('3001', '3000');

   async getResource (url){

       const  res =await fetch(`${this._apiBase}${url}`);

       if(!res.ok){
           throw new Error(`Could not fetch ${url} received ${res.status}`);
       }
       return await res.json()
   }

   async getMenuItems(){
       return await this.getResource(`/api/menu/`)
   }


}