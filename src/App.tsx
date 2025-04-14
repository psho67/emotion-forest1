import { useState } from 'react';
import EmotionCard from './components/EmotionCard';
import ChatBubble from './components/ChatBubble';

const moods = ['😊 행복해요', '😥 조금 지쳤어요', '🙏 고마워요'];
const getToday = () => new Date().toLocaleDateString();

type HistoryEntry = { date: string; mood: string; message: string };
type Friend = {
  name: string;
  wateredToday: boolean;
  mood: string;
  message: string;
  level: number;
  history: HistoryEntry[];
};

const initialFriends: Friend[] = [
  { name: '잎사귀1', wateredToday: false, mood: '', message: '', level: 1, history: [] },
  { name: '감정이', wateredToday: false, mood: '', message: '', level: 1, history: [] },
  { name: '푸름이', wateredToday: false, mood: '', message: '', level: 1, history: [] },
];

const styles = {
  container: {
    padding: '20px',
    maxWidth: '480px',
    margin: '0 auto',
    minHeight: '100vh',
    backgroundImage:
      'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: '#333',
  },
  header: {
    fontSize: '24px',
    marginBottom: '16px',
    backgroundColor: 'rgba(255,255,255,0.6)',
    padding: '8px',
    borderRadius: '8px',
  },
 description: {
  color: '#444',
  marginBottom: '24px',
  backgroundColor: 'rgba(255,255,255,0.5)',
  padding: '8px',
  borderRadius: '8px',
},
