module.exports = {
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    // safelist: [/^bg-/, /^from-/, /^to-/],
    safelist: [
      {
        pattern: /^bg-/,
      },
      {
        pattern: /^from-/,
      },
      {
        pattern: /^to-/,
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [],
};
