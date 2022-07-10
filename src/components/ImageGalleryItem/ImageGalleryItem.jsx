import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styles.js';

export default function ImageGalleryItem({ src, alt, onClick }) {
  return (
    <GalleryItem onClick={onClick}>
      <GalleryImage src={src} alt={alt} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
