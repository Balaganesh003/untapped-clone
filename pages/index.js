import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Link href="/auth">
        <h1 className="text-4xl font-bold text-center text-link ">Auth Page</h1>
      </Link>
    </div>
  );
}
