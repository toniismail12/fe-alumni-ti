import { AuthMe, Alumni } from "@controllers"
import { useEffect, useState, useCallback } from "react";

export default function TabProfile() {

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [tahun_lulus, setTahun_lulus] = useState("");
  const [wa, setWa] = useState("");
  const [no_izasah, setNo_izasah] = useState("");
  const [ipk, setIpk] = useState("");
  const [gender, setGender] = useState("");
  const [tempat_lahir, setTempat_lahir] = useState("");
  const [tanggal_lahir, setTanggal_lahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [status_kawin, setStatus_kawin] = useState("");

  const fetchData = useCallback(async () => {

    const res = await AuthMe();
    if (res !== 'error') {
      setName(res.user.name)
      setEmail(res.user.email)

      const res2 = await Alumni(1, res.user.name, res.user.username);
      if (res2 !== 'error') {
        setData(res2.data[0])
        const val = res2.data[0]
        setAngkatan(val.angkatan)
        setTahun_lulus(val.tahun_lulus)
        setWa(val.wa)
        setNo_izasah(val.no_izasah)
        setIpk(val.ipk)
        setGender(val.gender)
        setTempat_lahir(val.tempat_lahir)
        setTanggal_lahir(val.tanggal_lahir)
        setAlamat(val.alamat)
        setStatus_kawin(val.status_kawin)
      }
    }

  }, [])

  useEffect(() => {

    fetchData();

  }, [fetchData])
  
  return (
    <div className="bg-white p-3 shadow-sm rounded-sm border-t">

      <div className="text-gray-700">
        <div className="grid md:grid-cols-2 text-sm">
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Name</div>
            <div className="px-4 py-2">
              <input type="text" className="border p-2 rounded-lg w-full" value={name} onChange={e => setName(e.target.value)} />
            </div>

          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">NIM</div>
            <div className="px-4 py-2">
              <input type="text" className="border p-2 rounded-lg w-full" value={data.username} disabled />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Email</div>
            <div className="px-4 py-2">
              <input type="email" className="border p-2 rounded-lg w-full" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Angkatan</div>
            <div className="px-4 py-2">
              <input type="text" className="border p-2 rounded-lg w-full" value={angkatan} />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Tahun Lulus</div>
            <div className="px-4 py-2">
              <input type="text" className="border p-2 rounded-lg w-full" value={tahun_lulus} />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">WA</div>
            <div className="px-4 py-2">
              <input type="text" className="border p-2 rounded-lg w-full" value={wa} />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">No Izasah</div>
            <div className="px-4 py-2">
              <input type="text" className="border p-2 rounded-lg w-full" value={no_izasah} />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">IPK</div>
            <div className="px-4 py-2">
              <input type="text" className="border p-2 rounded-lg w-full" value={ipk} />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Gender</div>
            <div className="px-4 py-2">
              <input type="text" className="border p-2 rounded-lg w-full" value={gender} />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Tempat Lahir</div>
            <div className="px-4 py-2">
              <input type="text" className="border p-2 rounded-lg w-full" value={tempat_lahir} />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Tanggal Lahir</div>
            <div className="px-4 py-2">
              <input type="date" className="border p-2 rounded-lg w-full" value={tanggal_lahir} />
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Alamat</div>
            <div className="px-4 py-2">
              <textarea className="border p-2 rounded-lg w-full" value={alamat}></textarea>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Status Kawin</div>
            <div className="px-4 py-2">
              <select className="border p-2 rounded-lg w-full" value={status_kawin}>
                <option value="lajang">Lajang</option>
                <option value="menikah">Menikah</option>
                <option value="duda">Duda</option>
                <option value="janda">Janda</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Password</div>
            <div className="px-4 py-2">
              <button className="block w-full text-green-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-2 border">
                Update Password
              </button>
            </div>
          </div>

        </div>
      </div>

      <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
        Update
      </button>
    </div>
  )
}
