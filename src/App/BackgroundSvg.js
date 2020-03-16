import React from "react";

export default () => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <defs>
            <linearGradient id='myGradient'>
                <stop offset='0%' stopColor='#ff3349' />
                <stop offset='100%' stopColor='#ef01dd' />
                <animateTransform
                    attributeName='gradientTransform'
                    dur='3s'
                    type='rotate'
                    from='0 .5 .5'
                    to='360 .5 .5'
                    repeatCount='indefinite'
                />
            </linearGradient>
        </defs>
        <path
            fill='url(#myGradient)'
            fillOpacity='1'
            d='M0,32L40,64C80,96,160,160,240,160C320,160,400,96,480,74.7C560,53,640,75,720,90.7C800,107,880,117,960,133.3C1040,149,1120,171,1200,181.3C1280,192,1360,192,1400,192L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z'
        ></path>
    </svg>
);
