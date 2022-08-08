import React, {useState} from 'react'


export const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toogleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 200){
            setVisible(true)
        }
        else if(scrolled < 200){
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', toogleVisible);

  return (
    <button
      className="btn btn-secondary"
      id="button-top"
      style={{ display: visible ? "inline" : "none" }}
    >
      <i class="bx bx-chevron-up" onClick={scrollToTop}></i>
    </button>
  );
}