import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

 function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v3ys3i9', 'template_v21wawn', form.current, {
        publicKey: 'kx0S0MVlBLS5w45Wr',
      })
      .then(
        () => {
            Swal.fire(
                'Sent!',
                'Your message has been sent successfully.',
                'success'
            );
            e.target.reset();
        },
        (error) => {
            Swal.fire(
                'Error!',
                'There was an error sending your message: ' + error.text,
                'error'
            );
        },
      );
  };

  return (
    <>
        <div className="container my-5 ">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3 text-start">
                <label htmlFor="user_name" className="form-label" >Name</label>
                <input type="text" className="form-control" id="user_name" name="user_name" required />
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="user_email" className="form-label">Email</label>
                <input type="email" className="form-control" id="user_email" name="user_email" required />
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
            </div>
            <div className="text-start">
            <button type="submit" className="btn btn-primary ">Send</button>
            </div>
        </form>


            

            </div>

    </>
  );
};
export default Contact

