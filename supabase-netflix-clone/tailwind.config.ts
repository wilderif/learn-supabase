import type { Config } from 'tailwindcss';
import withMT from '@material-tailwind/react/utils/withMT';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [typography],
} satisfies Config;

export default withMT(config);
