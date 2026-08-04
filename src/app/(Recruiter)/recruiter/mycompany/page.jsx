
import React from 'react';
import MyCompany from './MyCompany';
import { getServerSession } from '@/lib/auth/server-session';
import MyCompanyDetails from './MyCompanyDetails';


const page = async () => {

    const session = await getServerSession();

    const recruiterId = session?.user?.id;
    const Mycompany = await fetch(`${process.env.NEXT_SERVER_URL}/recruiter/mycompany/${recruiterId}`);


    const MycompanyDetails = await Mycompany.json();
    console.log(MycompanyDetails);


    return (
        <div>
            {MycompanyDetails ? <MyCompanyDetails company={MycompanyDetails}></MyCompanyDetails>
                :
                <MyCompany></MyCompany>}
        </div>
    );
};

export default page;