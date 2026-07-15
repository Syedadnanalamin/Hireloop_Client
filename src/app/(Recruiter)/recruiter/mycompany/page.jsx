
import React from 'react';
import MyCompany from './MyCompany';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import MyCompanyDetails from './MyCompanyDetails';


const page = async () => {

    const session = await auth.api.getSession({

        headers: await headers()
    });

    const recruiterId = session?.user?.id;
    const Mycompany = await fetch(`${process.env.NEXT_SERVER_URL}/recruiter/mycompany/${recruiterId}`);


    const MycompanyDetails = await Mycompany.json();
    console.log(MycompanyDetails);


    return (
        <div>
            {MycompanyDetails ? <MyCompanyDetails company={MycompanyDetails}></MyCompanyDetails> : <MyCompany></MyCompany>}
        </div>
    );
};

export default page;