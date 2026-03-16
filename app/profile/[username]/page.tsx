import React from "react";
import { posts } from "@/lib/data";
import ProfileClient from "./ProfileClient";

export async function generateStaticParams() {
  // Return all usernames that exist in our posts data
  const usernames = Array.from(new Set(posts.map((post) => post.username)));
  return usernames.map((username) => ({
    username: username,
  }));
}

export default function ProfilePage({ params }: { params: { username: string } }) {
  const userPosts = posts.filter(p => p.username === params.username);
  
  return <ProfileClient username={params.username} userPosts={userPosts} />;
}
