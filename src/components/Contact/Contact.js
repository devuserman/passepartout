import './Contact.css'; 
import Header from '../Header/Header';
import Footer from '../Footer//Footer';
import ContactForm from '../ContactForm/ContactForm';
import CarteMaps from '../CarteMaps/CarteMaps';
import CommentSlideshow from '../CommentSlideshow//CommentSlideshow';

function Contact () {
    return (
      <>
        <Header />
        <section className="box-contact">
        <div className="container-carte">
      <CarteMaps />
        </div>
        <div className="form-container">
        <img src="/images/reservation.png" alt="" className="image-temps" />
            <ContactForm />
          </div>
     
          </section>
          <div className="container-avis">
    <CommentSlideshow />
    </div>
        <Footer />
      </>
    );
}

export default Contact;
