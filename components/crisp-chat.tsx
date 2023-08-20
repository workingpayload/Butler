"use client";

import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("735a6d02-015c-4126-b5cd-3754b5e04772")
    },[]);

    return null;
}