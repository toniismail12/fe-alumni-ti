import { api } from '@api'

async function GetPekerjaan(page, username, nama_pekerjaan, jabatan, bidang, type_kerja, nama_perusahaan) {

    const config = {
        params: { 
            page:page,
            username:username,
            nama_pekerjaan:nama_pekerjaan,
            jabatan:jabatan,
            bidang:bidang,
            type_kerja:type_kerja,
            nama_perusahaan:nama_perusahaan
        },
    }

    try {
        const res = await api.get("/jobs", config);
        // console.log('Response:', res);
        return res.data.data

    } catch (error) {
        console.error('Error:', error);
        return "error"
    }

}

export default GetPekerjaan;

export { GetPekerjaan }
