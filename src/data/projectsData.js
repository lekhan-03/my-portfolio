const projectsData = [
  {
    id: 1,
    category: "AI & Content Generation",
    title: "Long-Form Video Generation from Text",
    summary: "An AI-powered pipeline that automates the creation of long-form videos from simple text prompts. It integrates multiple AI models to handle script generation, audio synthesis, and visual sourcing.",
    details: [
      "Generated scripts using Mixtral AI based on user prompts.",
      "Converted text to speech using Edge TTS for natural-sounding narration.",
      "Integrated Whisper AI for precise audio-visual synchronization.",
      "Utilized Stable Diffusion and video retrieval to generate relevant visuals.",
      "Automated video editing and assembly using MoviePy."
    ],
    image: "https://res.cloudinary.com/ddgxphtda/image/upload/v1771513444/Portfolio/GenAI.png", // AI/Tech Placeholder
    tech: ["Python", "Mixtral AI", "Edge TTS", "Whisper", "Stable Diffusion", "MoviePy"]
  },
  // {
  //   id: 2,
  //   category: "Mobile Application",
  //   title: "My Furniture App",
  //   summary: "A mobile application designed to simplify furniture shopping. It allows users to browse a catalog, view detailed product information, and manage their orders through a user-friendly interface.",
  //   details: [
  //     "Developed a responsive Android application using Java and XML.",
  //     "Implemented Firebase for real-time database management and user authentication.",
  //     "Features include User Registration, Login, Product Dashboard, and Shopping Cart.",
  //     "Designed an intuitive UI for browsing furniture categories and item details.",
  //     "Includes an 'About Us' and 'Contact' feature for customer support."
  //   ],
  //   image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Furniture Placeholder
  //   tech: ["Android (Java)", "XML", "Firebase Realtime Database", "Authentication"]
  // },
  {
    id: 3,
    category: "Image Processing & Security",
    title: "Digital Watermarking System",
    summary: "A security solution designed to protect digital intellectual property. This project embeds invisible or visible watermarks into digital media to prevent unauthorized usage and ensure copyright protection.",
    details: [
      "Focuses on the embedding of information (watermarks) into digital signals (images/videos).",
      "Ensures robustness against common attacks like compression, filtering, and cropping.",
      "Uses Discrete Wavelet Transform (DWT) or similar algorithms for embedding.",
      "Provides extraction mechanisms to verify ownership of the media.",
      "Applications include broadcast monitoring, copyright protection, and data authentication."
    ],
    image: "https://res.cloudinary.com/ddgxphtda/image/upload/v1771512784/Portfolio/Watermark_Cover.png", // Security/Code Placeholder
    tech: ["MATLAB / Python", "Image Processing", "DWT Algorithm", "Signal Processing"]
  },
  {
    id: 4,
    category: "Web Development",
    title: "Carwash Service Platform",
    summary: "A comprehensive booking platform for car wash services allowing users to schedule appointments and select service packages.",
    details: [
      "User-friendly booking interface.",
      "Service package selection.",
      "Appointment scheduling system."
    ],
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "CSS"]
  },
  
  {
    id: 5, // Update this ID based on your current array length
    category: "Healthcare AI & Multimodal Systems",
    title: "Respi-View 360",
    summary: "A multimodal triage system developed for the MedGemma Impact Challenge that fuses visual (CXR) and acoustic (respiratory sounds) data for high-fidelity diagnostics.",
    details: [
      "Acted as Lead AI Architect, designing a 'Two-Pass Logic' inference architecture to eliminate AI hallucinations.",
      "Integrated Google’s HeAR model for processing acoustic respiratory data alongside Chest X-Ray (CXR) analysis.",
      "Optimized MedGemma 1.5 (4B) using 4-bit NF4 quantization for efficient edge deployment on NVIDIA Tesla T4 hardware.",
      "Developed a diagnostic UI that analyzes patient history, fever, and cough symptoms for holistic triage.",
      "Focused on reducing diagnostic errors and increasing accessibility in resource-constrained medical environments."
    ],
    image: "https://res.cloudinary.com/ddgxphtda/image/upload/v1769852346/Kaggle/WhatsApp_Image_2026-01-31_at_2.37.59_PM.jpg", // Medical Tech Placeholder
    tech: ["MedGemma 1.5", "Python", "Google HeAR", "NF4 Quantization", "Gradio", "NVIDIA Tesla T4"]
  },
];

export default projectsData;