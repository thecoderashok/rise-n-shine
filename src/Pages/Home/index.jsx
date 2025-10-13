
// import Blog from '../../Component3Classic/Blog/Blog';
// import Brand from '../../Component3Classic/Brand/Brand';
// import ContentSlider from '../../Component3Classic/ContentSlider/ContentSlider';
// import Counter from '../../Component3Classic/Counter/Counter';
// import Feature from '../../Component3Classic/Feature/Feature';
// import LatestWork from '../../Component3Classic/LatestWork/LatestWork';
// import Pricing from '../../Component3Classic/Pricing/Pricing';
// import Service from '../../Component3Classic/Service/Service';
// import TeamMember from '../../Component3Classic/TeamMember/TeamMember';
// import Testimonial from '../../Component3Classic/Testimonial/Testimonial';
// import Work from '../../Component3Classic/Work/Work';

import About from "./components/About";
import Banner from "./components/Banner";
import Service from "./components/Service/Service";
import WhyChoose from "./components/WhyChoose/WhyChoose";

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <WhyChoose />
            <Service />
            {/* <Brand />
            <Feature />
            <Service />
            <ContentSlider />
            <About />
            <Counter />
            <Work />
            <Pricing />
            <LatestWork />
            <TeamMember />
            <Testimonial />
            <Blog /> */}
        </>
    );
};

export default Home;
