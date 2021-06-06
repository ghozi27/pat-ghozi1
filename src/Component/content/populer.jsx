import axios from 'axios';
import React from 'react';
import { useParams } from "react-router-dom";
import Star from '../img/star.png';
import Popup from 'reactjs-popup';

export default function Populer(props) {
    const [img, setImg] = React.useState([])
    const [jumlah, setJumlah] = React.useState([])
    const [total, setTotal] = React.useState([])
    const [nama, setNama] = React.useState([])
    const [number, setNumber] = React.useState([])
    props.getSemua(img, jumlah, total, nama)
    console.log(number)

    const [populer, setPopuler] = React.useState([])
    let { id } = useParams();
    const getPopuler = async (id) => {
        try {
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/8?page=${id}`;
            const response = await axios.get(url);
            console.log(response);
            setPopuler(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    React.useEffect(() => {
        getPopuler(id);
    }, [id])
    return (
        <React.Fragment>
            <div className="mt-10 pr-5">
                <div className="flex items-start">
                    <h1 className="font-bold text-xl">Populer</h1>
                </div>
                <div className="mt-3">
                    <ul className="flex items-center w-full flex-wrap overflow-auto justify-between">
                        {populer.map((pop, index) => (
                            <li key={index} className="flex-none w-3/10 h-48 relative m-4">
                                <Popup trigger={
                                    <div className="rounded-full relative p-1">
                                        <img src={pop.image} alt={pop.image} className="rounded-xl w-full h-36" />
                                        <p className="absolute p-4 bg-white rounded-2xl h-1/10 flex items-center top-24 bottom-0 left-3 font-bold text-xs">{pop.waktu}</p>
                                        <h1 className="font-black">{pop.name}</h1>
                                    </div>
                                } modal>
                                    {close => (
                                        <div style={{ width: '450px' }} className="bg-white p-4 shadow-lg w-full rounded-2xl font-poppins">
                                            <img className="rounded-xl w-full h-full " src={pop.image} alt={pop.image} />
                                            <div className="flex justify-between mt-3 p-3">
                                                <p className="font-extrabold text-2xl">{pop.name}</p>
                                                <p className="font-extrabold text-2xl">Rp. {pop.harga}</p>
                                            </div>
                                            <div className="flex">
                                                <div className="rounded-full ml-3 border-black">
                                                    <p>{pop.waktu}</p>
                                                </div>
                                                <div className="rounded-full ml-5 flex border-black">
                                                    <img src={Star} alt={Star} className="h-5 font-bold" />
                                                    <p className="font-bold">{pop.rating}</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between mt-3 p-3">
                                                <div className="font-poppins font-bold w-3/12">Stock {pop.jumlah}</div>
                                                <button disabled={pop.pesan === 0} onClick={() => {
                                                    setNumber(pop.pesan--)
                                                    pop.jumlah++
                                                }} className="w-2/12 bg-white border border-gray-200 rounded-sm">-</button>
                                                <div className="border w-1/12 p-2 text-center ">{pop.pesan}</div>
                                                <button disabled={pop.jumlah === 0} onClick={() => {
                                                    setNumber(pop.pesan++)
                                                    pop.jumlah--
                                                }} className="w-2/12 bg-white border border-gray-200 rounded-sm">+</button>
                                                <button onClick={() => {
                                                    setImg(pop.image)
                                                    setJumlah(pop.harga)
                                                    setTotal(pop.pesan)
                                                    setNama(pop.name)
                                                }} className="font-bold bg-yellow-500 w-3/12 rounded-xl">Pesan</button>
                                            </div>
                                        </div>
                                    )}
                                </Popup>
                                <div className="flex">
                                    <div className="flex"><img className="w-4 h-4 m-1" src={Star} alt={Star} /><p className="font-bold">{pop.rating}</p></div>
                                    <p className="font-bold px-20">Rp.{pop.harga}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}
