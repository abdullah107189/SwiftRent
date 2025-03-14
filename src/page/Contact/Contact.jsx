import PageHeader from "../../components/shared/PageHeader";
import Card from "./Card";
import Carousel from "./Carousel";
import CarParallax from "./CarParallax";
import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactFrom";

const Contact = () => {
  return (
    <div>
      <PageHeader
        subTitle={"Get in touch"}
        titleWhite={"Contact"}
        titleOrange={"Us"}
        line={false}
      ></PageHeader>
      <div className="mxw">
        <Card />
        <ContactForm />
      </div>
      <CarParallax />
    </div>
  );
};

export default Contact;
