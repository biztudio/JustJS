import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

import footHoc from '../components/hoc/footbar-hoc';
import Copyright from '../components/copyright';

const wrappedOptionsComponent = ()=> (
    <div className = 'optionDemoLanguage'>
        <label>最喜欢的编程语言: </label>
        <label><input name="Language" type="radio" value="" />C# </label> 
        <label><input name="Language" type="radio" value="" />Javascript </label> 
        <label><input name="Language" type="radio" value="" />Java </label> 
        <label><input name="Language" type="radio" value="" />Python </label> 
        <label><input name="Language" type="radio" value="" />其它 </label> 

        <Copyright />
        
        <style jsx>{`
            .optionDemoLanguage{
                display: flex;
                justify-content: space-around;
            }
        `}</style>
    </div>
);

const FootTest = footHoc(wrappedOptionsComponent);

export default () => (
    <div>
        <Head>
            <title>HoC Demo 001</title>
        </Head>

        <Nav />

        <FootTest />
    </div>
);