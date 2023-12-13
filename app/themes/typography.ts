const typeface = {
  regular: 'SFProDisplay-Regular',
  medium: 'SFProDisplay-Medium',
  bold: 'SFProDisplay-Bold',
  light: 'SFProDisplay-Light',
};
const mediumType = {
  fontFamily: typeface.medium,
  letterSpacing: 0.15,
  fontWeight: undefined,
};
const regularType = {
  fontFamily: typeface.regular,
  letterSpacing: 0.15,
  fontWeight: undefined,
};
const boldType = {
  fontFamily: typeface.bold,
  letterSpacing: 0.15,
  fontWeight: undefined,
};
const lightType = {
  fontFamily: typeface.light,
  letterSpacing: 0.15,
  fontWeight: undefined,
};

export const fonts = {
  medium14: {
    ...mediumType,
    fontSize: 14,
    lineHeight: 18,
  },
  regular14: {
    ...regularType,
    fontSize: 14,
    lineHeight: 18,
  },
  bold14: {
    ...boldType,
    fontSize: 14,
    lineHeight: 18,
  },
  light14: {
    ...lightType,
    fontSize: 14,
    lineHeight: 18,
  },
  medium17: {
    ...mediumType,
    fontSize: 17,
    fontWeight: 600,
    lineHeight: 22,
  },
  medium22: {
    ...mediumType,
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 28,
  },
  regular17: {
    ...regularType,
    fontSize: 17,
    fontWeight: 400,
    lineHeight: 22,
  },
  regular15: {
    ...regularType,
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 20,
  },
  reuglarlarge10: {
    ...regularType,
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: 2,
  },
};
