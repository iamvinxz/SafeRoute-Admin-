"use client";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useState, useRef, ChangeEvent } from "react";
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
import { FileImage } from "lucide-react";

const PostButton = () => {
  const [createPostModal, setCreatePostModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      content: "",
      image: "",
    },
  });

  const handlePostImageButton = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewURL(url);
    }
  };

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
          <div className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col w-[35%]">
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
                                <div className="flex gap-2">
                                  <Input
                                    {...field}
                                    placeholder="URL"
                                    type="text"
                                    autoComplete="off"
                                  />
                                  <input
                                    type="file"
                                    ref={fileInputRef}
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileChange}
                                  />
                                  <button
                                    type="button"
                                    onClick={handlePostImageButton}
                                    className="p-1 bg-gray-200 rounded-md cursor-pointer drop-shadow-2xl hover:bg-gray-300 transition"
                                  >
                                    <FileImage
                                      width={20}
                                      height={15}
                                      color="#87898b"
                                    />
                                  </button>
                                </div>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      {previewURL && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-500 mb-2">
                            Image preview
                          </p>
                          <div className="relative w-full rounded-lg border overflow-hidden bg-slate-50">
                            <img
                              src={previewURL}
                              alt="Preview"
                              className="w-auto h-auto max-h-80 object-contain mx-auto relative"
                            />
                          </div>
                        </div>
                      )}
                      <div className="space-y-3">
                        <Label htmlFor="content">Caption</Label>
                        <Textarea
                          placeholder="Input your text here."
                          className="h-30 overflow-y-auto resize-none"
                        />
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
