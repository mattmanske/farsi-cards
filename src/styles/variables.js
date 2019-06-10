//-----------  Imports  -----------//

import { rgba, darken, lighten } from 'polished'

//-----------  Definitions  -----------//

export const emBase = 14
export const gutter = 1.25

export const colors = {
  yellow       : '#E9A845',
  red          : '#e60012',
  geeen        : '#95CF49',
  blue         : '#0092e2',
  blueDark     : '#4a90e2',
  blueLight    : '#d3efff',
  blueDarker   : '#11296D',
  blueLighter  : lighten(0.05, '#d3efff'),
  blueDarkest  : darken(0.05, '#11296D'),
  blueLightest : lighten(0.071, '#d3efff'),
  purple       : '#918da5',
  purpleDark   : '#172032',
  brown        : '#4a4a4a',
  brownDark    : '#343f51',
  gray         : '#cccccc',
  grayDark     : '#9b9b9b',
  grayLight    : '#e5e5e5',
  grayDarker   : '#666666',
  grayLighter  : '#efeef1',
  grayLightest : lighten(0.03, '#efeef1'),
}

//-----------  Style Variables  -----------//

export default Object.assign({}, colors, {
  white             : '#ffffff',
  black             : '#172032',

  fontFamily        : '-apple-system, BlinkMacSystemFont, sans-serif',
  fontWeight        : 500,
  fontWeightBold    : 600,
  fontWeightLight   : 'normal',
  fontWeightBolder  : 700,
  fontWeightLighter : 200,

  emBase            : `${emBase}px`,
  fontSizeSm        : `0.925em`,
  fontSizeLg        : `1.575em`,
  radius            : '3px',
  radiusSm          : '2px',
  radiusLg          : '4px',
  radiusFull        : '10rem',
  border            : `1px solid ${rgba(colors.gray, 0.75)}`,
  borderDark        : `1px solid ${rgba(colors.gray, 0.65)}`,
  borderLight       : `1px solid ${rgba(colors.gray, 0.85)}`,
  shadow            : '0 0 2rem 0.25rem rgba(0, 0, 0, 0.12)',
  shadowDark        : '0 0 2rem 0.25rem rgba(0, 0, 0, 0.18)',
  shadowLight       : '0 0 1rem 0.25rem rgba(0, 0, 0, 0.07)',
  shadowLighter     : '0.2rem 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.05)',
  shadowText        : '1px 3px 10px rgba(0,0,0,0.5)',
  transition        : '0.15s ease-in-out',

  gutter            : `${gutter}em`,
  gutterLg          : `${gutter * 2.33}em`,
  gutterSm          : `${gutter / 1.25}em`,

  maxWidth          : '100rem',
  stopWidth         : '78rem',
  largeWidth        : '62rem',
  blockWidth        : '48rem',
  compactWidth      : '42rem',
  mediumWidth       : '34rem',
  smallWidth        : '26rem',
})
