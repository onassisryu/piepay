import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import theme from '@/styles/theme/theme';
import { setTableContainer } from '@/styles/meet/meetMain.css';

export const accountContainer = style({
  height: '7rem',
});

export const detailHeader = style({
  width: '100%',
  height: '5rem',
  '@media': {
    'screen and (min-width: 768px)': {
      width: '40%',
      left: '30%',
    },
  },
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 10,
  top: 0,
  left: 0,
  backgroundColor: theme.layout,
});

globalStyle(`${detailHeader} > h1`, {
  fontSize: '1.5rem',
});

globalStyle(`${detailHeader} > button`, {
  position: 'absolute',
  top: '30%',
  left: '6%',
});


const categoryLayout = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  fontSize: '1rem',
  marginTop: '10%',
  marginBottom: '3%',
});

export const categoryContainer = styleVariants({
  default: [categoryLayout],
  smallMargin: [
    categoryLayout,
    {
      marginTop: '6.5%',
    },
  ],
});

globalStyle(
  `${categoryContainer.default} > h3, ${categoryContainer.smallMargin} > h3`,
  {
    fontSize: '1.25rem',
  },
);

globalStyle(
  `${categoryContainer.default} > h5, ${categoryContainer.smallMargin} > h5`,
  {
    color: theme.blueGray,
  },
);

globalStyle(
  `${categoryContainer.default} > button, ${categoryContainer.smallMargin} > button`,
  {
    textDecoration: 'underline',
    textUnderlineOffset: '0.2rem',
    color: theme.blueGray,
  },
);

export const category = style({
  display: 'flex',
  fontSize: '1.25rem',
});

globalStyle(`${category} > p`, {
  marginLeft: '0.4rem',
});

const imageContainer = style({
  display: 'flex',
  flexWrap: 'nowrap',
  width: '50%',
  gap: '0.5rem',
  marginRight: '1rem',
});

const profileImageContainer = style({
  position: 'relative',
  borderRadius: '12px',
  overflow: 'hidden',
});

export const imageBox = styleVariants({
  imageBox28: [
    profileImageContainer,
    {
      width: '28px',
      height: '28px',
    },
  ],
  imageBox36: [
    profileImageContainer,
    {
      width: '36px',
      height: '36px',
    },
  ],
  imageBox40: [
    profileImageContainer,
    {
      width: '40px',
      height: '40px',
    },
  ],
  imageBox44: [
    profileImageContainer,
    {
      width: '44px',
      height: '44px',
    },
  ],
  imageBox56: [
    profileImageContainer,
    {
      width: '56px',
      height: '56px',
    },
  ],
  imageBox96: [
    profileImageContainer,
    {
      width: '96px',
      height: '96px',
    },
  ],
});

export const imageLayout = style({
  borderRadius: '12px',
});

export const buttonContainerRound = style({
  padding: '0.4rem',
  borderRadius: '50%',
  backgroundColor: theme.blue,
});

export const line = style({
  backgroundColor: theme.lightGray,
  width: '100%',
  height: '1px',
  transition: 'all 1s',
});

const profileContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const containers = styleVariants({
  imageContainer: [imageContainer],
  profileContainer: [profileContainer],
});

export const visibility = styleVariants({
  visible: [
    {
      visibility: 'visible',
    },
  ],
  invisible: [
    {
      visibility: 'hidden',
    },
  ],
  none: [
    {
      display: 'none',
    },
  ],
});

export const top = style({
  zIndex: 99,
});
