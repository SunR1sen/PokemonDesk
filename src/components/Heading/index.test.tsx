/**
 * @jest-environment jsdom
 */

import { render, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Heading, {HeadingTypes} from './index';

describe('Heading', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('render', () => {
    act(() => {
      render(<Heading />, container);
    });

    expect(container?.innerHTML).toBeDefined();
  });

  it('render with children', () => {
    act(() => {
      render(<Heading type={HeadingTypes.h2}>Children text</Heading>, container);
    });

    expect(container?.querySelector('h2')).not.toBeNull();
  });
});
