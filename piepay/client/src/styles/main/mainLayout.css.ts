import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import theme from '@/styles/theme/theme';
import { setTableContainer } from '@/styles/meet/meetMain.css';



export const mainContainer = style({
    padding: '4% 6% 0 6%',
    '::-webkit-scrollbar': {
        width: '3px',
    },
    '::-webkit-scrollbar-thumb': {
        backgroundColor: '#D3D3D3',
    },
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    overflowY: 'auto',
});

globalStyle(`${mainContainer} > *:first-child`, {
    marginTop: '24%',
});
