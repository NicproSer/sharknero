import React from 'react'
import '../../index.css';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Banner } from './Banner';
import { ScrollButton } from '../ScrollButton';
import { Nosotros } from './Nosotros';
import { Proceso } from './Proceso';
import { Card } from './Card';
import { Blog } from './Blog';
import { Form } from './Form';
import { Preloader } from '../Preloader';



class Home extends React.Component{
    render(){
        return(
            <>
            <Preloader/>
            <Navbar/>
            <Banner/>
            <Nosotros/>
            <Proceso/>
            <Card/>
            <Blog/>
            <Form/>
            <ScrollButton/>
            <Footer/>
            </>
        )
    }
}

export default Home;
