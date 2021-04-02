import axios from  'axios'
import {useHistory} from 'react-router-dom'
import cookies from '../State/cookies'
import Cookies from '../State/cookies'
const baseUrl = 'http://localhost:5000/app'
const {cookies:{readToken, create}} = Cookies
export const registerUser = async(payload) => {
    const result = await axios.post(`${baseUrl}/register`, payload);
     const {data} = result;
        if(data.status === '200') {
            create({key:'token', value: data.token})
            const history = new useHistory();
            history.push('/hub')
        }
       
        console.log('registered response =>', data)
}