'use client'

import React, {useEffect, useState} from "react";
import logo from "@/assets/icons/piepaylogo.svg";
import Image from "next/image";
import refresh from "@/assets/icons/refresh.svg"
import {useQuery} from "@tanstack/react-query";
import Refresh from "@/app/(post-verification)/[meetId]/payment/approve/[payId]/component/Refresh";
import {getQRCode} from "@/api/QRcode";
import QRBackground from "@/app/(post-verification)/[meetId]/payment/approve/[payId]/component/QRBackground";
import { getCookie } from '@/util/getCookie';

type Props = { payId: number }
export default function QRCode({payId}:Props) {
    const [token, setToken] = useState('');
    useEffect(() => {
        const token = getCookie('accessToken') as string;
        setToken(token);
    }, []);
    const [imageUrl, setImageUrl] = useState("");
    const { data: qr, isLoading, error } = useQuery({queryKey: ['QR',payId,token], queryFn: getQRCode}) ;
    useEffect(() => {
        if(!qr) return;
        const url = window.URL.createObjectURL(qr);
        console.log(url);
        setImageUrl(url);
    }, [qr]);

    return (<div className="w-[100%] h-[100%] flex flex-col items-center">
        <QRBackground/>
        <p className="font-bold text-3xl mb-5">QR 결제</p>


        <div className="w-[100%] h-[50%] flex flex-col rounded-2xl items-center justify-between bg-white p-5">
            <Image className="w-[20%]" src={logo} priority={true} alt='logo'/>
            <img src={imageUrl}/>

            <div>
                <p className="font-bold mb-3 ml-3">
                    점원에게 바코드를 보여주세요!
                    {/*<Refresh payId={payId}/>*/}
                </p>
            {/*    <div className="flex text-gray-500">*/}

            {/*    </div>*/}
            </div>
        </div>
    </div>)
}