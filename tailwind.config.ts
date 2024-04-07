import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        green: {
          50: '#FFFBF2', // Lightest orange/cream
          100: '#FEE9C8', // Lighter orange
          200: '#FED7A0', // Light orange
          300: '#FDC078', // Medium orange
          400: '#FCA550', // AWS Orange
          500: '#F68D2E', // Darker orange
          600: '#D4771B', // Dark orange
          700: '#A35D15', // Darker blue/grey
          800: '#724B10', // Dark blue/grey
          900: '#47320A', // Darkest blue/grey
          950: '#2C1E06' // Almost black blue/grey
        }
      }
    }
  }
}
