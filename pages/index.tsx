import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import useLoginModal from "@/hooks/useLoginModal";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const loginModal = useLoginModal();
  console.log(loginModal.isOpen)
  return (
    <Header label="Home"/>
  )
}
