import Layout from '../components/layout'

type Course = {
  id: string
  name: string
  type: string
  year: number
  semester: 'Spring' | 'Autumn'
}

const courses: Course[] = [
  // Autumn 2024
  { id: 'cv-2024a', name: 'Introduction to Computer Vision', type: '4th year undergraduate course', year: 2024, semester: 'Autumn' },
  { id: 'opt-2024a', name: 'Nonlinear Optimization', type: 'graduate course', year: 2024, semester: 'Autumn' },
  { id: 'opt-ai-2024a', name: 'Optimization in AI', type: 'evening course', year: 2024, semester: 'Autumn' },
  { id: 'ee-2024a', name: 'Introduction to Topics in Electronic Engineering', type: '1st year undergraduate course', year: 2024, semester: 'Autumn' },

  // Spring 2024
  { id: 'ai-2024s', name: 'Introduction to Artificial Intelligence', type: '4th year undergraduate course', year: 2024, semester: 'Spring' },
  { id: 'la-2024s', name: 'Linear Algebra', type: '2nd year undergraduate course', year: 2024, semester: 'Spring' },
  { id: 'cd1-2024s', name: 'Career Development I', type: '1st year undergraduate course', year: 2024, semester: 'Spring' },
  { id: 'aiip-2024s', name: 'Introduction to AI Image Processing', type: 'evening course', year: 2024, semester: 'Spring' },
  
  // Autumn 2023
  { id: 'cv-2023a', name: 'Introduction to Computer Vision', type: '4th year undergraduate course', year: 2023, semester: 'Autumn' },
  { id: 'ai-display-2023a', name: 'AI in Display and Industry', type: 'graduate course', year: 2023, semester: 'Autumn' },
  { id: 'opt-2023a', name: 'Optimization in AI', type: 'evening course', year: 2023, semester: 'Autumn' },
  
  // Spring 2023
  { id: '3dcv-2023s', name: '3D Computer Vision', type: 'graduate course', year: 2023, semester: 'Spring' },
  { id: 'ai-2023s', name: 'Introduction to Artificial Intelligence', type: '4th year undergraduate course', year: 2023, semester: 'Spring' },
  { id: 'cd1-2023s', name: 'Career Development I', type: '1st year undergraduate course', year: 2023, semester: 'Spring' },
  { id: 'dsp-2023s', name: 'Introduction to Digital Signal Processing', type: 'evening course', year: 2023, semester: 'Spring' },
  
  // Autumn 2022
  { id: 'opt-2022a', name: 'Nonlinear Optimization', type: 'graduate course', year: 2022, semester: 'Autumn' },
  { id: 'prob-2022a', name: 'Probability & Statistics', type: '1st year undegraduate course', year: 2022, semester: 'Autumn' },
  { id: 'opt-ai-2022a', name: 'Optimization in AI', type: 'evening course', year: 2022, semester: 'Autumn' },
  
  // Spring 2022
  { id: '3dcv-2022s', name: '3D Computer Vision', type: 'graduate course', year: 2022, semester: 'Spring' },
  { id: 'ai-2022s', name: 'Introduction to Artificial Intelligence', type: '4th year undergraduate course', year: 2022, semester: 'Spring' },
  { id: 'cd1-2022s', name: 'Career Development I', type: '1st year undergraduate course', year: 2022, semester: 'Spring' },
  
  // Autumn 2021
  { id: 'prob-2021a', name: 'Probability & Statistics', type: '1st year undegraduate course', year: 2021, semester: 'Autumn' },
  { id: 'dsp2-2021a', name: 'Digital Signal Processing II', type: '3rd year undergraduate course', year: 2021, semester: 'Autumn' },
  { id: 'cd2-2021a', name: 'Career Development II', type: '3rd year undergraduate course', year: 2021, semester: 'Autumn' },
]

export default function Teaching() {
  // Group courses by year and semester
  const groupedCourses = courses.reduce((acc, course) => {
    const key = `${course.year}-${course.semester}`
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(course)
    return acc
  }, {} as Record<string, Course[]>)

  // Sort keys in reverse chronological order (newest first)
  const sortedKeys = Object.keys(groupedCourses).sort((a, b) => {
    const [yearA, semesterA] = a.split('-');
    const [yearB, semesterB] = b.split('-');
    
    // First compare years in reverse order
    if (yearA !== yearB) {
      return parseInt(yearB) - parseInt(yearA);
    }
    
    // If years are same, sort semesters (Autumn should come before Spring)
    return semesterA === 'Autumn' ? -1 : 1;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">Teaching</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-gray-200 dark:border-gray-700">
            {sortedKeys.map((key) => {
              const [year, semester] = key.split('-')
              return (
                <div key={key} className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">[ {semester} {year} ]</time>
                  <div className="mt-2 space-y-2">
                    {groupedCourses[key].map((course) => (
                      <div key={course.id}>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{course.name}</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{course.type}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

