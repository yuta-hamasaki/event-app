'use client'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { createClient } from "@/utils/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { type User } from "@supabase/supabase-js";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function DashboardForm({ user }: { user: User | null }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)

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

  const handleDelete = () => {
    // TODO: アカウント削除処理追加
    console.log("delete user info");
  };

  useEffect(() => {
    if (user) {
      setEmail(user.email || "");
      getProfile();
    }
  }, [user, getProfile]);

  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: username || "",
      email: email || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: プロフィール情報更新処理
    console.log(values);
  }

  // TODO: バックとの連携が取れるようになればコメント外す
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="form-widget w-full py-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex flex-col"
        >
          <div className="flex gap-3">
            {/* Username field */}
            <div className="w-full">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="flex items-center w-full">
                    <div className="w-full">
                      <FormLabel className="text-gray-600">Username</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Input your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            {/* Email field */}
            <div className="w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex items-center w-full">
                    <div className="w-full">
                      <FormLabel className="text-gray-600">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Input your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center ">
              <button
                type="button"
                className="relative text-red-500 group"
                onClick={handleDelete}
              >
                Delete Account
                <span className="absolute left-0 bottom-0 block w-0 h-[1px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
