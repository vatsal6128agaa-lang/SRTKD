// Centralized configuration for all Google Drive image URLs
// Update these URLs with your actual Google Drive links

export const imageConfig = {
  // About section slideshow images
  aboutSlideshow: [
    "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_FILE_ID_1",
    "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_FILE_ID_2", 
    "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_FILE_ID_3",
    "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_FILE_ID_4",
    "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_FILE_ID_5"
  ],

  // Tournament data with images and descriptions
  tournaments: [
    {
      id: 1,
      title: "National Taekwondo Championship 2024",
      thumbnail: "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_THUMBNAIL_1",
      description: "Our club participated in the prestigious National Taekwondo Championship where our students showcased exceptional skills and sportsmanship. The tournament featured competitors from across the country, and our team brought home multiple medals in various categories.",
      images: [
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_GALLERY_1_1",
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_GALLERY_1_2",
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_GALLERY_1_3",
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_GALLERY_1_4"
      ]
    },
    {
      id: 2,
      title: "State Level Belt Grading Ceremony",
      thumbnail: "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_THUMBNAIL_2",
      description: "A momentous occasion where our dedicated students advanced to higher belt levels. This grading ceremony tested their technical skills, forms, sparring abilities, and knowledge of Taekwondo principles. The ceremony was conducted by certified masters and officials.",
      images: [
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_GALLERY_2_1",
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_GALLERY_2_2",
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_GALLERY_2_3"
      ]
    },
    {
      id: 3,
      title: "Inter-School Taekwondo Competition",
      thumbnail: "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_THUMBNAIL_3",
      description: "Local schools came together for this exciting competition featuring young martial artists. Our students demonstrated excellent technique and discipline, earning recognition for both their performance and exemplary behavior throughout the event.",
      images: [
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_GALLERY_3_1",
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_GALLERY_3_2",
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_GALLERY_3_3",
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_GALLERY_3_4",
        "https://drive.google.com/uc?export=view&id=YOUR_TOURNAMENT_GALLERY_3_5"
      ]
    }
  ]
};

// Instructions for updating image URLs:
// 1. Upload your images to Google Drive
// 2. Get the shareable link for each image
// 3. Extract the file ID from the link (the long string after 'id=')
// 4. Replace 'YOUR_GOOGLE_DRIVE_FILE_ID_X' with the actual file IDs
// 
// Example: If your Google Drive link is:
// https://drive.google.com/file/d/1ABC123XYZ456/view?usp=sharing
// Then your file ID is: 1ABC123XYZ456
// And the final URL should be: https://drive.google.com/uc?export=view&id=1ABC123XYZ456