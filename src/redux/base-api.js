import axios from 'axios';
import { THUNK_SERVER } from './server';


export default axios.create({
    baseURL: THUNK_SERVER
 });


