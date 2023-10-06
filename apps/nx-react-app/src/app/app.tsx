// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">COL</div>
          <div className="col">COL</div>
          <div className="col">COL</div>
          <div className="col">COL</div>
        </div>
      </div>
      <NxWelcome title="nx-react-app" />
    </div>
  );
}

export default App;
