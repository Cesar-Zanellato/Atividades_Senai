import "./sass/style.scss"
import "./css/style.css"
import { requestComAxios, requestComHTTPRequest } from './services/posts';
//import requestComAxios, {requestComHTTPRequest } from './services/posts';
//import * as posts from './services/posts';

console.log("Entrou");

requestComAxios();

requestComHTTPRequest();