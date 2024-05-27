import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/shared/style/style.scss";
import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';
import Metrics from './metrics';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Аналитика маркетплейса Uzum Market',
  description: 'Анализ продаж конкурентов и поиск прибыльных товаров на маркетплейсах. Находите прибыльные товары и ниши на Uzum Market',
  keywords: "аналитика, аналитика маркетплейса, аналитика маркетплейсов, аналитика uzum, аналитика uzum.uz, uzum.uz, uzum, узбекистанский маркетплейс uzum, доставка за 1 день uzum.uz, marketdb uzum, uzum analitycs, Сервис аналитики для продавцов на UZUM, аналитика для Uzum, аналитика для Узум, Узум аналитика, сервис аналитики, внешняя аналитика Узум, аналитика узум, сервис аналитики uzum, uzum analitika, uzum аналитика, аналитика узум маркет, uzum market analitika, uzum market аналитика, uzum статистика",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://marketdb.org/" />
        <meta property="og:site_name" content="MarketDB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Аналитика продаж на маркетплейсе Uzum Market" />
        <meta property="og:description" content="Анализ продаж конкурентов и поиск прибыльных товаров на маркетплейсах. Находите прибыльные товары и ниши на Uzum Market"></meta>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Metrics />
      </body>
    </html>
  )
}
