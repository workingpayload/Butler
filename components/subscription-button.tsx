"use client";

import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";

interface SubscriptionButtonProps {
    isPro : boolean;
};

export const SubscriptionButton = ({isPro = false} : SubscriptionButtonProps) => {
    const  [loading, setLoading] = React.useState(false);    
    
    const onClick = async() => {
            try{
                setLoading(true);
                const response = await axios.get("/api/stripe")

                window.location.href = response.data.url;
            }
            catch(error){
                toast.error("Something went wrong");
            }
            finally{
                setLoading(false);
            }
        }
    return (
            <Button disabled={loading} variant={isPro ? "default" : "premium"}
            onClick={onClick}>
                {isPro? "Manage Subscription" : "Upgrade to Pro"}
                {!isPro && <Zap
                className="x-4 h-4 ml-2 fill-white"/>}
            </Button>
        )
}