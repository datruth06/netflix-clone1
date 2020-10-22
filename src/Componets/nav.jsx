import React, {useState, useEffect} from 'react';
import './nav.style.css';


function Nav() {
    const [show, handleShow] = useState(false);    
    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100){
                handleShow(true);
                
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };

    }, []);

    return(
    <div className={`nav ${show && "nav__black"}`}>
        <img 
            className='nav__logo'
            src= "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"//"http://upload.wikimedia.org/wikipedia/commons/0/0f/"
            alt='Netflix Logo'
        />

        

    </div>
    )
};

export default Nav;