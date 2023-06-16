import '@/styles/globals.css';
import Layout from '@/components/Layout';
import store from '@/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps, router }) {
  const isAuthPage =
    router.pathname === '/auth' || router.pathname === '/onboarding';
  if (isAuthPage) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
