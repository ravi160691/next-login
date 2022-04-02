import React,{ useEffect } from "react";
import { useRouter } from 'next/router';
import { Button } from "@mui/material";

const Dashboard = () => {
const router = useRouter();

const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    router.push('/login');
}

useEffect(() => {
    const username = localStorage.getItem('username');
    if(username == null){
        router.push('/login');
    }
},[]);
    return(
        <>
            Welcome:
            <Button onClick={logout}>Logout</Button>
        </>
    );
}
export default Dashboard;