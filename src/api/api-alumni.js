import axios from 'axios';
import { LS } from '@utils'

const url = "https://api-alumni-test.web-siap.online/api";

export default axios.create({

  baseURL: url,
  headers: {
    'Authorization':'Bearer ' + LS("token"),
  },
});  
