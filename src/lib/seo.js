// lib/seo.js
export const siteConfig = {
    name: "StudyBest.in",
    url: "https://StudyBest.in",
    description: "Free quiz, mock tests, study resources for government exams, competitive exams Punjab & India level. CBSE Class 10-12 study material, notes, and practice tests.",
    keywords: [
      // Primary Keywords
      "free quiz", "mock tests", "government exams", "competitive exams", 
      "study material", "CBSE class 10", "CBSE class 12", "Punjab exams",
      
      // Exam Specific Keywords
      "SSC exam preparation", "Banking exams", "Railway exams", "UPSC preparation",
      "PCS exam", "Punjab government jobs", "India competitive exams",
      
      // Subject Specific
      "math quiz", "science mock test", "english grammar test", "reasoning practice",
      "general knowledge test", "current affairs quiz",
      
      // Class Specific
      "class 10 science notes", "class 12 physics study material", "CBSE sample papers",
      "board exam preparation", "ncert solutions",
      
      // Regional Keywords
      "Punjab exam study material", "study in Punjab", "Punjab government exams",
      "Chandigarh competitive exams", "North India education portal"
    ].join(', '),
    
    authors: [{ name: "StudyBest Team" }],
    creator: "StudyBest.in",
    
    // Social Links
    socialLinks: {

      instagram: "https://instagram.com/hii.mahii"
    }
  };
  
  export const generateMetadata = (pageMetadata = {}) => {
    return {
      title: pageMetadata.title ? `${pageMetadata.title} | ${siteConfig.name}` : siteConfig.name,
      description: pageMetadata.description || siteConfig.description,
      keywords: pageMetadata.keywords || siteConfig.keywords,
      authors: siteConfig.authors,
      creator: siteConfig.creator,
      publisher: siteConfig.name,
      
      openGraph: {
        title: pageMetadata.title || siteConfig.name,
        description: pageMetadata.description || siteConfig.description,
        url: siteConfig.url + (pageMetadata.slug || ''),
        siteName: siteConfig.name,
        images: [
          {
            url: pageMetadata.image || '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: pageMetadata.title || siteConfig.name,
          },
        ],
        locale: 'en_IN',
        type: pageMetadata.type || 'website',
      },
      
      twitter: {
        card: 'summary_large_image',
        title: pageMetadata.title || siteConfig.name,
        description: pageMetadata.description || siteConfig.description,
        images: [pageMetadata.image || '/twitter-image.jpg'],
        creator: '@StudyBest',
      },
      
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      
      alternates: {
        canonical: siteConfig.url + (pageMetadata.slug || ''),
      },
      
      verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
        me: 'your-email-verification',
      }
    };
  };