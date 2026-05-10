import { motion } from 'framer-motion';
import { Divider, ReadingProgress } from '@/components/common';
import { Header } from './Header';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export function MainLayout({ children, showHeader = true, showFooter = true }: MainLayoutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="max-w-[800px] mx-auto px-4 md:px-10 border-x-0 md:border-x border-zinc-900 min-h-screen font-mono text-white text-sm bg-black">
      <ReadingProgress />
      {showHeader && (
        <>
          <Header />
          <Divider />
        </>
      )}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-0"
      >
        {children}
      </motion.main>
      {showFooter && <Footer />}
    </div>
  );
}
