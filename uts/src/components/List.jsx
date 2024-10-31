import React, { useEffect, useState, UseState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";


export default function List() {

    const [dataBarang, setDataBarang] = useState([]);

    useEffect(() => {
        axios.get('https://uts-if-3-b-2327250093-api.vercel.app/api/api/warehouse')
            .then((response) => {
                console.log(response.data.result)
                setDataBarang(response.data.result)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <>
            <h2>List Barang</h2>
            <NavLink to="/warehouse/create" className="btn btn-primary my-2 mx-3">
                Create
            </NavLink>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nama Barang</th>
                        <th scope="col">Stok Barang</th>
                    </tr>
                </thead>
                <tbody>
                    {dataBarang.map((f) => (
                        <tr key={f.id}>
                            <td>{f.nama_barang}</td>
                            <td>{f.stok_barang}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}