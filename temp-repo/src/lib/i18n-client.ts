'use client'

import { useEffect, useState } from 'react'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        services: "Services",
        pricing: "Pricing",
        about: "About",
        portfolio: "Portfolio",
        testimonials: "Testimonials",
        contact: "Contact",
        getStarted: "Get Started"
      },
      // Hero Section
      hero: {
        title: "Transform Your Digital Presence with",
        subtitle: "Expert Marketing",
        description: "We help businesses grow through strategic digital marketing solutions that drive results, increase brand awareness, and maximize ROI.",
        freeConsultation: "Get Free Consultation",
        viewWork: "View Our Work",
        happyClients: "Happy Clients",
        revenueGenerated: "Revenue Generated",
        clientSatisfaction: "Client Satisfaction",
        expertTeam: "Expert Team",
        readyToHelp: "Ready to help you grow"
      },
      // Services Section
      services: {
        title: "Our Digital Marketing Services",
        description: "Comprehensive digital marketing solutions tailored to your business goals and target audience.",
        seo: {
          title: "Search Engine Optimization",
          description: "Boost your online visibility and drive organic traffic with our proven SEO strategies.",
          features: [
            "Keyword Research",
            "On-Page Optimization",
            "Technical SEO",
            "Content Strategy"
          ]
        },
        ppc: {
          title: "Pay-Per-Click Advertising",
          description: "Maximize your ROI with targeted PPC campaigns across Google, Facebook, and LinkedIn.",
          features: [
            "Google Ads",
            "Social Media Ads",
            "Remarketing",
            "A/B Testing"
          ]
        },
        social: {
          title: "Social Media Marketing",
          description: "Build brand awareness and engage with your audience across all major platforms.",
          features: [
            "Content Creation",
            "Community Management",
            "Influencer Marketing",
            "Analytics"
          ]
        },
        content: {
          title: "Content Marketing",
          description: "Create compelling content that resonates with your target audience and drives conversions.",
          features: [
            "Blog Posts",
            "Video Content",
            "Infographics",
            "Email Marketing"
          ]
        }
      },
      // Pricing Section
      pricing: {
        title: "Choose Your Plan",
        description: "Flexible pricing plans for businesses of all sizes. No hidden fees, cancel anytime.",
        graphicDesign: "Graphic Design",
        socialMedia: "Social Media Marketing",
        webDevelopment: "Web Development",
        starter: "Starter",
        professional: "Professional",
        enterprise: "Enterprise",
        basic: "Basic",
        growth: "Growth",
        premium: "Premium",
        landingPage: "Landing Page",
        businessWebsite: "Business Website",
        webApplication: "Web Application",
        mostPopular: "Most Popular",
        getStarted: "Subscribe",
        contactSales: "Subscribe",
        customSolution: "Need a Custom Solution?",
        customSolutionText: "We understand that every business has unique needs. Contact us for a custom quote tailored to your specific requirements.",
        contactSalesBtn: "Contact Sales",
        // Graphic Design Plans
        graphicPlans: {
          starter: {
            description: "Perfect for small businesses and startups",
            features: [
              "Logo Design",
              "Business Card Design",
              "Social Media Posts (5/month)",
              "Basic Brand Guidelines",
              "2 Revisions",
              "Email Support"
            ]
          },
          professional: {
            description: "Ideal for growing businesses",
            features: [
              "Complete Brand Identity",
              "Marketing Materials",
              "Social Media Posts (15/month)",
              "Infographics",
              "5 Revisions",
              "Priority Support",
              "Source Files"
            ]
          },
          enterprise: {
            description: "For established brands and agencies",
            features: [
              "Complete Brand Strategy",
              "Print & Digital Design",
              "Unlimited Social Media Posts",
              "Motion Graphics",
              "Unlimited Revisions",
              "24/7 Support",
              "All Source Files",
              "Brand Consultation",
              "Priority Project Delivery"
            ]
          }
        },
        // Social Media Plans
        socialPlans: {
          basic: {
            description: "Essential social media presence",
            features: [
              "3 Platform Management",
              "Content Calendar",
              "15 Posts/Month",
              "Basic Analytics",
              "Community Management",
              "Monthly Reports"
            ]
          },
          growth: {
            description: "Accelerate your social media growth",
            features: [
              "5 Platform Management",
              "Content Strategy",
              "30 Posts/Month",
              "Advanced Analytics",
              "Paid Ad Management",
              "Influencer Outreach",
              "Weekly Reports"
            ]
          },
          premium: {
            description: "Complete social media domination",
            features: [
              "All Platforms Management",
              "Custom Strategy",
              "Unlimited Posts",
              "Real-time Analytics",
              "Full Ad Management",
              "Influencer Campaigns",
              "Daily Reports",
              "Dedicated Manager"
            ]
          }
        },
        // Web Development Plans
        webPlans: {
          landing: {
            description: "Single page website for lead generation",
            features: [
              "Responsive Design",
              "SEO Optimized",
              "Contact Form",
              "Basic Analytics",
              "Mobile Friendly",
              "1 Month Support"
            ]
          },
          business: {
            description: "Complete business website solution",
            features: [
              "Multi-page Website",
              "Custom Design",
              "CMS Integration",
              "E-commerce Ready",
              "Advanced SEO",
              "Analytics Setup",
              "3 Months Support"
            ]
          },
          application: {
            description: "Custom web application development",
            features: [
              "Custom Web App",
              "Database Integration",
              "User Authentication",
              "API Development",
              "Progressive Web App",
              "Advanced Features",
              "6 Months Support",
              "Training Included"
            ]
          }
        }
      }
    }
  },
  ar: {
    translation: {
      // Navigation
      nav: {
        services: "الخدمات",
        pricing: "الأسعار",
        about: "من نحن",
        portfolio: "أعمالنا",
        testimonials: "آراء العملاء",
        contact: "تواصل معنا",
        getStarted: "ابدأ الآن"
      },
      // Hero Section
      hero: {
        title: "حوّل وجودك الرقمي مع",
        subtitle: "التسويق الاحترافي",
        description: "نساعد الشركات على النمو من خلال حلول التسويق الرقمي الاستراتيجية التي تحقق النتائج وتزيد من الوعي بالعلامة التجارية وتعظيم العائد على الاستثمار.",
        freeConsultation: "احصل على استشارة مجانية",
        viewWork: "شاهد أعمالنا",
        happyClients: "عميل سعيد",
        revenueGenerated: "إيرادات مُحققة",
        clientSatisfaction: "رضا العملاء",
        expertTeam: "فريق الخبراء",
        readyToHelp: "جاهزون لمساعدتك على النمو"
      },
      // Services Section
      services: {
        title: "خدمات التسويق الرقمي",
        description: "حلول تسويق رقمي شاملة مصممة خصيصاً لأهداف عملك وجمهورك المستهدف.",
        seo: {
          title: "تحسين محركات البحث",
          description: "عزز ظهورك على الإنترنت وادفع حركة المرور العضوية باستراتيجيات تحسين محركات البحث المثبتة.",
          features: [
            "بحث عن الكلمات المفتاحية",
            "التحسين على الصفحة",
            "التحسين التقني",
            "استراتيجية المحتوى"
          ]
        },
        ppc: {
          title: "الإعلانات المدفوعة",
          description: "عظّم عائد استثمارك بحملات إعلانية مستهدفة عبر جوجل وفيسبوك ولينكدإن.",
          features: [
            "إعلانات جوجل",
            "إعلانات وسائل التواصل الاجتماعي",
            "إعادة الاستهداف",
            "اختبار A/B"
          ]
        },
        social: {
          title: "التسويق عبر وسائل التواصل",
          description: "ابنِ الوعي بالعلامة التجارية وتفاعل مع جمهورك عبر جميع المنصات الرئيسية.",
          features: [
            "إنشاء المحتوى",
            "إدارة المجتمع",
            "التسويق بالمؤثرين",
            "التحليلات"
          ]
        },
        content: {
          title: "تسويق المحتوى",
          description: "أنشئ محتوى مقنعًا يتردد صداه لدى جمهورك المستهدف ويحقق التحويلات.",
          features: [
            "منشورات المدونة",
            "محتوى الفيديو",
            "الرسوم البيانية",
            "التسويق عبر البريد الإلكتروني"
          ]
        }
      },
      // Pricing Section
      pricing: {
        title: "اختر خطتك",
        description: "خطط أسعار مرنة للشركات بجميع الأحجام. لا توجد رسوم خفية، إلغاء في أي وقت.",
        graphicDesign: "التصميم الجرافيكي",
        socialMedia: "التسويق عبر وسائل التواصل",
        webDevelopment: "تطوير المواقع",
        starter: "أساسي",
        professional: "احترافي",
        enterprise: "مؤسسي",
        basic: "أساسي",
        growth: "نمو",
        premium: "مميز",
        landingPage: "صفحة هبوط",
        businessWebsite: "موقع أعمال",
        webApplication: "تطبيق ويب",
        mostPopular: "الأكثر شعبية",
        getStarted: "اشترك الآن",
        contactSales: "اشترك الآن",
        customSolution: "تحتاج إلى حل مخصص؟",
        customSolutionText: "نحن نفهم أن كل عمل له احتياجات فريدة. تواصل معنا للحصول على عرض سعر مخصص يناسب متطلباتك الخاصة.",
        contactSalesBtn: "تواصل مع المبيعات",
        // Graphic Design Plans
        graphicPlans: {
          starter: {
            description: "مثالي للشركات الصغيرة والناشئة",
            features: [
              "تصميم الشعار",
              "تصميم بطاقات العمل",
              "منشورات وسائل التواصل الاجتماعي (٥/شهر)",
              "إرشادات العلامة التجارية الأساسية",
              "٢ تعديلات",
              "دعم عبر البريد الإلكتروني"
            ]
          },
          professional: {
            description: "مثالي للشركات النامية",
            features: [
              "هوية العلامة التجارية الكاملة",
              "المواد التسويقية",
              "منشورات وسائل التواصل الاجتماعي (١٥/شهر)",
              "الرسوم البيانية",
              "٥ تعديلات",
              "دعم أولوي",
              "ملفات المصدر"
            ]
          },
          enterprise: {
            description: "للعلامات التجارية والوكالات الراسخة",
            features: [
              "استراتيجية العلامة التجارية الكاملة",
              "التصميم الطباعي والرقمي",
              "منشورات غير محدودة لوسائل التواصل الاجتماعي",
              "الرسوم المتحركة",
              "تعديلات غير محدودة",
              "دعم على مدار الساعة",
              "جميع ملفات المصدر",
              "استشارة العلامة التجارية",
              "تسليم المشاريع بالأولوية"
            ]
          }
        },
        // Social Media Plans
        socialPlans: {
          basic: {
            description: "وجود أساسي في وسائل التواصل الاجتماعي",
            features: [
              "إدارة ٣ منصات",
              "تقويم المحتوى",
              "١٥ منشور/شهر",
              "التحليلات الأساسية",
              "إدارة المجتمع",
              "تقارير شهرية"
            ]
          },
          growth: {
            description: "تسريع نمو وسائل التواصل الاجتماعي",
            features: [
              "إدارة ٥ منصات",
              "استراتيجية المحتوى",
              "٣٠ منشور/شهر",
              "التحليلات المتقدمة",
              "إدارة الإعلانات المدفوعة",
              "التواصل مع المؤثرين",
              "تقارير أسبوعية"
            ]
          },
          premium: {
            description: "السيطرة الكاملة على وسائل التواصل الاجتماعي",
            features: [
              "إدارة جميع المنصات",
              "استراتيجية مخصصة",
              "منشورات غير محدودة",
              "التحليلات في الوقت الفعلي",
              "إدارة الإعلانات الكاملة",
              "حملات المؤثرين",
              "تقارير يومية",
              "مدير مخصص"
            ]
          }
        },
        // Web Development Plans
        webPlans: {
          landing: {
            description: "صفحة واحدة للموقع لجذب العملاء",
            features: [
              "تصميم متجاوب",
              "محسّن لمحركات البحث",
              "نموذج تواصل",
              "التحليلات الأساسية",
              "ملائم للجوال",
              "شهر واحد من الدعم"
            ]
          },
          business: {
            description: "حل كامل لموقع الأعمال",
            features: [
              "موقع متعدد الصفحات",
              "تصميم مخصص",
              "تكامل نظام إدارة المحتوى",
              "جاهز للتجارة الإلكترونية",
              "تحسين محركات البحث المتقدم",
              "إعداد التحليلات",
              "٣ أشهر من الدعم"
            ]
          },
          application: {
            description: "تطوير تطبيق ويب مخصص",
            features: [
              "تطبيق ويب مخصص",
              "تكامل قاعدة البيانات",
              "مصادقة المستخدم",
              "تطوير واجهة برمجة التطبيقات",
              "تطبيق ويب تقدمي",
              "ميزات متقدمة",
              "٦ أشهر من الدعم",
              "التدريب مشمول"
            ]
          }
        }
      }
    }
  }
}

// Initialize i18n immediately
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    })
}

export function useI18nInit() {
  const [isInitialized, setIsInitialized] = useState(true)

  return { isInitialized }
}