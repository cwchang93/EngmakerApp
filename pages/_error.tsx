import React from 'react';
import Error from 'next/error';
// import fetch from 'isomorphic-unfetch';

// const Page = ({ errorCode, stars }: { errorCode: any; stars: any }) => {
const Page = () => {
    // if (errorCode) {
    //     return <Error statusCode={errorCode} />;
    // }
    // console.log(errorCode, stars);
    return <Error statusCode={404} />;
};

// Page.getInitialProps = async () => {
//     const res: any = await fetch('https://api.github.com/repos/zeit/next.js');
//     console.log(res);
//     const errorCode = res.statusCode > 200 ? res.statusCode : false;
//     const json = await res.json();

//     return { errorCode, stars: json.stargazers_count };
// };

export default Page;
