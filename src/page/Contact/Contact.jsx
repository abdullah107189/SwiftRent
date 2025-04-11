import PageHeader from "../../components/shared/PageHeader";
import Card from "./Card";
import CarParallax from "./CarParallax";
import ContactForm from "./ContactFrom";
import contactBgPhoto from "../../assets/Bentley-Flying-Spur-car.jpg";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us | SwiftRent</title>
        <meta
          name="description"
          content="Have questions or need help with a car booking? Contact Rentax today through our form or reach out directly. We're here to assist you!"
        />
      </Helmet>

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
