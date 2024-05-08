import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormSubmitted(true);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div
            style={{
                maxWidth: '600px',
                margin: '0 auto',
                padding: '20px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
            }}
        >
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
            {formSubmitted ? (
                <div
                    style={{
                        backgroundColor: '#d4edda',
                        border: '1px solid #c3e6cb',
                        color: '#155724',
                        padding: '15px',
                        borderRadius: '5px',
                        marginTop: '20px'
                    }}
                >
                    <p>Thank you for reaching out! We will get back to you soon.</p>
                </div>
            ) : (
                <>
                    <div style={{ marginBottom: '20px' }}>
                        <p>Company Name: Sierra Digital</p>
                        <p>Address:  4th Floor, Shri Parvathy Tech Park, 4 & 5 Krishnaswamy Road, Dr Krishnasamy Mudaliyar Rd, opp. to Devi Apartment, near to Kikani School, Brookefields, Colony, R.S. Puram, Coimbatore, Tamil Nadu 641002</p>
                        <p>Phone: 0422 350 2804</p>
                        <p>Email: cbe@sierradigitalinc.com</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    fontSize: '16px',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    boxSizing: 'border-box'
                                }}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    fontSize: '16px',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    boxSizing: 'border-box'
                                }}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold' }}>
                                Message:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    fontSize: '16px',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    boxSizing: 'border-box',
                                    height: '120px'
                                }}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '12px 20px',
                                backgroundColor: '#007bff',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                fontSize: '16px',
                                cursor: 'pointer'
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </>
            )}
        </div>
  );
};


export default ContactUs;
