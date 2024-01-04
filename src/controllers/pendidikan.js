import { api } from '@api'

async function GetPendidikan(page, username, jenjang, nama_instansi, program_studi, jenis_instansi) {

    const config = {
        params: { 
            page:page,
            username:username,
            jenjang:jenjang,
            nama_instansi:nama_instansi,
            program_studi:program_studi,
            jenis_instansi:jenis_instansi,
        },
    }

    try {
        const res = await api.get("/pendidikan", config);
        // console.log('Response:', res);
        return res.data.data

    } catch (error) {
        console.error('Error:', error);
        return "error"
    }

}

export default GetPendidikan;

export { GetPendidikan }
