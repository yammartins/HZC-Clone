module.exports = {
  content: [
    './src/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
    './src/styles/*.scss',
    './src/styles/**/*.scss',
  ],
  theme: {
    colors: {
      bl: '#15191C',
      n90: '#1D232A',
      n80: '#2C343A',
      grey: '#95999C',
      n20: '#D4D4D4',
      n10: '#E7E7E7',
      sewit: '#F3F3F3',
      wt: '#FFFFFF',
      blma: '#0480DC',
      blho: '#0063AC',
      blpr: '#004B83',
      gr: '#1AB060',
      red: '#F83636',
    },
    fontFamily: {
      sans: ['Open Sans', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      h1: ['42px', '64px'],
      h2: ['32px', '48px'],
      h3: ['26px', '32px'],
      h4: ['18px', '24px'],
      leg: ['14px', '24px'],
      normal: ['16px', '24px'],
      sm: ['12px', '16px'],
      smbut: ['14px', '16px'],
      menu: ['16px', '32px']
    }
  }
};
