import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = ()  => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = e => {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value });
    }

    const handleSubmit = () => {
        setLoading(true);
        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message
        };

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            });
    }

    return (
        <>
        <h2 className="head-text">Take a coffee & chat with me</h2>
        <div className="app__footer-cards tw-w-3/5 max-[768px]:tw-w-full tw-flex tw-justify-evenly tw-items-center tw-flex-wrap-reverse tw-mt-16 tw-mb-8 tw-mx-8">
            <div className="app__footer-card tw-min-w-[290px] max-[450px]:tw-w-full tw-flex tw-flex-row tw-justify-start tw-items-center tw-my-4 tw-mx-0 tw-p-4 tw-rounded-[10px] tw-bg-[#fef4f5] tw-cursor-pointer">
                <img src={images.email} alt="email" className="tw-w-10 tw-h-10 tw-my-0 tw-mx-3" />
                <a href="mailto:cmb2897@gmail.com" className="p-text tw-font-medium">cmb2897@gmail.com</a>
            </div>
        </div>
        { !isFormSubmitted ? 
        <div className="app__footer-form app__flex tw-w-3/5 tw-flex-col tw-my-4 tw-mx-8 max-[768px]:tw-w-full max-[768px]:tw-my-4">
            <div className="app__flex">
                <input type="text" className="p-text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
                <input type="text" className="p-text" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
            </div>
            <div>
                <textarea 
                    className="p-text" 
                    placeholder="Your Message" 
                    value={message} 
                    name="message"
                    onChange={handleChangeInput}
                />
            </div>
            <button 
                type="button" 
                className="p-text tw-py-4 tw-px-8 tw-rounded-[10px] tw-border-none tw-bg-secondary tw-font-medium !tw-text-white tw-outline-none tw-mt-8 tw-cursor-pointer hover:tw-bg-[#2430af]" 
                onClick={handleSubmit}
            >
                {loading ? 'Sending' : 'Send Message' }
            </button>
        </div>
        :
        <div>
            <h3 className="head-text">Thank you for getting in touch.</h3>
        </div>
        }
        </>
    );
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer tw-flex-1 tw-w-full tw-flex-col'),
    'contact',
    'tw-bg-white'
);