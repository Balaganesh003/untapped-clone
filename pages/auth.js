import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className={`${inter.className}`}>
      {isSignUp ? (
        <SignUp setIsSignUp={setIsSignUp} />
      ) : (
        <SignIn setIsSignUp={setIsSignUp} />
      )}
    </div>
  );
};

export default Auth;
