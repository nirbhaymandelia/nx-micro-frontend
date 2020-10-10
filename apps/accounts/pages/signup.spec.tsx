import React from 'react';
import { render } from '@testing-library/react';

import Signup from './signup';

describe('Signup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Signup />);
    expect(baseElement).toBeTruthy();
  });
});
