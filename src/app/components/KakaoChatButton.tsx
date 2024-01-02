'use client'
import { KAKAO_OPEN_CHAT_LINK } from '@/constants/link';
import { ReactNode } from 'react';

type KakaoChatButtonProps = {
  className?: string
  children?: ReactNode
}
export function KakaoChatButton({ className, children }: KakaoChatButtonProps) {
  const openKakaoChat = () => {
    window.open(KAKAO_OPEN_CHAT_LINK, '_blank');
  };

  return (
    <button onClick={openKakaoChat} className={className}>{children || '카카오톡 채팅방 입장'}</button>
  );
}
