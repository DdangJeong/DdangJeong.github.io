'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Layout from '../components/layout'
import { Button } from "@/components/ui/button"
import { Plus, X, ZoomIn, ZoomOut } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type ProjectType = 'all' | 'ongoing' | 'past'

type ResearchSlide = {
  title: string
  description: string
  image: string
}

type Project = {
  title: string
  duration: string
  description: string
  keywords: string[]
  supportingInstitution: string
  projectType: string
  achievements: string[]
  image: string
  status: 'ongoing' | 'past'
  researchSlides: ResearchSlide[]
}

const ongoingProjects: Project[] = [
  {
    title: "Privacy-Preserving 3D Reconstruction and Camera Localization",
    duration: "Mar 2022 - Feb 2025",
    description: "We are developing core algorithms for 3D reconstruction and camera localization that can address user's privacy concerns.",
    keywords: ["privacy-preserving", "camera localization", "reconstruction"],
    supportingInstitution: "National Research Foundation of Korea (NRF)",
    projectType: "우수신진연구",
    achievements: [
      "3 international papers accepted",
      "1 US patent submitted",
      "3 domestic patent submitted"
    ],
    image: "/images/projects/privacy_preserving_3d.jpg",
    status: 'ongoing',
    researchSlides: [
      {
        title: "3D Geometry Obfuscation",
        description: "Replacing traditional representations of 3D points into 3D lines in visual localization and development of optimized localization pipeline using 3D lines",
        image: "/proj_img/linecloud.png"
      },
      {
        title: "Visual Descriptor Encryption",
        description: "Developing new feature representations balancing the privacy and utility via fusion of traditional and deep learning-based computer vision",
        image: "/proj_img/SFA.png"
      }
    ]
  },
  {
    title: "Research Center for Precision Medicine Platform Based on Smart Hemo-Dynamic Index",
    duration: "Jun 2022 - Feb 2029",
    description: "The aim of the project is to create a mixed-reality (MR) platform for calculating smart hemodynamics index in real-time to support patients with cardiovascular diseases.",
    keywords: ["physics informed neural network (PINN)", "medical image segmentation", "mixed reality"],
    supportingInstitution: "National Research Foundation of Korea (NRF)",
    projectType: "선도연구센터",
    achievements: [
      "1 international paper accepted",
      "1 domestic patent submitted"
    ],
    image: "/placeholder.svg?height=300&width=400",
    status: 'ongoing',
    researchSlides: [
      {
        title: "PINN Implementation",
        description: "Development and implementation of Physics-Informed Neural Networks for blood flow estimation.",
        image: "/proj_img/pinn.webp"
      },
      {
        title: "Medical Image Segmentation",
        description: "Development of an accurate image-based anomaly detection algorithm.",
        image: "/proj_img/segmentation.png"
      },
      {
        title: "Mixed Reality Platform",
        description: "Creation of a mixed-reality platform for real-time hemodynamics index calculation.",
        image: "/proj_img/Medical.png"
      }
    ]
  },
  {
    title: "Development of Industrial Intelligent Technology for Smart Factory",
    duration: "Jan 2023 - Dec 2026",
    description: "The project is aimed towards developing an accurate algorithm for image-based anomaly detection algorithm that can be applied across a range of different products.",
    keywords: ["anomaly detection", "diffusion model"],
    supportingInstitution: "Korea Evaluation Institute of Industrial Technology (KEIT)",
    projectType: "산업기술거점센터육성시범사업",
    achievements: [
      "2 domestic patents submitted"
    ],
    image: "/placeholder.svg?height=300&width=400",
    status: 'ongoing',
    researchSlides: [
      {
        title: "Anomaly Detection",
        description: "Development of an accurate image-based anomaly detection algorithm.",
        image: "/proj_img/smart.jpeg"
      },
      {
        title: "Industrial data generation with diffusion model",
        description: "Application of the algorithm across a range of industrial products.",
        image: "/placeholder.svg?height=400&width=600"
      }
    ]
  },
  {
    title: "Development of AI Technologies for Indoor and Outdoor Long-Range Voice/Audio/Video Detection",
    duration: "Jan 2023 - Dec 2026",
    description: "The project is aimed towards developing an accurate algorithm for image-based anomaly detection algorithm that can be applied across a range of different products.",
    keywords: ["anomaly detection", "video anomaly detection", "synthetic dataset generation"],
    supportingInstitution: "National Research Foundation of Korea (NRF)",
    projectType: "STEAM 연구사업-미래융합기술파이오니어",
    achievements: [
      "1 international paper accepted"
    ],
    image: "/placeholder.svg?height=300&width=400",
    status: 'ongoing',
    researchSlides: [
      {
        title: "Synthetic Video Anomaly Dataset Generation",
        description: "Enhanced VAD performance through domain adaptation by bridging the gap between synthetic and real-world data.",
        image: "/proj_img/미융파_GTA.mp4"
      },
      {
        title: "Video Anomaly Detection (Unsupervised, Semi-Supervised)",
        description: "Developing robust algorithms for video anomaly detection across various settings (e.g., weakly-supervised, unsupervised) using only video image features, ensuring adaptability to diverse environments.",
        image: "/proj_img/미융파_VAD.mp4"
      }
    ]
  },
  {
    title: "Space Signal Intelligence Payload Data Analysis Technology",
    duration: "Nov 2022 - Feb 2028",
    description: "This project comprises developing an algorithm for type classification of data sent from geostationary satellites. It involves byte-data augmentation using transformers.",
    keywords: ["file fragment classification", "geo-localization"],
    supportingInstitution: "Korea Research Institute for Defense Technology (KRIT)",
    projectType: "특화연구실",
    achievements: [
      "1 journal paper under review",
      "2 international paper accepted",
      "2 domestic patent submitted"
    ],
    image: "/placeholder.svg?height=300&width=400",
    status: 'ongoing',
    researchSlides: [
      {
        title: "File Fragment Classification",
        description: "Development of an algorithm for identifying file fragments from satellites.",
        image: "/proj_img/XMP.png"
      },
      {
        title: "Cross-view Geo-Localization",
        description: "Task to match street view locations with their corresponding satellite view images.",
        image: "/proj_img/geo_localization.png"
      }
    ]
  },
  {
    title: "Development of an Few Shot-based AI Algorithm for Augmentation and Generation of Defect Data",
    duration: "Jan 2025 - Jun 2025",
    description: "The project aims to develop an AI algorithm that can generate defect data for industrial applications using few-shot learning.",
    keywords: ["anomaly detection", "image generation"],
    supportingInstitution: "현대 자동차",
    projectType: "산학협력",
    achievements: [
      "1 international paper accepted"
    ],
    image: "/placeholder.svg?height=300&width=400",
    status: 'ongoing',
    researchSlides: [
      {
        title: "Defect mask generation model based on user prompts",
        description: "Develop a model that leverages user prompts and mask embedding to generate different defect masks.",
        image: "/proj_img/Hyundai_1.png"
      },
      {
        title: "Generative models for defect images in specific industrial domains",
        description: "Research on training diffusion models with learnable text embedding to generate defect images in specific industrial domains.",
        image: "/proj_img/Hyundai_2.png"
      }
    ]
  },
  {
    title: "Continual Learning and Data Augmentation for Anomaly Detection",
    duration: "Mar 2022 - Feb 2025",
    description: "The goal is to adopt a continual learning approach for data augmentation of defect patterns in semiconductor wafers.",
    keywords: ["anomaly detection", "semiconductor", "continual learning"],
    supportingInstitution: "Samsung Electronics DS",
    projectType: "산학협력",
    achievements: [
      "1 journal paper under review",
      "1 US patent submitted",
      "1 domestic patent submitted",
      "2 domestic papers accepted"
    ],
    image: "/placeholder.svg?height=300&width=400",
    status: 'ongoing',
    researchSlides: [
      {
        title: "Continual Learning",
        description: "Adoption of a continual learning approach for anomaly detection.",
        image: "/placeholder.svg?height=400&width=600"
      },
      {
        title: "Data Augmentation",
        description: "Data augmentation techniques for defect patterns in semiconductor wafers.",
        image: "/placeholder.svg?height=400&width=600"
      }
    ]
  }
]

