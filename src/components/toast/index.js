import { toast } from 'react-toastify';

function Toastify(theme, text) {

    const success           = 'Success';
    const success_create    = 'Success add data';
    const success_update    = 'Success update data';
    const success_delete    = 'Success delete';
    const message_error     = 'Error...';
    const gagal_login       = 'Login failed';
    const berhasil_login    = 'Login success';

    const setup = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    }

    if (theme == "success") {
        toast.success(success, setup)
    }

    if (theme == "success-create") {
        toast.success(success_create, setup)
    }

    if (theme == "success-update") {
        toast.success(success_update, setup)
    }

    if (theme == "success-delete") {
        toast.success(success_delete, setup)
    }

    if (theme == "error") {
        toast.error(message_error, setup)
    }

    if (theme == "gagal-login") {
        toast.error(gagal_login, setup)
    }

    if (theme == "berhasil-login") {
        toast.success(berhasil_login, setup)
    }

    if (theme == "custom-error") {
        toast.error(text, setup)
    }

    if (theme == "custom-success") {
        toast.success(text, setup)
    }

}

export default Toastify;
