
const baseurl = process.env.NEXT_PUBLIC_SERVER_URL;
export const clientPost = async (path, data) => {


    const res = await fetch(`${baseurl}${path}`,
        {
            method: "POST", // Specify the HTTP method
            headers: {
                "Content-Type": "application/json", // Tell the server you are sending JSON
            },
            body: JSON.stringify(data), // 



        }
    );
    const result = await res.json();
    return result;

}

export const clientGet = async (path) => {

    const res = await fetch(`${baseurl}path`);
    const resjson = await res.json();
    return resjson;

}