const pastProjects: Project[] = [
  {
    title: "AI for Design of Vehicles",
    duration: "Apr 2022 - Apr 2023",
    description: "The goal is to design a network that can detect changes in vehicle design just by looking at the cross-section of rear air flow.",
    keywords: ["vorticity", "learning from unbalanced limited data"],
    supportingInstitution: "Hyundai NGV & Hanyang AI Research Institute",
    projectType: "",
    achievements: [
      "1 domestic paper accepted"
    ],
    image: "/placeholder.svg?height=300&width=400",
    status: 'past',
    researchSlides: [
      {
        title: "",
        description: "",
        image: "/proj_img/vehicles.png"
      }
    ]
  },
  {
    title: "Violence detection",
    duration: "Jan 2022 - Feb 2022",
    description: "Developed an algorithm for improving accuracy of violence detection in public transportation systems",
    keywords: ["violence detection", "public transports"],
    supportingInstitution: "Blue Asia Corporation",
    projectType: "",
    achievements: [],
    image: "/placeholder.svg?height=300&width=400",
    status: 'past',
    researchSlides: [
      {
        title: "",
        description: "",
        image: "/proj_img/violence.png"
      }
    ]
  },
  {
    title: "Sketch-based person recognition",
    duration: "Sep 2021 - Dec 2021",
    description: "Developed a method for accurately recognizing people from their sketches, thereby reducing burdens for police officers.",
    keywords: ["transfer learning", "domain adaptation", "face recognition"],
    supportingInstitution: "AI & Robotics Institute @ KIST",
    projectType: "",
    achievements: [],
    image: "/placeholder.svg?height=300&width=400",
    status: 'past',
    researchSlides: [
      {
        title: "",
        description: "",
        image: "/proj_img/person_recog.png"
      }
    ]
  },
  {
    title: "3D human pose estimation",
    duration: "Sep 2021 - Dec 2021",
    description: "Investigated in improving accuracy of real-time 3D human pose estimation with use of a commercial depth camera.",
    keywords: ["real-time", "human pose estimation", "uncertainty analysis"],
    supportingInstitution: "Bagel Labs Corporation",
    projectType: "",
    achievements: [],
    image: "/placeholder.svg?height=300&width=400",
    status: 'past',
    researchSlides: [
      {
        title: "",
        description: "",
        image: "/proj_img/pose_estimation.png"
      }
    ]
  },
  {
    title: "Restoring potteries from fragments",
    duration: "Jul 2018 - Dec 2020",
    description: "Developed an efficient pipeline for reassembling potteries from their constituent fragments.",
    keywords: ["3D reconstruction", "pottery restoration"],
    supportingInstitution: "",
    projectType: "",
    achievements: [
      "Publications: ICCV 2021, ICPR 2020, ICCVW 2019"
    ],
    image: "/placeholder.svg?height=300&width=400",
    status: 'past',
    researchSlides: [
      {
        title: "Pottery Fragment Analysis",
        description: "Analysis and processing of individual pottery fragments for reconstruction",
        image: "/proj_img/pottery_1.png"
      },
      {
        title: "Pottery Reconstruction",
        description: "Reassembly process of pottery fragments using our developed pipeline",
        image: "/proj_img/pottery_2.png"
      }
    ]
  },
  {
    title: "Advanced Integrated Intelligence for Identification (AIID)",
    duration: "Jul 2018 - Jul 2021",
    description: "Developed face frontalization and face-masking pipelines for robust face recognition",
    keywords: ["face recognition", "face frontalization"],
    supportingInstitution: "",
    projectType: "",
    achievements: [
      "Related publication: ICIP 2021"
    ],
    image: "/placeholder.svg?height=300&width=400",
    status: 'past',
    researchSlides: [
      {
        title: "Face Recognition Demo",
        description: "Demonstration of our face recognition system",
        image: "https://www.youtube.com/embed/-p3pD1eEF9Q"
      }
    ]
  }
]

