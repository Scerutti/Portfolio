import Contact from '../../components/contact/Contact';
import Experience from '../../components/experience/Experience';
import Footer from '../../components/footer/Footer';
import Intro from '../../components/intro/Intro';
import Portfolio from '../../components/portfolio/Portfolio';
import Testimonials from '../../components/testimonials/Testimonials';
import Header from '../../components/header/Header';
import Topbar from '../../components/topbar/Topbar';
import React from 'react';

const CompletePage: React.FC<{}> = () => {
    return (
        <>
            <Header />
            <Topbar />
            <Intro />
            <Experience />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default CompletePage