import Card from './Card';
import Carousel from './Carousel';
import CarParallax from './CarParallax';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactFrom';

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto relative">
      <ContactBanner />
      <Card />
      <ContactForm />
      <CarParallax />
      <Carousel />
    </div>
  );
};

export default Contact;
