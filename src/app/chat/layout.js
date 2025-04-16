import ChatClientLayout from "./ClientLayout";

export const metadata = {
  title: '비블로(Biblo) - 도서관을 위한 AI 에이전트',
  description: '비블로(Biblo)와 대화하며 도서관과 학술 정보에 대해 궁금한 점을 물어보세요.',
  keywords: '도서관, AI, 채팅, 학술정보, 질문, 도서관자동화, Biblo',
  openGraph: {
    title: '비블로(Biblo) - 도서관을 위한 AI 에이전트',
    description: '비블로(Biblo)와 대화하며 도서관과 학술 정보에 대해 궁금한 점을 물어보세요.',
    url: 'https://biblo.ai/chat',
    siteName: 'Biblo AI',
    images: [
      {
        url: '/chat-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Biblo AI 채팅',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '비블로(Biblo) - 도서관을 위한 AI 에이전트',
    description: '비블로(Biblo)와 대화하며 도서관과 학술 정보에 대해 궁금한 점을 물어보세요.',
    images: ['/chat-twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChatLayout({ children }) {
  return <ChatClientLayout>{children}</ChatClientLayout>;
} 