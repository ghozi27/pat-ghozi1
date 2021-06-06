import React from 'react';
import logo from '../img/header/logo.png';
import Gw from '../img/gw.png';
import Love from '../img/love.png';
import Box from '../img/box.png';
import Yellow from '../img/yellow.png';
export default function Header() {
    return (
        <React.Fragment>
            <section className="w-4/5 flex">
                <div className="w-1/3">
                    <img src={logo} alt={logo} />
                </div>
                <div className="w-2/3 relative">
                    <svg className="w-6 h-6 absolute top-3 left-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input type="text" placeholder="Cari makan Bang" className="w-4/6 text-lg bg-gray-100 rounded-2xl pl-10 py-3" />
                </div>
            </section>
            <section style={{background: 'rgba(252, 252, 252, 0.9)'}} className="w-1/5 flex pr-3 items-center justify-between">
                <div className=""><img className="w-4 h-4" src={Box} alt={Box} /></div>
                <div className=""><img src={Love} alt={Love} className="w-4 h-4" /></div>
                <div className="flex justify-center"><img src={Yellow} alt={Yellow} className="w-5 h-5" /><p className="absolute text-sm">3</p></div>
                <div className=""><img src={Gw} alt={Gw} className="w-8 h-8" /></div>
            </section>
        </React.Fragment>
    )
}