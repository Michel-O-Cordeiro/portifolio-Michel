'use client';
import React, { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import { AiFillMail } from 'react-icons/ai';
import { FaHeadphones } from 'react-icons/fa';
import { Hind } from 'next/font/google';
import { ToastClassName, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const hind = Hind({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export default function ContactMe() {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const clearState = () => {
        setState({
            name: '',
            email: '',
            message: '',
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state),
            });

            const data = await res.json();
            setLoading(false);
            clearState();

            if (data.error) {
                toast(data.message);
            } else {
                toast(data.message);
            }
        } catch (error) {
            setLoading(false);
            clearState();
            toast('Algo deu errado. Por favor, tente novamente.');
        }

        clearState();
    };

    return (
        <React.Fragment>
            <ToastContainer />
            <div className='flex flex-col items-center justify-center w-full pt-[80px] pb-[80px] mt-4'>
                <div className='flex flex-col items-center justify-center bg-[url("/offices.png")] bg-cover bg-center w-full h-[400px]'>
                    <div className='flex flex-col items-center justify-center w-full h-full bg-[#223740]/70 backdrop:brightness-50'>
                        <div className='text-center bg-[#8234E9] py-[5px] px-[10px] tracking-wide uppercase font-semibold text-[20px] text-white rounded-lg'>
                            <a href='#contact' className='cursor-pointer'>
                                Contato
                            </a>
                        </div>
                        <div className='mt-[10px]'>
                            <h1 className='recoletaBold text-5xl text-white p-2 text-center tracking-wide'>Fale comigo!</h1>
                        </div>
                        <div className='flex justify-center text-center mt-[10px] md:w-[700px]'>
                            <p className='text-white font-[200] text-center text-xl p-2'>
                                Você está procurando por um desenvolvedor profissional e responsável? Muito Prazer! Espero que tenha gostado da minha página.
                                Estou disponível para trabalhos remotos, freelancers e projetos de longo prazo. Deixe-me uma mensagem e diga como posso ajudar.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='px-[20px]'>
                    <div className='sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-full'>
                        <div className='flex flex-col flex-1 xl:flex-row gap-[20px]'>
                            <div
                                className='flex flex-col items-center py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white'
                                style={{ boxShadow: '#8234E9 -1px 1px 10px 0px' }}
                            >
                                <div className='flex items-center gap-[15px]'>
                                    <div>
                                        <FaLocationDot size={40} color='#8234E9' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='text-[#8234E9] text-[14px]'>
                                            <p>Localização</p>
                                        </div>
                                        <div className='font-semibold text-[20px] tracking-wide'>
                                            <p>Brasil</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className='text-[#666666] font-[200] text-center mt-1 transition-colors duration-300 hover:text-white group'>
                                        Belo Horizonte, MG
                                    </p>
                                </div>
                            </div>

                            <div
                                className='flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white'
                                style={{ boxShadow: '#8234E9 -1px 1px 10px 0px' }}
                            >
                                <div className='flex items-center gap-[15px]'>
                                    <div>
                                        <FiPhoneCall size={40} color='#8234E9' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='text-[#8234E9] text-[14px]'>
                                            <p>Telefone</p>
                                        </div>
                                        <div className='font-semibold text-[20px] tracking-wide'>
                                            <p>WhatsApp</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className='text-[#666666] font-[200] text-center mt-1 transition-colors duration-300 hover:text-white group'>
                                        (38) 9 9153-6970
                                    </p>
                                </div>
                            </div>

                            <div
                                className='flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white'
                                style={{ boxShadow: '#8234E9 -1px 1px 10px 0px' }}
                            >
                                <div className='flex items-center gap-[15px]'>
                                    <div>
                                        <AiFillMail size={40} color='#8234E9' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='text-[#8234E9] text-[14px]'>
                                            <p>Escreva-me</p>
                                        </div>
                                        <div className='font-semibold text-[20px] tracking-wide'>
                                            <p>E-mails</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className='text-[#666666] font-[200] transition-colors duration-300 hover:text-white group '>
                                        cadastromichel@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
