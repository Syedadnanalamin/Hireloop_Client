export const managejobs = async () => {
    const res = await fetch(`${process.env.NEXT_SERVER_URL}/recruiter/managejobs`);
    return res.json();

}