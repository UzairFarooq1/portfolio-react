import React, { useRef } from 'react';
import styled from 'styled-components';


const ContactSection = styled.section`
    padding: 2em;
`;

const ContactHeader = styled.div`
    text-align: center;
`;

const ContactForm = styled.form`
    max-width: 600px;
    margin: 0 auto;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const SubmitButton = styled.button`
    background-color: #007bff;
    color: #fff;
    text-align: center;
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;



const Contact = () => {
    const contactRef = useRef();

    return (
        <>
            <ContactSection id="contact" ref={contactRef}  className="contact animated">
                <ContactHeader>
                    <h2>Contact Me</h2>
                    <p>Feel free to reach out to me through the following form:</p>
                </ContactHeader>
                
                <ContactForm action="https://formsubmit.co/cyberguy2580@gmail.com" method="POST">
                    <Label htmlFor="name">Name:</Label>
                    <Input type="text" id="name" name="name" required />

                    <Label htmlFor="email">Email:</Label>
                    <Input type="email" id="email" name="email" required />

                    <Label htmlFor="message">Message:</Label>
                    <TextArea id="message" name="message" required />

                    <Input type="hidden" name="_template" value="box" />

                    <SubmitButton style={{margin: '0 auto'}} type="submit">Submit</SubmitButton>
                </ContactForm>
            </ContactSection>


        </>
    );
};

export default Contact;
