import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import Transition from '../components/Transition';
import { LanguageProvider } from '../context/LanguageContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <LanguageProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition>
              <Component {...pageProps} />
            </Transition>
          </motion.div>
        </AnimatePresence>
      </Layout>
    </LanguageProvider>
  );
}

export default MyApp;
