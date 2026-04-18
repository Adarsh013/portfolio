import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2>Contact Us / सम्पर्क करें</h2>
            <form>
                <label>
                    Name / नाम:
                    <input type="text" name="name" required />
                </label>
                <br />
                <label>
                    Email / ईमेल:
                    <input type="email" name="email" required />
                </label>
                <br />
                <label>
                    Message / संदेश:
                    <textarea name="message" required></textarea>
                </label>
                <br />
                <button type="submit">Send / भेजें</button>
            </form>
            <div>
                <h3>Contact Information / संपर्क विवरण</h3>
                <p>Email: example@example.com</p>
                <p>Phone: +1234567890</p>
            </div>
            <div>
                <h3>Follow Us / हमें फॉलो करें</h3>
                <a href="https://github.com/Adarsh013">GitHub</a>
                <a href="https://www.linkedin.com/in/adars013/">LinkedIn</a>
                <a href="https://twitter.com/adars013">Twitter</a>
            </div>
        </div>
    );
};

export default Contact;