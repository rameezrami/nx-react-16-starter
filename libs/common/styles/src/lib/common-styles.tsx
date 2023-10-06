import styles from './common-styles.module.scss';

/* eslint-disable-next-line */
export interface CommonStylesProps {}

export function CommonStyles(props: CommonStylesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CommonStyles!</h1>
    </div>
  );
}

export default CommonStyles;
