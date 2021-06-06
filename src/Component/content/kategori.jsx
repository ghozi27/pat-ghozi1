import axios from 'axios';
import React from 'react';
import Star from '../img/star.png';
import Popup from 'reactjs-popup';

export default function Kategori(props) {
    const [img, setImg] = React.useState([])
    const [jumlah, setJumlah] = React.useState([])
    const [total, setTotal] = React.useState([])
    const [nama, setNama] = React.useState([])
    props.getSemua(img, jumlah, total, nama)
    const [number, setNumber] = React.useState([])
    console.log(number)

    const [all, setAll] = React.useState([])
    const getAll = async () => {
        try {
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/24?page=1`;
            const response = await axios.get(url);
            console.log(response);
            setAll(response.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getAll();
    }, []);
    return (
        <React.Fragment>
            <div className="mt-10 pr-5">
                <div className="flex items-start">
                    <h1 className="font-bold text-xl">Populer</h1>
                </div>
                <div className="mt-3">
                    <ul className="flex items-center w-full flex-wrap overflow-auto justify-between">
                        {all.map((ct, index) => (
                            <li key={index} className="flex-none w-3/10 h-48 relative m-4">
                                <Popup trigger={
                                    <div className="rounded-full relative p-1">
                                        <img src={ct.image} alt={ct.image} className="rounded-xl w-full h-36" />
                                        <p className="absolute p-4 bg-white rounded-2xl h-1/10 flex items-center top-24 bottom-0 left-3 font-bold text-xs">{ct.waktu}</p>
                                        <h1 className="font-black">{ct.name}</h1>
                                    </div>
                                } modal>
                                    {close => (
                                        <div style={{ width: '450px', height: '600px' }} className="bg-white p-4 shadow-lg w-full rounded-2xl font-poppins">
                                            <img className="rounded-xl w-full h-full " src={ct.image} alt={ct.image} />
                                            <div className="flex justify-between mt-3 p-3">
                                                <p className="font-extrabold text-2xl">{ct.name}</p>
                                                <p className="font-extrabold text-2xl">Rp. {ct.harga}</p>
                                            </div>
                                            <div className="flex">
                                                <div className="rounded-full ml-3 border-black">
                                                    <p>{ct.waktu}</p>
                                                </div>
                                                <div className="rounded-full ml-5 flex border-black">
                                                    <img src={Star} alt={Star} className="h-5 font-bold mr-2" />
                                                    <p className="font-bold">{ct.rating}</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between mt-3 p-3">
                                                <div className="font-poppins font-bold w-3/12">Stock {ct.jumlah}</div>
                                                <button disabled={ct.pesan === 0} onClick={() => {
                                                    setNumber(ct.pesan--)
                                                    ct.jumlah++
                                                }} className="w-1/12 bg-yellow-500">-</button>
                                                <div className="border w-1/12 p-2 text-center ">{ct.pesan}</div>
                                                <button disabled={ct.jumlah === 0} onClick={() => {
                                                    ct.jumlah--
                                                    setNumber(ct.pesan++)
                                                }} className="w-1/12 bg-yellow-500">+</button>
                                                <button onClick={() => {
                                                    setImg(ct.image)
                                                    setJumlah(ct.harga)
                                                    setTotal(ct.pesan)
                                                    setNama(ct.name)
                                                }} className="font-bold bg-yellow-500 w-3/12">Pesan</button>
                                            </div>
                                        </div>
                                    )}
                                </Popup>
                                <div className="flex">
                                    <div className="flex"><img className="w-4 h-4 m-1" src={Star} alt={Star} /><p className="font-bold">{ct.rating}</p></div>
                                    <p className="font-bold px-20">Rp.{ct.harga}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}