const ImageViewer = ({ image, onClose }: { image: string; onClose: () => void }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 z-[200]"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative max-w-[90vw] max-h-[90vh]">
          <button 
            className="absolute top-4 right-4 text-white z-[201] bg-black/50 p-2 rounded-full hover:bg-black/70"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={image} 
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState<ProjectType>('all')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [scale, setScale] = useState(1)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [viewerImage, setViewerImage] = useState<string | null>(null)

  const handleZoom = (direction: 'in' | 'out') => {
    setScale(prev => {
      const newScale = direction === 'in' ? prev + 0.25 : prev - 0.25
      return Math.min(Math.max(newScale, 0.5), 3.0)
    })
  }

  const filteredProjects = filter === 'all' 
    ? [...ongoingProjects, ...pastProjects]
    : filter === 'ongoing'
    ? ongoingProjects
    : pastProjects

  const handleCloseViewer = useCallback(() => {
    setViewerImage(null)
  }, [])

  return (
    <Layout>
      {viewerImage && (
        <ImageViewer 
          image={viewerImage} 
          onClose={handleCloseViewer} 
        />
      )}
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Projects</h1>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button
            variant={filter === 'ongoing' ? 'default' : 'outline'}
            onClick={() => setFilter('ongoing')}
          >
            Ongoing
          </Button>
          <Button
            variant={filter === 'past' ? 'default' : 'outline'}
            onClick={() => setFilter('past')}
          >
            Past
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${
                project.status === 'past' ? 'border-gray-400' : 'border-green-400'
              } border-2 h-[250px] sm:h-[200px]`}
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col text-gray-800">
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{project.title}</h3>
                <p className="text-xs sm:text-sm mb-1 sm:mb-2 text-gray-600">{project.duration}</p>
                <p className="text-xs sm:text-sm line-clamp-3 sm:line-clamp-2 text-gray-700">{project.description}</p>
                <Dialog modal={true}>
                  <DialogTrigger asChild>
                    <button className="absolute bottom-4 right-4 w-8 h-8 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors">
                      <Plus className="w-5 h-5 text-primary" />
                    </button>
                  </DialogTrigger>
                  <DialogContent 
                    className="max-w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto z-[100]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                    </DialogHeader>
                    
                    {/* Research Carousel */}
                    <div className="mt-4 mb-6">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {project.researchSlides.map((slide, index) => (
                            <CarouselItem key={index}>
                              <div className="grid grid-cols-1 gap-6">
                                <div className="space-y-3 text-center">
                                  <h3 className="text-2xl font-bold">{slide.title}</h3>
                                  <p className="text-base text-gray-600 max-w-3xl mx-auto">{slide.description}</p>
                                </div>

                                <div className="relative h-[250px] sm:h-[350px] rounded-lg overflow-hidden group mx-auto">
                                  {slide.image.endsWith('.mp4') ? (
                                    <video
                                      src={slide.image}
                                      className="w-full h-full object-contain"
                                      controls
                                      muted
                                      loop
                                    />
                                  ) : slide.image.includes('youtube.com/embed') ? (
                                    <div className="aspect-video w-full h-full flex items-center justify-center">
                                      <iframe
                                        src={slide.image}
                                        className="w-full h-full max-w-[800px]"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                      />
                                    </div>
                                  ) : (
                                    <img
                                      src={slide.image}
                                      alt={project.title}
                                      className="w-full h-full object-contain"
                                    />
                                  )}
                                </div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
                    </div>

                    {/* Project Details */}
                    <div className="border-t pt-6">
                      <div className="grid gap-6">
                        <div className="flex flex-wrap gap-2">
                          {project.keywords.map((keyword, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                        
                        {project.supportingInstitution && (
                          <div>
                            <h4 className="font-semibold mb-1">Supporting Institution</h4>
                            <p className="text-sm text-gray-600">{project.supportingInstitution}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

