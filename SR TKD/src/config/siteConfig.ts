// Centralized configuration for site data
export const siteConfig = {
  // Contact Information
  contact: {
    email: "assd@protonmail.com",
    phone: "+91 93540 85877",
    address: "I-Block, NS-13, Block I, Beta II, Greater Noida, Rampur Jagir, Uttar Pradesh 201308",
    mapLink: "https://maps.app.goo.gl/ixKtRuxkaLMWNzL2A",
    
    // Opening Hours
    openingHours: [
      { day: "Monday", hours: "06:30 PM - 09:30 PM", isOpen: true },
      { day: "Tuesday", hours: "06:30 PM - 09:30 PM", isOpen: true },
      { day: "Wednesday", hours: "06:30 AM - 09:30 PM", isOpen: true },
      { day: "Thursday", hours: "06:30 AM - 09:30 PM", isOpen: true },
      { day: "Friday", hours: "06:30 AM - 09:30 PM", isOpen: true },
      { day: "Saturday", hours: "06:30 AM - 05:30 PM", isOpen: true },
      { day: "Sunday", hours: "Closed", isOpen: false }
    ]
  },

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Arjun Sharma",
      comment: "SHREE RAM TAEKWONDO CLUB has been incredible for my son's development. The instructors are patient, skilled, and truly care about each student's progress. The discipline and confidence he's gained here is remarkable.",
      role: "Parent"
    },
    {
      id: 2,
      name: "Priya Gupta",
      comment: "I've been training here for 2 years now and couldn't be happier. The techniques taught are authentic, and the training environment is both challenging and supportive. Highly recommend to anyone serious about martial arts.",
      role: "Student"
    },
    {
      id: 3,
      name: "Vikram Singh",
      comment: "As a beginner, I was nervous about starting martial arts at my age. The instructors here made me feel welcome and helped me progress at my own pace. The classes are well-structured and motivating.",
      role: "Student"
    },
    {
      id: 4,
      name: "Meera Joshi",
      comment: "My daughter has been attending classes for over a year. Not only has her physical fitness improved dramatically, but her focus and self-discipline have also enhanced significantly. Excellent training facility!",
      role: "Parent"
    },
    {
      id: 5,
      name: "Rohit Kumar",
      comment: "The belt grading system here is thorough and fair. You really earn your advancement through dedication and skill. The sense of achievement when you progress is unmatched. Great community of martial artists.",
      role: "Student"
    }
  ],

  // Gallery Categories
  galleryCategories: [
    {
      id: "belt-ceremonies",
      title: "Belt Grading Ceremonies",
      description: "Celebrating our students' achievements and progression through various belt levels",
      images: [
        "https://drive.google.com/uc?export=view&id=YOUR_BELT_CEREMONY_1",
        "https://drive.google.com/uc?export=view&id=YOUR_BELT_CEREMONY_2",
        "https://drive.google.com/uc?export=view&id=YOUR_BELT_CEREMONY_3",
        "https://drive.google.com/uc?export=view&id=YOUR_BELT_CEREMONY_4",
        "https://drive.google.com/uc?export=view&id=YOUR_BELT_CEREMONY_5"
      ]
    },
    {
      id: "training-sessions",
      title: "Training Sessions",
      description: "Daily training sessions showcasing forms, sparring, and technique practice",
      images: [
        "https://drive.google.com/uc?export=view&id=YOUR_TRAINING_1",
        "https://drive.google.com/uc?export=view&id=YOUR_TRAINING_2",
        "https://drive.google.com/uc?export=view&id=YOUR_TRAINING_3",
        "https://drive.google.com/uc?export=view&id=YOUR_TRAINING_4",
        "https://drive.google.com/uc?export=view&id=YOUR_TRAINING_5",
        "https://drive.google.com/uc?export=view&id=YOUR_TRAINING_6"
      ]
    },
    {
      id: "tournaments",
      title: "Tournament Highlights",
      description: "Our students competing in local and national tournaments",
      images: [
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_1",
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_2",
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_3",
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_4"
      ]
    },
    {
      id: "demonstrations",
      title: "Public Demonstrations",
      description: "Special events and public demonstrations showcasing Taekwondo techniques",
      images: [
        "https://drive.google.com/uc?export=view&id=YOUR_DEMO_1",
        "https://drive.google.com/uc?export=view&id=YOUR_DEMO_2",
        "https://drive.google.com/uc?export=view&id=YOUR_DEMO_3"
      ]
    },
    {
      id: "facilities",
      title: "Training Facilities",
      description: "Our well-equipped training facilities and equipment",
      images: [
        "https://drive.google.com/uc?export=view&id=YOUR_FACILITY_1",
        "https://drive.google.com/uc?export=view&id=YOUR_FACILITY_2",
        "https://drive.google.com/uc?export=view&id=YOUR_FACILITY_3"
      ]
    }
  ]
};

// Instructions for updating image URLs:
// 1. Upload your images to Google Drive
// 2. Get the shareable link for each image
// 3. Extract the file ID from the link (the long string after 'id=')
// 4. Replace 'YOUR_CATEGORY_X' with the actual file IDs
// 
// Example: If your Google Drive link is:
// https://drive.google.com/file/d/1ABC123XYZ456/view?usp=sharing
// Then your file ID is: 1ABC123XYZ456
// And the final URL should be: https://drive.google.com/uc?export=view&id=1ABC123XYZ456
