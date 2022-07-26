import { useEffect } from "react";


const PageNotFound = () =>{

    useEffect(()=>{
        document.title ='Instagra - Page Not Found';
    }, []);

    return (
    <div className="bg-gray-background">
        <div className="mx-auth max-w-screen-lg">
            <p className="text-center text-2xl">Not Found......</p>
        </div>
    </div>)
};

export default PageNotFound;