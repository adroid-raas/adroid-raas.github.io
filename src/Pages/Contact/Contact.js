import {useRef} from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_x412fgh', 'template_4n2rnph', form.current, 'ksSoioYuZzx8U2xh_')
          .then((result) => {
             alert("Your message send successfully!");
              console.log(result.text);
          }, (error) => {
            alert("Please enter all fields");
              console.log(error.text);
          });
          e.target.reset();        
      };

    return (
        <>
            <h1>Contact Page</h1>
            <section>
            <div className="container">
                <h2>Contact form</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="First Name" name="user_name" required></input>
                    <br></br><br></br>
                    <input type="text" placeholder="Email" name="user_email" required></input>
                    <br></br><br></br>
                    <input type="text" placeholder="Subject" name="subject" required></input>
                    <br></br><br></br>
                    <textarea name="message" cols="20" rows="5" required></textarea>
                    <br></br><br></br>
                    <button type="submit" name="submit">Submit</button>
                    <br></br><br></br>
                </form>
            </div>

            </section>

        </>
    )
}

export default Contact
