import Footer from './Footer';
import './globals.css';
import Navbar from './Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='px-2 md:px-10 lg:px-20 xl:px-40'>
        <Navbar />
        <div className='mx-8'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
