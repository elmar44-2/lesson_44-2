import React from 'react';
import styles from './ProductCard.module.css'; 

function ProductCard({ title, description, imageUrl }) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default ProductCard;
