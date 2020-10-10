import React from 'react';
import { render } from '@testing-library/react';

import Signin from './signin';

describe('Signin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Signin />);
    expect(baseElement).toBeTruthy();
  });
});
