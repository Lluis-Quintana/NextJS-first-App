/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import styles from './styles.module.css';

export default function Avatar({
  alt, src, text, withText
}) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} alt={alt} src={src} title={alt} />
      {withText && <strong>{text || alt}</strong>}
    </div>
  );
}
