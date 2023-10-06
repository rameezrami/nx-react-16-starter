import { render } from '@testing-library/react';

import CommonStyles from './common-styles';

describe('CommonStyles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonStyles />);
    expect(baseElement).toBeTruthy();
  });
});
