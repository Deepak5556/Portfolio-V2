"use client";

import React, { useState } from "react";
import { profile, techStack } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, Link as LinkIcon, Calendar, Heart, MessageSquare, 
  Grid3X3, Video, Layers, 
  Send, ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { 
  Dialog, DialogContent, DialogTrigger 
} from "@/components/ui/dialog";
import { PostVideoPlayer } from "@/components/PostVideoPlayer";
import { ClientTweetCard } from "@/components/ui/client-tweet-card";
import { SectionLabel } from "@/components/Shared";
import Image from "next/image";

interface ProfileClientProps {
  username: string;
  userPosts: any[];
}

export default function ProfileClient({ username, userPosts }: ProfileClientProps) {
  const [activeTab, setActiveTab] = useState("posts");
  
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20 px-4 sm:px-0">
      {/* Profile Header Section (Instagram Style) */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start pt-8"
      >
        <div className="relative group">
           <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-pink-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
           <Avatar className="h-32 w-32 md:h-44 md:w-44 ring-4 ring-background border-4 border-orange-500/20 shadow-2xl relative z-10">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback className="text-4xl">{profile.initials}</AvatarFallback>
           </Avatar>
        </div>

        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <h1 className="text-2xl font-black tracking-tight lowercase">@{username}</h1>
            <div className="flex gap-2">
               <Button className="rounded-xl h-9 px-6 font-bold text-xs uppercase tracking-widest bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/20">
                 Follow
               </Button>
               <Button variant="outline" className="rounded-xl h-9 px-6 font-bold text-xs uppercase tracking-widest border-border/60">
                 Message
               </Button>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-8">
            <div className="text-center md:text-left">
              <span className="block text-lg font-black">{userPosts.length}</span>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Posts</span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-lg font-black">12</span>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Projects</span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-lg font-black">842</span>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Followers</span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-base font-bold text-foreground">Deepakkumar V</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Developer building high-performance web and mobile apps. 
              Exploring 3D graphics and creative coding. 🚀
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                <MapPin size={14} className="text-orange-500" />
                Coimbatore, India
              </div>
              <a href="https://deepakportfolioo.web.app" target="_blank" className="flex items-center gap-1.5 text-xs font-bold text-orange-500 hover:underline">
                <LinkIcon size={14} />
                deepak-dev.app
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <Separator className="bg-border/40" />

      {/* Grid Section */}
      <section className="space-y-8">
        <div className="flex justify-center gap-12 border-b border-border/10">
          <button 
            onClick={() => setActiveTab("posts")}
            className={`pb-4 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 transition-all block relative ${activeTab === 'posts' ? 'text-orange-500' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Grid3X3 size={14} /> 
            Posts
            {activeTab === 'posts' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />}
          </button>
          <button 
            onClick={() => setActiveTab("reels")}
            className={`pb-4 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 transition-all block relative ${activeTab === 'reels' ? 'text-orange-500' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Video size={14} /> 
            Reels
            {activeTab === 'reels' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />}
          </button>
          <button 
            onClick={() => setActiveTab("tagged")}
            className={`pb-4 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 transition-all block relative ${activeTab === 'tagged' ? 'text-orange-500' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Layers size={14} /> 
            Projects
            {activeTab === 'tagged' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
           {userPosts.map((post, idx) => (
             <PostGridItem key={post.id} post={post} delay={idx * 0.05} />
           ))}
        </div>
      </section>
    </div>
  );
}

function PostGridItem({ post, delay }: { post: any, delay: number }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay }}
           className="relative group aspect-square cursor-pointer overflow-hidden rounded-2xl bg-muted/20 border border-border/40 hover:border-orange-500/30 transition-all duration-300 shadow-sm"
        >
          {post.images && post.images.length > 0 ? (
            <Image 
              src={post.images[0]} 
              alt="Post preview" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : post.video ? (
            <div className="relative w-full h-full">
              <img src={post.poster} className="w-full h-full object-cover" alt="Video poster" />
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10">
                <Video size={14} />
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center p-6 text-center">
               <p className="text-[10px] font-bold text-muted-foreground uppercase leading-relaxed line-clamp-3 italic">
                 "{post.content}"
               </p>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white font-black text-sm">
             <div className="flex items-center gap-2 animate-in slide-in-from-bottom-2">
                <Heart size={20} fill="currentColor" /> 24
             </div>
             <div className="flex items-center gap-2 animate-in slide-in-from-bottom-4">
                <MessageSquare size={20} fill="currentColor" /> 8
             </div>
          </div>
        </motion.div>
      </DialogTrigger>
      
      <DialogContent className="max-w-5xl h-[80vh] md:h-[700px] p-0 overflow-hidden border-none bg-transparent">
        <div className="flex flex-col md:flex-row h-full">
          {/* Post Media Left */}
          <div className="flex-[1.2] bg-black flex items-center justify-center border-r border-border/10 relative overflow-hidden">
             {post.video ? (
               <PostVideoPlayer src={post.video} poster={post.poster} />
             ) : post.images && post.images.length > 0 ? (
               <div className="relative w-full h-full">
                  <Image src={post.images[0]} alt="Post" fill className="object-contain" />
               </div>
             ) : (
               <div className="p-12 text-center space-y-4">
                  <SectionLabel>Post Update</SectionLabel>
                  <p className="text-xl font-medium text-white/90 leading-relaxed italic">{post.content}</p>
               </div>
             )}
          </div>

          {/* Post Info Right */}
          <div className="flex-1 bg-card dark:bg-zinc-900 p-8 flex flex-col h-full overflow-y-auto">
             <div className="flex items-center gap-3 mb-6">
                <Avatar className="h-10 w-10 ring-2 ring-orange-500/20">
                   <AvatarImage src={post.avatar} alt={post.username} />
                   <AvatarFallback>{post.username[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                   <span className="block text-sm font-black lowercase tracking-tight uppercase">@{post.username}</span>
                   <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mt-0.5">
                     {format(new Date(post.dateCreated), "MMMM dd, yyyy")}
                   </span>
                </div>
             </div>

             <div className="space-y-6 flex-1">
                <p className="text-base text-foreground/90 leading-relaxed font-bold">
                  {post.content}
                </p>

                {post.tweetId && (
                   <div className="pt-2">
                      <ClientTweetCard id={post.tweetId} />
                   </div>
                )}

                <div className="flex flex-wrap gap-2 pt-4">
                  {post.tags.map((tag: string) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-[10px] font-black uppercase tracking-widest bg-orange-500/5 text-orange-500 border-none px-3 h-6 rounded-full"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
             </div>

             <div className="mt-8 pt-6 border-t border-border/20">
                <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center gap-4">
                      <Heart size={20} className="hover:text-orange-500 cursor-pointer transition-colors" />
                      <MessageSquare size={20} className="hover:text-orange-500 cursor-pointer transition-colors" />
                      <Send size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
                   </div>
                   <ExternalLink size={18} className="text-muted-foreground hover:text-foreground cursor-pointer" />
                </div>
                <p className="text-xs font-black uppercase tracking-widest">24 Likes</p>
             </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
