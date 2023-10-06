import { render } from '@testing-library/react';

import CommonAssets from './common-assets';

describe('CommonAssets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonAssets />);
    expect(baseElement).toBeTruthy();
  });
});
