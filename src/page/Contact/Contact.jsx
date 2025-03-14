import PageHeader from "../../components/shared/PageHeader";
import Card from "./Card";
import CarParallax from "./CarParallax";
import ContactForm from "./ContactFrom";
import contactBgPhoto from "../../assets/Bentley-Flying-Spur-car.jpg";

const Contact = () => {
  return (
    <div>
      <PageHeader
        subTitle={"Get in touch"}
        titleWhite={"Contact"}
        titleOrange={"Us"}
        image={contactBgPhoto}
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
