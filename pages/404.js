import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const redirect = setTimeout(() => {
      router.push('/');
    }, 1000);

    return () => clearTimeout(redirect);
  }, []);

  return (
    <div className="flex items-center flex-col gap-4 justify-center max-w-screen max-h-screen w-full h-full">
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to the Jobs page...</p>
    </div>
  );
}
