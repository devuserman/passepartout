import './Contact.css'; 
import Header from '../Header/Header';
import Footer from '../Footer//Footer';
import ContactForm from '../ContactForm/ContactForm';
import CarteMaps from '../CarteMaps/CarteMaps';

function Contact () {
    return (
      <>
        <Header />
        <section className="box-contact">
        <div className="container-carte">
      <CarteMaps />
        </div>
        <div className="form-container">
            <ContactForm />
          </div>
          </section>
        <Footer />
      </>
    );
}

export default Contact;
