import { globalFontFace, style } from '@vanilla-extract/css';

const pretendard = 'GlobalPretendard';

globalFontFace(pretendard, {
  src: '/fonts/woff2/PretendardVariable.woff2',
});

export const font = style({
  fontFamily: 'pretendard',
});


// 청첩장용 폰트

const gowunBatang = 'GlobalGowunBatang';

globalFontFace(gowunBatang, {
  src: '/fonts/ttf/GowunBatang-Regular.ttf',
});

export const cardFont = style({
  fontFamily: gowunBatang,
});