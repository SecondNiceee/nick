import React from 'react';
import { contacts } from '../config/contacts.config';
import Contact from './Contact';

const ContactMeSection = () => {
    return (
        <section id='contacts' className='relative z-[50] md:pb-[100px] sm:pb-[60px] pb-[40px]'>
            <div className="container flex flex-col gap-[20px] sm:gap-[30px]">
                 <h2 className='section-title underline'>Contacts</h2>
                 <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                    {contacts.map( (contact, i) => <Contact key={i} clue={contact.clue} value={contact.value} isLink = {contact.isLink} /> )}
                 </div>
            </div>
        </section>
    );
};

export default ContactMeSection;