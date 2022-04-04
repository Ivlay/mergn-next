declare module 'styled-components' {
  export interface DefaultTheme extends PropertiesThemes {}
}

export type Theme = 'dark' | 'light';

export type PropertiesThemes = typeof themes.dark;

export const themes = {
  dark: {
    backgroundColor: '#222226',
    color: '#ADADB5',
    button: {
      gradient: {
        1: '#DA5201',
        2: '#F8772B',
      },
      color: '#FFDBAD',
    },
    border: '#ADADB53D',
  },
  light: {
    backgroundColor: '#FFF',
    color: '#2E444E',
    button: {
      gradient: {
        1: '#137272',
        2: '#1A8F89',
      },
      color: '#FFF',
    },
    border: '#ADADB59C',
  },
};
