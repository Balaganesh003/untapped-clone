import { Inter } from 'next/font/google';
import Link from 'next/link';
import CreatePost from '../components/CreatePost';

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`${inter.className} `}>
      <div className="w-full bg-primary flex items-center flex-col h-full justify-center">
        <p className="text-3xl text-primary-text">Welcome to Untapped</p>
        <Link href="/auth" className="block">
          <p className="text-3xl text-link">SignUp</p>
        </Link>
        <Link href="/jobs" className="block">
          <p className="text-3xl text-link">Jobs</p>
        </Link>
        <Link href="/posts" className="block">
          <p className="text-3xl text-link">posts</p>
        </Link>
        <Link href="/onboarding" className="block">
          <p className="text-3xl text-link">Onboarding</p>
        </Link>
      </div>
    </div>
  );
}
