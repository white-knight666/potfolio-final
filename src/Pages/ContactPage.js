import React ,{useState}from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useHistory } from "react-router-dom";

function ContactPage() {
    
    const [isPending, setIsPending] = useState(false);
    const form = useRef();
    const history = useHistory();

    const sendEmail = (e) => {
        
        e.preventDefault();

        setIsPending(true);

        
        emailjs.sendForm('service_oryy6ge',
        'template_se0q2np',
        form.current,
        'Y2UyxWz25BNWZG3Px')
        .then((result) => {
            console.log(result.text);
            history.push('/potfolio-final');
            
            
        }, (error) => {
            console.log(error.text);
            setIsPending(false);
        });
    };
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled >
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <div className="contact-title">
                        <h4>Get In Touch</h4>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="form" >
                        <div className="form-field">
                            <label htmlFor="name"  >Enter your name*</label>
                            <input required type="text" id="name" name="user_name"/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="email"  >Enter your email*</label>
                            <input required type="email" id="email" name="user_email" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject"  >Enter your subject</label>
                            <input required type="text" id="subject" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">Enter your Message*</label>
                            <textarea name="message" id="textarea" cols="30" rows="10"></textarea>
                            {!isPending && <button  type="submit" value="Send">Send</button>}
                            {isPending && <button type="submit" value="Send">Email Sent</button>}
                            
                        </div>
                    </form>
                </div>
                <div className="right-content">
                    <ContactItem title={'Phone'} icon={phone} cont1={'+31685085291'}  />
                    <ContactItem title={'Email'} icon={email} cont1={'aw.sh2000@hotmail.com'} cont2={'awssheko4@gmail.com'} />
                    <ContactItem title={'Address'} icon={location} cont1={'80 Lange Kleiweg , Rijswik'} cont2={'Netherlands'} />
                    
                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                button{
                    display: block;
                    width: 200px; 
                    margin:0 auto;
                    background-color: #437fff;
                    height: 60px;
                    border-radius: 10px;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }

            
        }
    }
`;

export default ContactPage
