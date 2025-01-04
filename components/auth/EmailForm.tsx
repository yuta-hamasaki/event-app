'use client';

import { Mail, Lock, User } from 'lucide-react';
import Button from '../Button';
import {login, register} from '@/app/actions'

export default function EmailForm({ isSignUp, onClose }: { isSignUp: boolean; onClose: () => void }) {

  const clientAction = async (formData: FormData) => {
    try {
      if (isSignUp) {
        await register(formData);
      } else {
        await login(formData);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <form action={clientAction} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            id="email" name="email" type="email" 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      {isSignUp && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
            id="username"
              type="username"
              name="username"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="password"
            id="password"
            name="password"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        variant='square'
        className='w-full'
      >
        {
        // loading ? 'Loading...' : 
        isSignUp ? 'Register' : 'Login'}
      </Button>
    </form>
  );
}