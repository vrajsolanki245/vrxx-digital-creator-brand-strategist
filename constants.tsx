
import React from 'react';
import { Camera, Layout, Zap, Send, Instagram, Mail, MessageSquare } from 'lucide-react';
import { Service, PortfolioItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Content Architecture',
    description: 'High-impact short-form video production (Reels/TikTok/Shorts) designed for viral reach.',
    icon: 'Camera'
  },
  {
    id: '2',
    title: 'Visual Identity',
    description: 'Elevated brand aesthetics including typography systems and premium digital assets.',
    icon: 'Layout'
  },
  {
    id: '3',
    title: 'Strategic Growth',
    description: 'Data-driven brand strategies to build a loyal, high-conversion digital community.',
    icon: 'Zap'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: '1', imageUrl: 'https://picsum.photos/seed/vrxx1/800/1000', title: 'Street Aesthetic', category: 'Photography' },
  { id: '2', imageUrl: 'https://picsum.photos/seed/vrxx2/800/1000', title: 'Midnight Muse', category: 'Reels' },
  { id: '3', imageUrl: 'https://picsum.photos/seed/vrxx3/800/1000', title: 'Futurism', category: 'Creative' },
  { id: '4', imageUrl: 'https://picsum.photos/seed/vrxx4/800/1000', title: 'Brand Launch', category: 'Strategy' },
  { id: '5', imageUrl: 'https://picsum.photos/seed/vrxx5/800/1000', title: 'Cyber Chic', category: 'Styling' },
  { id: '6', imageUrl: 'https://picsum.photos/seed/vrxx6/800/1000', title: 'Urban Flow', category: 'Editing' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Leo Chen',
    role: 'Founder, Apex Digital',
    text: "VRXX transformed our visual strategy in weeks. The engagement numbers don't lie. Absolutely elite tier work.",
    avatar: 'https://i.pravatar.cc/150?u=leo'
  },
  {
    id: '2',
    name: 'Sarah J.',
    role: 'Lifestyle Creator',
    text: "The aesthetic vision is unmatched. If you want your brand to look premium and Gen-Z native, this is it.",
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }
];
