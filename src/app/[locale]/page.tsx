'use client';
import dynamic from 'next/dynamic'
import MainScreen from '@/module/mainScreen'

const SubsScreen = dynamic(() => import('@/module/subsScreen'));
const PresentationSlider = dynamic(() => import('@/module/presentation'));
const ServicesScreen = dynamic(() => import('@/module/services'));
const Posts = dynamic(() => import('@/module/postsScreen'));
const FeaturesScreen = dynamic(() => import('@/module/featuresScreen'));
const DeveloperScreen = dynamic(() => import('@/module/developerForm'));
const AboutServicesScreen = dynamic(() => import('@/module/aboutServicesScreen'));
const AboutScreen = dynamic(() => import('@/module/about'));
const SellServices = dynamic(() => import('@/module/SellServices'));
const Reviews = dynamic(() => import('@/module/Reviews'));
const Faq = dynamic(() => import('@/module/Faq'));
const RepricerAbout = dynamic(() => import('@/module/RepricerAbout'));

export default function Home() {
  return (
    <>
      <MainScreen />
      <PresentationSlider />
      <ServicesScreen />
      <AboutServicesScreen />
      <AboutScreen />
      <SellServices />
      <FeaturesScreen />
      <RepricerAbout />
      <SubsScreen />
      <Reviews />
      <Posts />
      <Faq />
      <DeveloperScreen />
    </>
  )
}
