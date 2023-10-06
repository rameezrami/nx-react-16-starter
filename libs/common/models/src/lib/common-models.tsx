import styles from './common-models.module.scss';

/* eslint-disable-next-line */
export interface CommonModelsProps {}

export function CommonModels(props: CommonModelsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CommonModels!</h1>
    </div>
  );
}

export default CommonModels;
