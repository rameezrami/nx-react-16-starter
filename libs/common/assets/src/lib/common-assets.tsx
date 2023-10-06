import styles from './common-assets.module.scss';

/* eslint-disable-next-line */
export interface CommonAssetsProps {}

export function CommonAssets(props: CommonAssetsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CommonAssets!</h1>
    </div>
  );
}

export default CommonAssets;
