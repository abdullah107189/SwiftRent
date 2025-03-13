import Card from "./Card";
import Carousel from "./Carousel";
import CarParallax from "./CarParallax";
import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactFrom";

const Contact = () => {
  return (
    <div className="relative">
      <ContactBanner />
      <div className="mxw">
        <Card />
        <ContactForm />
        <CarParallax />
        <Carousel />
      </div>
    </div>
  );
};

export default Contact;
