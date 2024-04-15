'use client';

import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import UploadModel from "@/components/UploadModel";
import { useEffect, useState } from "react";

const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    // to prevent hydration error i.e it does not load 
    // as server side component
    useEffect(() => {
        setIsMounted(true);
    },[])

    if(!isMounted) {
        return null;
    }

    return (
        <>
           <AuthModal />
           <UploadModel />
        </>
    )
}

export default ModalProvider;