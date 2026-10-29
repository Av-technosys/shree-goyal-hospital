import HomeAnimations from "@/components/home/HomeAnimations";
import Hero from "@/components/home/Hero";
import CareHighlights from "@/components/home/CareHighlights";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Doctors from "@/components/home/Doctors";
import Appointment from "@/components/home/Appointment";
import Blogs from "@/components/home/Blogs";
import Testimonials from "@/components/home/Testimonials";
import Location from "@/components/home/Location";

export default function Home() {
  return <HomeAnimations>
    <Hero />
    <CareHighlights />
    <About />
    <Services />
    <WhyChooseUs />
    <Doctors />
    <Appointment />
    <Blogs />
    <Testimonials />
    <Location />
  </HomeAnimations>;
}
