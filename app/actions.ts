'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { z } from 'zod'


const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const registerSchema = loginSchema.extend({
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores and hyphens'),
});

export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.log("error")
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function register(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options:{
      data: {
        display_name: formData.get('username') as string
      }
    }
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/')
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function Oauth(){
  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: 'http://localhost:3000/api/auth/callback',
    },
  })
  
  if (data.url) {
    // redirect(data.url) // use the redirect API for your server framework

    redirect('/dashboard')
  }


  
}

export async function signOut(){
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  redirect('/')
}


// todo email
// {{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email