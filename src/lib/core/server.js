
const baseurl = process.env.NEXT_SERVER_URL;
export const serverPost = async (path, data) => {


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

}

export const serverGet = async (path) => {
    const res = await fetch(`${baseurl}${path}`);
    const resjson = res.json();
    return resjson;

}
