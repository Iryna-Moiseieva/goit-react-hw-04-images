import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow, Image } from './Modal.styles.js';
import Loader from 'components/Loader';

const modalRoot = document.querySelector('#modal-root');
const html = document.querySelector('html');

export default function Modal({ onClose, imageSrcModal }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    html.classList.add('disable-scroll');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      html.classList.remove('disable-scroll');
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        {!isLoaded && <Loader absolute />}
        <Image
          src={imageSrcModal}
          alt="Large"
          onLoad={() => setIsLoaded(true)}
        />
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  imageSrcModal: PropTypes.string.isRequired,
};
