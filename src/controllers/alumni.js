import { api } from '@api'

async function Alumni(page, name, username, angkatan, tahun_lulus, no_izasah, gender, alamat) {

    const config = {
        params: { 
            page:page,
            name:name,
            username:username,
            angkatan:angkatan,
            tahun_lulus:tahun_lulus,
            no_izasah:no_izasah,
            gender:gender,
            alamat:alamat,
        },
    }

    try {
        const res = await api.get("/alumni", config);
        // console.log('Response:', res);
        return res.data.data

    } catch (error) {
        console.error('Error:', error);
        return "error"
    }

}

export default Alumni;

export { Alumni }
