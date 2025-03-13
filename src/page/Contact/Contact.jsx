import Card from './Card';
import Carousel from './Carousel';
import CarParallax from './CarParallax';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactFrom';

const Contact = () => {
  return (
    <div>
      <ContactBanner />
      <div className="mxw">
        <Card />
        <ContactForm />
      </div>
      <CarParallax />
    </div>
  );
};

export default Contact;
