import { css } from '@emotion/core';

export const navCss = css({
  display: 'flex',
  flexWrap: 'wrap'
});

export const navLeftColCss = css({
  flexGrow: 1,
  width: '30%',
  textAlign: 'right'
});

export const navCenterColCss = css({
  flexGrow: 1,
  width: '40%',
  textAlign: 'center',
  fontWeight: 'bold'
});

export const navRightColCss = css({
  flexGrow: 1,
  width: '30%',
  textAlign: 'left'
});
