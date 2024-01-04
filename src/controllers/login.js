import { api } from '@api'
import { Toastify, ShowLoading, HideLoading } from '@components'

async function Auth(usernames, passwords) {

    ShowLoading()
    try {
        const res = await api.post("/login", {
            username: usernames,
            password: passwords
        });
        HideLoading()
        Toastify('berhasil-login')
        return res

    } catch (error) {
        HideLoading()
        console.error('Error:', error);
        Toastify('gagal-login')
        return "error"

    }
    
}

async function AuthMe() {

    try {
        const res = await api.get("/authme");
        return res.data

    } catch (error) {
        console.error('Error:', error);
        return "error"
    }

}

export default Auth;
export { Auth, AuthMe }
