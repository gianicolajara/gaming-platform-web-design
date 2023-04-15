import Footer from 'components/footer';
import Navbar from '../../navbar';

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

function PrimaryLayout({ children }: PrimaryLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default PrimaryLayout;
