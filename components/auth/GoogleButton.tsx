'use client';
import Image from 'next/image';
import googleIcon from '@/public/google_icon.png';
import { Oauth } from '@/app/actions';

export default function GoogleButton() {

  
  return (
    <button
      onClick={Oauth}
      className="mt-4 w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      <Image
        src={googleIcon}
        height={25}
        width={25}
        alt="Google"
      />
      <span>Google</span>
    </button>
  );
}
