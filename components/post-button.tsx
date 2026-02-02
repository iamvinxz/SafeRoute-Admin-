"use client";
import { Button } from "@/components/ui/button";
import PostModal from "@/components/post-modal";
import { useState } from "react";

const PostButton = () => {
  const [createPostModal, setCreatePostModal] = useState<boolean>(false);

  const handleCreatePost = () => {
    setCreatePostModal(!createPostModal);
  };

  return (
    <>
      <Button
        className="cursor-pointer bg-[#233fe3] hover:bg-[#3667db]"
        onClick={handleCreatePost}
      >
        Create Post
      </Button>

      {createPostModal && <PostModal modalToggle={handleCreatePost} />}
    </>
  );
};

export default PostButton;
