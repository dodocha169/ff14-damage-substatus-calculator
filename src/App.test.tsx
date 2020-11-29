import React from 'react';
import { render, screen } from '@testing-library/react';
import {calculateDirectHit} from './DirectHit';



test('ダイレクトヒットの数値による発動率', () => {
  expect(0.02).toBe(calculateDirectHit(380, 120));
  expect(0.03).toBe(calculateDirectHit(380, 180));
});