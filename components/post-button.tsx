"use client";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  CardTitle,
  CardContent,
  CardHeader,
  Card,
  CardFooter,
} from "./ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { PostSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const PostButton = () => {
  const [createPostModal, setCreatePostModal] = useState(false);
  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      content: "",
      image: "",
    },
  });

  const handleCreatePost = () => {
    setCreatePostModal(!createPostModal);
  };

  return (
    <>
      <Button className="cursor-pointer" onClick={handleCreatePost}>
        Create Post
      </Button>

      {createPostModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center backdrop-blur-sm">
          <div className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col w-[40%]">
            <Card className="w-full p-5">
              <CardHeader>
                <CardTitle className="place-self-center text-xl">
                  Create a Post
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form>
                    <div className="space-y-6">
                      <div className="flex justify-between gap-4">
                        <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormLabel>Title</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Title"
                                  type="text"
                                  autoComplete="off"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="image"
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormLabel>Image</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="URL"
                                  type="text"
                                  autoComplete="off"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="content">Content</Label>
                        <Textarea placeholder="Input your text here." />
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex justify-center gap-5">
                <Button onClick={handleCreatePost}>Post</Button>
                <Button onClick={handleCreatePost}>Close</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default PostButton;
