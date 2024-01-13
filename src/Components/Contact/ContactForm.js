import {useState} from "react";
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import './style.css'

export const ContactForm = () => {
    const form = useRef();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [website, setWebsite] = useState("");
    const [message, setMessage] = useState("");
    const [formSubmitting, setFormSubmitting] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);
    const [error, setError] = useState({
        nameError: "",
        emailError: "",
        messageError: ""
    });

    const validateEmail = (emailaddress) =>
        emailaddress
            ? emailaddress.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
            : false;

    const validateForm = () => {
        let nameError = "";
        let emailError = "";
        let messageError = "";

        if (name === "" || name === null) nameError = "Please enter your name";
        if (!validateEmail(email))
            emailError = "Please enter a valid email address";
        if (message === "" || message === null)
            messageError = "Please enter your message";

        if (nameError !== "" || emailError !== "" || messageError !== "") {
            setError({
                nameError,
                emailError,
                messageError
            });
            return false;
        }

        return true;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("company", company);
        formData.append("website", website);
        formData.append("message", message);

        const formValidated = validateForm();

        if (formValidated) {
            setFormSubmitting(true);
            console.log("form submitted", {name, email, phone, company, website, message});

            //ONCE SUBMITTED SET ALL THE FIELDS EMPTY
            setFormSubmitting(false);
            setName("");
            setPhone("");
            setEmail("");
            setCompany ("");
            setWebsite("");
            setMessage("");
            setFormSuccess(true);
        
    
        emailjs.sendForm('service_x412fgh', 'template_4n2rnph', form.current, 'ksSoioYuZzx8U2xh_')
          .then((result) => {             
              console.log(result.text);
          }, (error) => {            
              console.log(error.text);
          });  

        }
    };

    return (
        <>
            {formSuccess && <p style={{color: "green"}}>Submitted Successfully!</p>}
            <form ref={form} className='ad-form' onSubmit={handleFormSubmit}>
                <div className='form-group'>
                    <input
                        className={error.nameError && ("hasError" || 'form-control')}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={() => setError({...error, nameError: ""})}
                        type="text"
                        placeholder="Name*"
                        value={name} name="user_name"
                    />
                    {error.nameError && <span className="errorMessage">{error.nameError}</span>}
                </div>
                <div className='form-group'>
                    <input
                        className={error.emailError && "hasError"}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={() => setError({...error, emailError: ""})}
                        type="Email"
                        placeholder="Email*"
                        value={email} name="user_email"
                    />
                    {error.emailError && <span className="errorMessage">{error.emailError}</span>}

                </div>
                <div className='form-group'>
                    <input
                        className={error.phoneError && "hasError"}
                        onChange={(e) => setPhone(e.target.value)}
                        onKeyDown={() => setError({...error, phoneError: ""})}
                        type="number"
                        placeholder="Phone"
                        value={phone} name="phone"
                    />
                    {error.phoneError && <span className="errorMessage">{error.phoneError}</span>}
                </div>
                <div className='form-group'>
                    <input
                        className={error.companyError && "hasError"}
                        onChange={(e) => setCompany(e.target.value)}
                        onKeyDown={() => setError({...error, companyError: ""})}
                        type="text"
                        placeholder="Company"
                        value={company} name="company"
                    />
                    {error.companyError && <span className="errorMessage">{error.companyError}</span>}
                </div>
                <div className='form-group'>
                    <input
                        className={error.websiteError && "hasError"}
                        onChange={(e) => setWebsite(e.target.value)}
                        onKeyDown={() => setError({...error, websiteError: ""})}
                        type="url"
                        placeholder="Website"
                        value={website} name="website"
                    />
                    {error.websiteError && <span className="errorMessage">{error.websiteError}</span>}
                </div>
                <div className='form-group'>
                <textarea
                    className={error.messageError && "hasError"}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={() => setError({...error, messageError: ""})}
                    rows="5" placeholder="Comment*" value={message}
                name="message"/>
                    {error.messageError && (
                        <span className="errorMessage mt-0">{error.messageError}</span>
                    )}

                </div>

                <input className='btn btn-primary w-100' type="submit" value={formSubmitting ? "Submitting" : `Submit`}/>
            </form>
        </>
    )
}
export default ContactForm;
