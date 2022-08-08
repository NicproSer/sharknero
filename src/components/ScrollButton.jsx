import React, { useState } from 'react'


export const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
    }
    else if (scrolled <= 300) {
        setVisible(false);
    }
};

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('scroll', toggleVisible);

    return (
      <button type='button' className='btn btn-dark' id='button-top' style={{display: visible ? "inline" : 'none'}}>
        <i class="bx bx-chevron-up" onClick={scrollToTop}></i>
      </button>
    );
}
