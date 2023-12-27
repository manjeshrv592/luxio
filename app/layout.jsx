import '@/styles/globals.css';
import { Poppins as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/context/ThemeProvider';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Luxio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen  font-sans antialiased bg-luxio-grey-50 text-luxio-grey-700 dark:bg-luxio-grey-900 dark:text-luxio-grey-300',
          fontSans.variable
        )}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
