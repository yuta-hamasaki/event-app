'use client';
import { useState } from 'react';
import Button from "@/components/Button";
import AuthModal from '@/components/auth/AuthModal';

export function Hero() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <section
        className="w-screen h-screen flex flex-col justify-center items-center p-9 sm:items-start sm:px-24 md:px-32 lg:px-56 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <main className="flex flex-col gap-5 md:gap-6 items-start sm:w-1/2">
          <h1 className="flex flex-col leading-tight text-black text-5xl font-bold">
            <span>Discover.</span>
            <span>Connect.</span>
            <span>Experience.</span>
          </h1>
          <p className="font-normal text-black">
            some text is here some text is here some text is here some text is
            here some text is here some text text is here some text text is here
            some text text is here
          </p>
          <div className="w-full flex gap-3 flex-col items-center sm:flex-row">
            <Button>Find Events</Button>
            <Button 
              variant="yellow" 
              onClick={() => setIsAuthModalOpen(true)}
            >
              Login
            </Button>
          </div>
        </main>
      </section>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}