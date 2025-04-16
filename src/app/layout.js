import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: '비블로(Biblo) - 도서관을 위한 AI 에이전트',
  description: '비블로(Biblo)는 도서관과 학술 정보를 위한 AI 에이전트입니다. 검색부터 연구·진로 추천까지, 서비스 운영 전반을 하나로 연결하고 자동화합니다.',
  keywords: '도서관, AI, 에이전트, 학술정보, 검색, 메타데이터, 추천시스템, 도서관자동화',
  authors: [{ name: 'Biblo AI' }],
  creator: 'Biblo AI',
  publisher: 'Biblo AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '비블로(Biblo) - 도서관을 위한 AI 에이전트',
    description: '비블로(Biblo)는 도서관과 학술 정보를 위한 AI 에이전트입니다. 검색부터 연구·진로 추천까지, 서비스 운영 전반을 하나로 연결하고 자동화합니다.',
    url: 'https://biblo.ai',
    siteName: 'Biblo AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Biblo AI',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '비블로(Biblo) - 도서관을 위한 AI 에이전트',
    description: '비블로(Biblo)는 도서관과 학술 정보를 위한 AI 에이전트입니다.',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://biblo.ai'),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#7584D6',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
