import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import HeroSection from "../../components/Hero/Hero"
import GallerySection from "../../components/Gallery/Gallery"
import ContactSection from "../../components/ContactSection/ContactSection"
import LocationList from '../../components/LocationList/LocationList'
import Information from "../../components/Information/Information"
import Footer from "../../components/Footer/Footer"
import HeroI from "../../assets/Hero.jpg"
import MovingVideo from "../../assets/HomePage.mp4"
import Service from "../../components/Service/Service"

const Home = () => {

    const locations = [
        'Atlanta, GA',
        'Buckhead, GA',
        'Brookhaven, GA',
        'Chamblee, GA',
        'Fayetteville, GA',
        'Sandy Springs, GA',
        'Norcross, GA',
        'Duluth, GA',
        'Roswell, GA',
        'Marietta, GA',
        'Alpharetta, GA',
        'Kennesaw, GA',
        'Vinings, GA',
        'Johns Creek, GA',
        'Peachtree City, GA',
        'Newnan, GA'
      ];
    return (
        <div>
            <Header />
            <Navbar />
            <HeroSection
            backgroundImage={HeroI}
            title="The better moving company in Atlanta "
            paragraph="We take maintaining our reputation very seriously by ensuring that all our customers enjoy a smooth and hassle-free moving process, and you can trust that our team will work tirelessly to ensure it is completed with the utmost professionalism."
            buttonText="Call Us Now At 678-973-3935"
            buttonLink="tel:6789733935" 
            />
            <GallerySection />
            <Information

            mediaContent={MovingVideo}
            title='WELCOME TO MOVING RENOVATION'
            paragraph='We offer furniture pads, dollies, moving straps, shrink wrap, and the tools you need for a professional move. We only start the clock when we arrive at your home and  stop it when we have completely completed our work at your destination. 
            We make your next move less stressful by providing superior customer service and satisfaction throughout Georgia.'
            buttonText="Call Us Now At 678-973-3935"
            buttonLink="tel:6789733935"
            mediaType="video" />
            <Service />
            
            <ContactSection>
                <LocationList
                locations={locations}
                title="AREAS WE SERVE"
                description="WE SERVICE THE ENTIRE STATE OF GEORGIA"
                />
            </ContactSection>
                
            <Footer />
        </div>
    ) 
}

export default Home