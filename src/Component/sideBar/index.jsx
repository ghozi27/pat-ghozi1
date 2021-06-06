import React from 'react';

export default function Sidebar(props) {
    let data = [
        {
            Image: props.img,
            Jumlah: props.jumlah,
            Total: props.total,
            Nama: props.nama,
        }
    ]
    return (
        <React.Fragment>
            <header className="h-3/10 w-full">
                <div className="mx-2">
                    <p className="text-xl font-black">Pesanan Saya</p>
                    <div style={{ background: "#6455C2" }} className="mt-4 rounded-xl h-36 w-full p-3">
                        <p className="text-white font-bold my-3">Dzulkifli</p>
                        <p className="text-white font-bold my-3">Rp.1.000.000,-</p>
                        <p className="text-white font-bold my-3">901289024891238123</p>
                    </div>
                </div>
            </header>
            <nav className="h-4/10 w-full flex-wrap">
                <div className="">
                    <ul className="flex w-full justify-between flex-wrap">
                        {data.map((dt, i) => (
                            dt.Jumlah * dt.Total === 0 ? "" : <li key={i} className="flex items-center justify-between w-full h-24 relative">
                                <img className="rounded-xl w-2/12 h-8 " src={dt.Image} alt={dt.Image} />
                                <div className="flex">
                                    {dt.Total}
                                </div>
                                <div>x</div>
                                <div className="font-bold">{props.nama}</div>
                                <div>
                                    {dt.Jumlah * dt.Total}
                                </div>
                            </li>

                        ))}
                        <li className="flex items-center justify-between w-11/12 h-24 relative">
                            <div className="mr-5 ml-5 items-center font-bold text-xl text-bold ">
                                Mars, Atata Tiga
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
            <section className="h-3/10 w-full">
                <div className="mx-2">
                    <div className="h-1/3 flex items-center justify-between">
                        <p className="font-bold text-sm">Total :</p>
                        <p className="text-xl font-extrablack">Rp{props.jumlah * props.total}</p>
                    </div>
                    <div className="items-center h-2/3 w-full justify-center my-10 mx-2">
                        <button style={{ background: "#FCD561" }} className="rounded-xl py-2 px-28 justify-center font-bold">Pesan</button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}