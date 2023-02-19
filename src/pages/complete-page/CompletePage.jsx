import Contact from '../../components/contact/Contact.jsx';
import Experience from '../../components/experience/Experience.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Intro from '../../components/intro/Intro.jsx';
import Portfolio from '../../components/portfolio/Portfolio.jsx';
import Testimonials from '../../components/testimonials/Testimonials.jsx';
import Header from '../../components/header/Header.jsx';
import Topbar from '../../components/topbar/Topbar.jsx';

const CompletePage = () => {
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