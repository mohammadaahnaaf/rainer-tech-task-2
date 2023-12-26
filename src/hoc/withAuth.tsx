import axios from "axios";
import { AppProps } from "next/app";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
    Component: any
}

export const withAuth = (Component: React.ComponentType<Props>) => {

    const AuthComponent: React.FC<Props> = ({ pageProps }: any) => {
        
        const router = useRouter()
        const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
        const [isAdmins, setIsAdmins] = useState<boolean>(false);

        useEffect(() => {

            let token = localStorage.getItem('accessToken')

            if (!isAdmins) {
                axios
                    .get('http://localhost:8000/api/user/current',
                        {
                            headers: {
                                // 'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`,
                            },
                        }
                    )
                    .then((res: any) => {
                        let topG = !!res.data
                        setIsLoggedIn(!!res.data);
                        setIsAdmins(!!res.data);
                        setTimeout(() => {
                            if (!topG) {
                                Router.push('/login')
                            }
                        }, 200)
                    })
                    .catch((error: any) => {
                        console.log(error);
                        Router.push('/login');
                    });
            }
        }, [isAdmins, router]);

        return isAdmins ? <Component {...pageProps} /> : <Loading />;
    };

    return AuthComponent;
};

function Loading() {
    return (
        <div className="h-screen w-full bg-black flex justify-center items-center">
            <div className=" rounded-full p-10 bg-[red]" />
        </div>
    )
}