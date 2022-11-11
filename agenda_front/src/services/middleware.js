import Cookies from "js-cookie";

export default {
    auth(to, from, next){
        const token = Cookies.get('_myapp_token');
        console.log(token)

        if (!token) {
            to('/');
        }        

        next();
    },
}