export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  desc: string;
  fullDesc: string;
  gallery: string[];
  teamWork: string;
  results: string[];
  challenge: string;
  solution: string;
}

export const PROJECTS: Project[] = [
  {
    id: "module-design",
    title: "Module Design & Pedagogical Innovation",
    category: "Digital Design",
    image: "../src/img/proj1.jpg",
    desc: "Revolutionizing how educational content is consumed through immersive UI/UX design.",
    fullDesc: "The Module Design project focused on creating a seamless, interactive environment for digital books. We implemented 3D visualizers, interactive quizzes, and a distraction-free reading interface designed specifically for secondary students in Ethiopia.",
    gallery: [
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/team-work-collaboration-6be6b1a8-1774616312478.webp",
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/module-design-workshop-2aa8960f-1774616310222.webp"
    ],
    teamWork: "Our team of 10+ designers and 5 pedagogical experts collaborated over along time to ensure the visual design aligned with cognitive and designed learning principles.",
    results: [
      "95% Reading engagement rate increase",
      "Positive feedback from 15+ regional and national schools",
      "Awarded Best EdTech Design"
    ],
    challenge: "Educators were finding traditional PDFs cumbersome. We needed a format that was both lightweight and highly engaging.",
    solution: "We developed a proprietary design based module format that streams assets only when needed, reducing initial Crammed text by 80%."
  },
  {
    id: "teacher-training",
    title: "Integration and Foundational Teacher Training Hub",
    category: "Training",
    image: "../src/img/proj2.jpg",
    desc: "Empowering educators with 21st-century digital competencies and AI integration.",
    fullDesc: "Our teacher training program is more than just a workshop; it is a transformative journey. We provide hands-on experience with the latest educational technologies, from tech in the classroom to AI-assisted grading.",
    gallery: [
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/teacher-training-session-dc3d9f54-1774616304296.webp",
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/team-work-collaboration-6be6b1a8-1774616312478.webp"
    ],
    teamWork: "Field trainers and educational psychologists worked together to create a curriculum that reduces tech-anxiety among veteran teachers.",
    results: [
      "Over 5,000 teachers certified",
      "Established 12 regional training centers",
      "Implemented in 4 major Ethiopian regions"
    ],
    challenge: "The primary hurdle was the technological gap. Many teachers were hesitant to adopt digital tools in their traditional classrooms.",
    solution: "We introduced a train-the-trainer model and provided 24/7 technical support, making the transition as smooth as possible."
  },
  {
    id: "moe-infrastructure",
    title: "Ministry of Education Learning passport Ebook",
    category: "Public Sector",
    image: "../src/img/proj3.jpg",
    desc: "Scale-wide digital infrastructure deployment for the Ministry of Education.",
    fullDesc: "This project involved the deployment of localized servers and low-power mesh networks to ensure that even schools without reliable internet could access the central learning repository.",
    gallery: [
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/moe-project-infrastructure-4c3e6b21-1774616311778.webp",
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/team-work-collaboration-6be6b1a8-1774616312478.webp"
    ],
    teamWork: "Our infrastructure engineers worked on-site with government officials to ensure security protocols and data sovereignty requirements were met.",
    results: [
      "Connected 500+ rural schools",
      "Secure data handling for 1M+ students",
      "Built a sustainable, low-maintenance network"
    ],
    challenge: "Connectivity in remote areas of Ethiopia is highly inconsistent, making cloud-only solutions unfeasible.",
    solution: "We implemented a hybrid edge-computing architecture where content is cached locally and synchronized during off-peak hours."
  }
];