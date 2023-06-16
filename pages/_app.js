import '@/styles/globals.css';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps, router }) {
  const isAuthPage =
    router.pathname === '/auth' || router.pathname === '/onboarding';
  if (isAuthPage) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
