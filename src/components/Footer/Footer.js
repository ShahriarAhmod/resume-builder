import React from 'react';
import styles from './Footer.css';
const Footer = () => {
    return (
        <div>
            <p className="text">
          Copyright &copy; {new Date().getFullYear()}{" "}
          by <span className="text-span">Shahriar</span>
        </p>
        </div>
    );
};

export default Footer;