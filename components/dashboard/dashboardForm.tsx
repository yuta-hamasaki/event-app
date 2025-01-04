'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import {signOut} from "@/app/actions"

export default function DashoboardForm({ user }: { user: User | null }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState<string | null>(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('client_profile')
        .select(`username`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        console.log(error)
        throw error
      }

      if (data) {
        setUsername(data.username)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])



  return (
    <div className="form-widget">

      <div>
        <p>{user?.email}</p>
      </div>
      <div>
        <p>{username}</p>
      </div>
      <div>
          <button className="button block" onClick={signOut}>
            Sign out
          </button>
      </div>
    </div>
  )
}