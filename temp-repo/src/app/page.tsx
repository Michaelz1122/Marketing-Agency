'use client'

import { useState } from 'react'
import { useI18nInit } from '@/lib/i18n-client'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronDown, Mail, Phone, MapPin, Star, ArrowRight, CheckCircle, Users, TrendingUp, Target, Lightbulb, Palette, Smartphone, Code } from 'lucide-react'
import { ThemeToggleSwitch } from '@/components/theme-toggle-switch'
import { LanguageSelector } from '@/components/language-selector'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const { isInitialized } = useI18nInit()
  const { t, i18n } = useTranslation()
  const [activeTab, setActiveTab] = useState('all')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  // Function to convert numbers based on language
  const localizeNumber = (num: number | string): string => {
    const number = typeof num === 'string' ? parseInt(num.replace(/[^\d]/g, '')) : num
    if (i18n.language === 'ar') {
      return number.toLocaleString('ar-EG')
    } else {
      return number.toLocaleString('en-US')
    }
  }

  // Pricing data with dynamic numbers
  const pricingPlans = [
    {
      category: t('pricing.graphicDesign'),
      icon: Palette,
      plans: [
        {
          name: t('pricing.starter'),
          price: localizeNumber(15000),
          period: i18n.language === 'ar' ? "شهر" : "month",
          description: t('pricing.graphicPlans.starter.description'),
          features: [
            t('pricing.graphicPlans.starter.features.0'),
            t('pricing.graphicPlans.starter.features.1'),
            t('pricing.graphicPlans.starter.features.2'),
            t('pricing.graphicPlans.starter.features.3'),
            t('pricing.graphicPlans.starter.features.4'),
            t('pricing.graphicPlans.starter.features.5')
          ],
          popular: false,
          cta: t('pricing.getStarted')
        },
        {
          name: t('pricing.professional'),
          price: localizeNumber(30000),
          period: i18n.language === 'ar' ? "شهر" : "month",
          description: t('pricing.graphicPlans.professional.description'),
          features: [
            t('pricing.graphicPlans.professional.features.0'),
            t('pricing.graphicPlans.professional.features.1'),
            t('pricing.graphicPlans.professional.features.2'),
            t('pricing.graphicPlans.professional.features.3'),
            t('pricing.graphicPlans.professional.features.4'),
            t('pricing.graphicPlans.professional.features.5'),
            t('pricing.graphicPlans.professional.features.6')
          ],
          popular: true,
          cta: t('pricing.mostPopular')
        },
        {
          name: t('pricing.enterprise'),
          price: localizeNumber(50000),
          period: i18n.language === 'ar' ? "شهر" : "month",
          description: t('pricing.graphicPlans.enterprise.description'),
          features: [
            t('pricing.graphicPlans.enterprise.features.0'),
            t('pricing.graphicPlans.enterprise.features.1'),
            t('pricing.graphicPlans.enterprise.features.2'),
            t('pricing.graphicPlans.enterprise.features.3'),
            t('pricing.graphicPlans.enterprise.features.4'),
            t('pricing.graphicPlans.enterprise.features.5'),
            t('pricing.graphicPlans.enterprise.features.6'),
            t('pricing.graphicPlans.enterprise.features.7'),
            t('pricing.graphicPlans.enterprise.features.8')
          ],
          popular: false,
          cta: t('pricing.contactSales')
        }
      ]
    },
    {
      category: t('pricing.socialMedia'),
      icon: Smartphone,
      plans: [
        {
          name: t('pricing.basic'),
          price: localizeNumber(20000),
          period: i18n.language === 'ar' ? "شهر" : "month",
          description: t('pricing.socialPlans.basic.description'),
          features: [
            t('pricing.socialPlans.basic.features.0'),
            t('pricing.socialPlans.basic.features.1'),
            t('pricing.socialPlans.basic.features.2'),
            t('pricing.socialPlans.basic.features.3'),
            t('pricing.socialPlans.basic.features.4'),
            t('pricing.socialPlans.basic.features.5')
          ],
          popular: false,
          cta: t('pricing.getStarted')
        },
        {
          name: t('pricing.growth'),
          price: localizeNumber(40000),
          period: i18n.language === 'ar' ? "شهر" : "month",
          description: t('pricing.socialPlans.growth.description'),
          features: [
            t('pricing.socialPlans.growth.features.0'),
            t('pricing.socialPlans.growth.features.1'),
            t('pricing.socialPlans.growth.features.2'),
            t('pricing.socialPlans.growth.features.3'),
            t('pricing.socialPlans.growth.features.4'),
            t('pricing.socialPlans.growth.features.5'),
            t('pricing.socialPlans.growth.features.6')
          ],
          popular: true,
          cta: t('pricing.mostPopular')
        },
        {
          name: t('pricing.premium'),
          price: localizeNumber(65000),
          period: i18n.language === 'ar' ? "شهر" : "month",
          description: t('pricing.socialPlans.premium.description'),
          features: [
            t('pricing.socialPlans.premium.features.0'),
            t('pricing.socialPlans.premium.features.1'),
            t('pricing.socialPlans.premium.features.2'),
            t('pricing.socialPlans.premium.features.3'),
            t('pricing.socialPlans.premium.features.4'),
            t('pricing.socialPlans.premium.features.5'),
            t('pricing.socialPlans.premium.features.6'),
            t('pricing.socialPlans.premium.features.7')
          ],
          popular: false,
          cta: t('pricing.contactSales')
        }
      ]
    },
    {
      category: t('pricing.webDevelopment'),
      icon: Code,
      plans: [
        {
          name: t('pricing.landingPage'),
          price: localizeNumber(45000),
          period: i18n.language === 'ar' ? "مرة واحدة" : "one time",
          description: t('pricing.webPlans.landing.description'),
          features: [
            t('pricing.webPlans.landing.features.0'),
            t('pricing.webPlans.landing.features.1'),
            t('pricing.webPlans.landing.features.2'),
            t('pricing.webPlans.landing.features.3'),
            t('pricing.webPlans.landing.features.4'),
            t('pricing.webPlans.landing.features.5')
          ],
          popular: false,
          cta: t('pricing.getStarted')
        },
        {
          name: t('pricing.businessWebsite'),
          price: localizeNumber(125000),
          period: i18n.language === 'ar' ? "مرة واحدة" : "one time",
          description: t('pricing.webPlans.business.description'),
          features: [
            t('pricing.webPlans.business.features.0'),
            t('pricing.webPlans.business.features.1'),
            t('pricing.webPlans.business.features.2'),
            t('pricing.webPlans.business.features.3'),
            t('pricing.webPlans.business.features.4'),
            t('pricing.webPlans.business.features.5'),
            t('pricing.webPlans.business.features.6')
          ],
          popular: true,
          cta: t('pricing.mostPopular')
        },
        {
          name: t('pricing.webApplication'),
          price: localizeNumber(250000),
          period: i18n.language === 'ar' ? "مرة واحدة" : "one time",
          description: t('pricing.webPlans.application.description'),
          features: [
            t('pricing.webPlans.application.features.0'),
            t('pricing.webPlans.application.features.1'),
            t('pricing.webPlans.application.features.2'),
            t('pricing.webPlans.application.features.3'),
            t('pricing.webPlans.application.features.4'),
            t('pricing.webPlans.application.features.5'),
            t('pricing.webPlans.application.features.6'),
            t('pricing.webPlans.application.features.7')
          ],
          popular: false,
          cta: t('pricing.contactSales')
        }
      ]
    }
  ]

  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    )
  }

  const services = [
    {
      title: t('services.seo.title'),
      description: t('services.seo.description'),
      icon: TrendingUp,
      features: [
        t('services.seo.features.0'),
        t('services.seo.features.1'),
        t('services.seo.features.2'),
        t('services.seo.features.3')
      ]
    },
    {
      title: t('services.ppc.title'),
      description: t('services.ppc.description'),
      icon: Target,
      features: [
        t('services.ppc.features.0'),
        t('services.ppc.features.1'),
        t('services.ppc.features.2'),
        t('services.ppc.features.3')
      ]
    },
    {
      title: t('services.social.title'),
      description: t('services.social.description'),
      icon: Users,
      features: [
        t('services.social.features.0'),
        t('services.social.features.1'),
        t('services.social.features.2'),
        t('services.social.features.3')
      ]
    },
    {
      title: t('services.content.title'),
      description: t('services.content.description'),
      icon: Lightbulb,
      features: [
        t('services.content.features.0'),
        t('services.content.features.1'),
        t('services.content.features.2'),
        t('services.content.features.3')
      ]
    }
  ]

  const caseStudies = [
    {
      title: i18n.language === 'ar' ? "حملة نمو التجارة الإلكترونية" : "E-commerce Growth Campaign",
      category: i18n.language === 'ar' ? "SEO & PPC" : "SEO & PPC",
      description: i18n.language === 'ar' ? "زيادة حركة المرور العضوية بنسبة 300% وتقليل تكلفة اكتساب العميل بنسبة 45% لمتجر إلكتروني رائد." : "Increased organic traffic by 300% and reduced cost per acquisition by 45% for a leading online retailer.",
      results: i18n.language === 'ar' ? ["زيادة حركة المرور 300%", "CPA أقل بنسبة 45%", "عائد 2.5x"] : ["300% Traffic Increase", "45% Lower CPA", "2.5x ROI"],
      image: "/hero-image.jpg"
    },
    {
      title: i18n.language === 'ar' ? "توليد العملاء المحتملين B2B" : "B2B Lead Generation",
      category: i18n.language === 'ar' ? "تسويق لينكدإن" : "LinkedIn Marketing",
      description: i18n.language === 'ar' ? "توليد 500+ عميل مؤهل لشركة SaaS من خلال حملات لينكدإن المستهدفة." : "Generated 500+ qualified leads for a SaaS company through targeted LinkedIn campaigns.",
      results: i18n.language === 'ar' ? ["500+ عميل مؤهل", "معدل تحويل 35%", "تكلفة أقل بنسبة 60%"] : ["500+ Qualified Leads", "35% Conversion Rate", "60% Lower Cost"],
      image: "/hero-image.jpg"
    },
    {
      title: i18n.language === 'ar' ? "حملة زيادة الوعي بالعلامة التجارية" : "Brand Awareness Campaign",
      category: i18n.language === 'ar' ? "وسائل التواصل الاجتماعي" : "Social Media",
      description: i18n.language === 'ar' ? "بناء وجود قوي في وسائل التواصل الاجتماعي أدى إلى نمو المتابعين 10x وزيادة التفاعل." : "Built a strong social media presence resulting in 10x follower growth and increased engagement.",
      results: i18n.language === 'ar' ? ["نمو المتابعين 10x", "معدل تفاعل 85%", "التعرف على العلامة التجارية"] : ["10x Follower Growth", "85% Engagement Rate", "Brand Recognition"],
      image: "/hero-image.jpg"
    }
  ]

  const testimonials = [
    {
      name: i18n.language === 'ar' ? "سارة جونسون" : "Sarah Johnson",
      role: i18n.language === 'ar' ? "الرئيسة التنفيذية، TechStart Inc." : "CEO, TechStart Inc.",
      content: i18n.language === 'ar' ? "حول الفريق وجودنا الرقمي بالكامل. لقد تضاعفت إيراداتنا منذ أن بدأنا العمل معهم." : "The team transformed our digital presence completely. Our revenue has doubled since we started working with them.",
      rating: 5
    },
    {
      name: i18n.language === 'ar' ? "مايكل تشين" : "Michael Chen",
      role: i18n.language === 'ar' ? "مدير التسويق، RetailPro" : "Marketing Director, RetailPro",
      content: i18n.language === 'ar' ? "نتائج استثنائية وخدمة استثنائية. يفهمون حقاً كيفية قيادة نمو الأعمال من خلال التسويق الرقمي." : "Outstanding results and exceptional service. They truly understand how to drive business growth through digital marketing.",
      rating: 5
    },
    {
      name: i18n.language === 'ar' ? "إميلي رودريغيز" : "Emily Rodriguez",
      role: i18n.language === 'ar' ? "المؤسسة، WellnessCo" : "Founder, WellnessCo",
      content: i18n.language === 'ar' ? "احترافي، مبدع، ومدفوع بالنتائج. ساعدونا في إثبات وجود علامتنا التجارية في سوق تنافسي." : "Professional, creative, and results-driven. They helped us establish our brand in a competitive market.",
      rating: 5
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
  }

  const filteredCaseStudies = activeTab === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category.toLowerCase().includes(activeTab.toLowerCase()))

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/agency-logo.png" alt="Digital Marketing Agency" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">DigitalPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.services')}</a>
              <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.pricing')}</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.about')}</a>
              <a href="#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.portfolio')}</a>
              <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.testimonials')}</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.contact')}</a>
              <LanguageSelector />
              <ThemeToggleSwitch />
              <Button>{t('nav.getStarted')}</Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i18n.language === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
            {i18n.language === 'ar' ? (
              <>
                {/* Arabic: Image on the right, text on the left */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <motion.img 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    src="/hero-image.jpg" 
                    alt="Digital Marketing Team" 
                    className="rounded-lg shadow-2xl"
                  />
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                  >
                    <motion.div 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex items-center gap-2"
                    >
                      <div className="flex -space-x-2">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.9 }}
                          className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        >
                          JD
                        </motion.div>
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 1.0 }}
                          className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        >
                          SM
                        </motion.div>
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 1.1 }}
                          className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        >
                          AK
                        </motion.div>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                      >
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">{t('hero.expertTeam')}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{t('hero.readyToHelp')}</div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                  >
                    {t('hero.title')}
                    <span className="text-blue-600 dark:text-blue-400"> {t('hero.subtitle')}</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    {t('hero.description')}
                  </motion.p>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-8 flex flex-col sm:flex-row gap-4"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        {t('hero.freeConsultation')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="lg">
                        {t('hero.viewWork')}
                      </Button>
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 flex items-center gap-8"
                  >
                    {[
                      { value: "500+", label: t('hero.happyClients') },
                      { value: "50M+", label: t('hero.revenueGenerated') },
                      { value: "98%", label: t('hero.clientSatisfaction') }
                    ].map((stat, index) => (
                      <motion.div 
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <>
                {/* English: Original layout */}
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                  >
                    {t('hero.title')}
                    <span className="text-blue-600 dark:text-blue-400"> {t('hero.subtitle')}</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    {t('hero.description')}
                  </motion.p>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-8 flex flex-col sm:flex-row gap-4"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        {t('hero.freeConsultation')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="lg">
                        {t('hero.viewWork')}
                      </Button>
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 flex items-center gap-8"
                  >
                    {[
                      { value: "500+", label: t('hero.happyClients') },
                      { value: "50M+", label: t('hero.revenueGenerated') },
                      { value: "98%", label: t('hero.clientSatisfaction') }
                    ].map((stat, index) => (
                      <motion.div 
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <motion.img 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    src="/hero-image.jpg" 
                    alt="Digital Marketing Team" 
                    className="rounded-lg shadow-2xl"
                  />
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                  >
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex items-center gap-2"
                    >
                      <div className="flex -space-x-2">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.9 }}
                          className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        >
                          JD
                        </motion.div>
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 1.0 }}
                          className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        >
                          SM
                        </motion.div>
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 1.1 }}
                          className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        >
                          AK
                        </motion.div>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                      >
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">{t('hero.expertTeam')}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{t('hero.readyToHelp')}</div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="services" className="py-20 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + 0.1 * index }}
                      viewport={{ once: true }}
                      className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4"
                    >
                      <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + 0.05 * idx + 0.1 * index }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="pricing" className="py-20 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('pricing.description')}
            </p>
          </motion.div>

          <div className="space-y-20">
            {pricingPlans.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-12">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 + 0.1 * categoryIndex }}
                    viewport={{ once: true }}
                    className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center"
                  >
                    <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
                </div>
                
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ${i18n.language === 'ar' ? 'md:flex-row-reverse' : ''}`}>
                  {category.plans.map((plan, planIndex) => {
                    // For RTL, reverse the order of plans
                    const adjustedPlanIndex = i18n.language === 'ar' ? 2 - planIndex : planIndex;
                    const displayIndex = i18n.language === 'ar' ? adjustedPlanIndex : planIndex;
                    
                    return (
                      <motion.div
                        key={displayIndex}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * displayIndex + 0.1 * categoryIndex }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                      >
                        <Card className={`relative h-full ${plan.popular ? 'border-blue-500 dark:border-blue-400 shadow-xl' : 'border-gray-200 dark:border-gray-700'}`}>
                          {plan.popular && (
                            <motion.div 
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.3 }}
                              viewport={{ once: true }}
                              className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                            >
                              <Badge className="bg-blue-600 dark:bg-blue-500 text-white">
                                {i18n.language === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
                              </Badge>
                            </motion.div>
                          )}
                          <CardHeader className="text-center">
                            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</CardTitle>
                            <CardDescription className="text-gray-600 dark:text-gray-300">{plan.description}</CardDescription>
                            <motion.div 
                              initial={{ scale: 0.8 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                              viewport={{ once: true }}
                              className="mt-4"
                            >
                              <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                              <span className="text-gray-600 dark:text-gray-300">/{plan.period}</span>
                            </motion.div>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3 mb-8">
                              {plan.features.map((feature, featureIndex) => (
                                <motion.li 
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: 0.05 * featureIndex + 0.2 }}
                                  viewport={{ once: true }}
                                  className="flex items-center gap-2 text-sm"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button 
                                className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600' : ''}`}
                                variant={plan.popular ? 'default' : 'outline'}
                              >
                                {plan.cta}
                              </Button>
                            </motion.div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('pricing.customSolution')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t('pricing.customSolutionText')}
              </p>
              <Button size="lg">{t('pricing.contactSalesBtn')}</Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About DigitalPro Agency
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We are a full-service digital marketing agency with over 10 years of experience helping businesses 
                thrive in the digital landscape. Our team of experts combines creativity, data-driven strategies, 
                and cutting-edge technology to deliver exceptional results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Data-Driven Approach</h3>
                    <p className="text-gray-600 dark:text-gray-300">We base our strategies on comprehensive data analysis and market research.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Transparent Reporting</h3>
                    <p className="text-gray-600 dark:text-gray-300">Regular updates and detailed reports keep you informed every step of the way.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Customized Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-300">No one-size-fits-all approach. Every strategy is tailored to your unique needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
                  <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-300">Team Members</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000+</div>
                  <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">25+</div>
                  <div className="text-gray-600 dark:text-gray-300">Industries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful digital marketing campaigns and see how we've helped businesses achieve their goals.
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
              <TabsTrigger value="ppc">PPC</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4">{study.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{study.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Star className="w-4 h-4 text-orange-500 fill-current" />
                        <span className="font-medium text-gray-900 dark:text-white">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-700">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to take your digital marketing to the next level? Get in touch with us today for a free consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                      <div className="text-gray-600 dark:text-gray-300">hello@digitalpro.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Phone</div>
                      <div className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Office</div>
                      <div className="text-gray-600 dark:text-gray-300">123 Business Ave, Suite 100<br />New York, NY 10001</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/agency-logo.png" alt="Digital Marketing Agency" className="h-8 w-auto" />
                <span className="text-xl font-bold">DigitalPro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for digital marketing success. We help businesses grow through strategic online marketing.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">SEO</a></li>
                <li><a href="#" className="hover:text-white transition-colors">PPC Advertising</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Media Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Content Marketing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 DigitalPro Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}