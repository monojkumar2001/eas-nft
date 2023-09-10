
import ContactLeftItem from "../components/Contact/ContactLeftItem";
import "../Style/contact.css"
import ContactUs from "../components/Dashboard/ContactUs";
const ContactPage = () => {
  return (
    <>
      {/* ================= Contact Page ========== */}
      <section className="contact cpt-9">
        <div className="container">
          <div className="contact-wrapper row">
            <div className="col-lg-6 col-md-12">
              <ContactLeftItem />
            </div>
            <div className="col-lg-6 col-md-12">
              {/* <ContactRightItem /> */}
              <ContactUs/>
            </div>
          </div>
        </div>
        {/* <div className="contact-footer-img">
            <LazyLoadImage src="/images/contact/skyline-gradient.png"  alt="Contact Footer Image"/>
        </div> */}
      </section>
      <section className="contact-footer-img">
      </section>
    </>
  );
};

export default ContactPage;
