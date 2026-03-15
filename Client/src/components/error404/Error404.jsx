import styles from './Error404.module.css';

export default function Error404() {
  return (
    <div className={ styles.container }>
      <h1 className={ styles.title }>404</h1>
      <h2 className={ styles.subtitle }>Page Not Found</h2>
      <p className={ styles.message }>
        The page you are looking for does not exist in this dimension.
      </p>
    </div>
  );
}
