import Image from 'next/image'
import Layout from '../components/layout'
import { Link2, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Members() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-16 text-center">Lab Members</h1>
        
        {/* Professor Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Professor</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="relative h-[500px]">
                  <Image
                    src="/prof_hong.jpg"
                    alt="Je Hyeong Hong"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">Je Hyeong Hong (홍제형)</h3>
                <p className="text-gray-600 mb-6">Assistant Professor @ Dept. Electronic Engineering, Hanyang University, Seoul</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Education</h4>
                    <ul className="space-y-2">
                      <li>2014 - 2018: PhD in Engineering (Computer Vision), Univ. of Cambridge
                        <ul className="ml-6 mt-1">
                          <li>Supervisor: Prof. Roberto Cipolla</li>
                          <li>Advisors: Dr Andrew Fitzgibbon, Prof. Christopher Zach</li>
                        </ul>
                      </li>
                      <li>2007 - 2011: BA, MEng in Electrical & Information Sciences, Univ. of Cambridge</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Work Experience</h4>
                    <ul className="space-y-2">
                      <li>2021 - present: Assistant Professor @ Dept. Electronic Engineering, Hanyang University, Seoul</li>
                      <li>2018 - 2021: Post-doc @ Center for AI, KIST (alternative military service)
                        <ul className="ml-6 mt-1">
                          <li>Advisor: Dr Ig-Jae Kim</li>
                        </ul>
                      </li>
                      <li>2014 - 2018: PhD internships
                        <ul className="ml-6 mt-1">
                          <li>Microsoft (2014)</li>
                          <li>Toshiba (2015, 2017)</li>
                          <li>Facebook Reality Lab (2017)</li>
                          <li>Snap (2018)</li>
                        </ul>
                      </li>
                      <li>2013: Research Assistant, Dept. of Engineering, Univ. of Cambridge</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Academic Activities</h4>
                    <ul className="space-y-1">
                      <li>Reviewer for CVPR, ECCV, AAAI, WACV, ACCV since 2018</li>
                      <li>Talks at KIST Center for Artificial Intelligence (2016), ETRI (2016)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Awards</h4>
                    <ul className="space-y-1">
                      <li>KIST AI & Robotics Insitute Award for Technical Excellence (2020) and Public Relations (2019)</li>
                      <li>CVPR 2017 Doctoral Consortium</li>
                      <li>Recipient of the Microsoft Scholarship (2015-2017)</li>
                      <li>Recipient of the Toshiba Research Studentship (2014-2015)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Team</h2>
          
          {/* MS-PhD Students */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">MS-PhD Students</h3>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Yongho Son (손용호, PhD 2기)",
                  photo: "/Yongho Son.jpg",
                  contact: "yhson-at-hanyang.ac.kr",
                  scholarship: "Awarded Dept. AI Scholarship",
                  research: "Research: Anomaly detection"
                },
                {
                  name: "👑 Sisung Liu (류시성, MS-PhD 4기)",
                  photo: "/Sisung Liu.jpeg",
                  contact: "liuss98-at-hanyang.ac.kr",
                  scholarship: "Awarded Dept. AI Scholarship",
                  research: "Research: Neural geometry estimation"
                },
                {
                  name: "Jongwoo Lee (이종우, MS-PhD 4기)",
                  photo: "/Jongwoo Lee.png",
                  contact: "sanngu5-at-hanyang.ac.kr",
                  scholarship: "Awarded Dept. AI Scholarship",
                  research: "Research: Privacy-preserving feature learning"
                },
                {
                  name: "Heejoon Moon (문희준, MS-PhD 3기)",
                  photo: "/Heejoon Moon.jpg",
                  contact: "wilko97-at-hanyang.ac.kr",
                  scholarship: "Awarded Dept. AI Scholarship",
                  research: "Research: Privacy-preserving visual localization"
                },
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-[350px] w-[300px] mx-auto">
                    {member.name.includes("Sisung Liu") ? (
                      <Link href="https://sisung-liu-main.vercel.app" target="_blank">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-contain cursor-pointer"
                        />
                      </Link>
                    ) : member.name.includes("Yongho Son") ? (
                      <Link href="https://hy-yhson.github.io" target="_blank">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-contain cursor-pointer"
                        />
                      </Link>
                    ) : member.name.includes("Heejoon Moon") ? (
                      <Link href="https://phantom0122.github.io" target="_blank">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-contain cursor-pointer"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>{member.research}</li>
                      <li>{member.scholarship}</li>
                      <li className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {member.contact}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MS Students */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">MS Students</h3>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Jin Hyun Kim (김진현, MS 4기)",
                  photo: "/Jin Hyun Kim.jpg",
                  contact: "jhkim02-at-hanyang.ac.kr",
                  scholarship: "Funded by BK21 TA Programme",
                  research: "Research: Physics-informed neural estimation"
                },
                {
                  name: "Jeongwoo Park (박정우, MS 4기)",
                  photo: "/Jeongwoo Park.jpg",
                  contact: "jwzz1213-at-hanyang.ac.kr",
                  scholarship: "Funded by BK21 TA Programme",
                  research: "Research: Image segmentation"
                },
                {
                  name: "Taekyeong Park (박태경, MS 4기)",
                  photo: "/Taekyeong Park.jpg",
                  contact: "tkp0305-at-hanyang.ac.kr",
                  scholarship: "Awarded Hanyang STAR-RA Scholarship",
                  research: "Research: Anomaly detection"
                },
                {
                  name: "Joo Kyoung Lee (이주경, MS 3기)",
                  photo: "/Joo Kyoung Lee.png",
                  contact: "jkd112-at-hanyang.ac.kr",
                  scholarship: "Funded by Bagel Labs",
                  research: "Research: Human pose estimation"
                },
                {
                  name: "Jeong Gon Kim (김정곤, MS 2기)",
                  photo: "/Jeong Gon Kim.jpg",
                  contact: "drgon22-at-hanyang.ac.kr",
                  scholarship: "Awarded Hanyang HY-In Scholarship",
                  research: "Research: Privacy-preserving visual localization"
                },
                {
                  name: "HyeongSik Kim (김형식, MS 2기)",
                  photo: "/Hyeongsik Kim.jpg",
                  contact: "khs06007-at-hanyang.ac.kr",
                  scholarship: "Awarded Dept. AI-Semi Scholarship",
                  research: "Research: File fragment classification"
                },
                {
                  name: "Hyouk Jun You (유혁준, MS 2기)",
                  photo: "/Hyouk Jun You.jpg",
                  contact: "doo304702-at-hanyang.ac.kr",
                  scholarship: "Awarded Dept. AI-Semi Scholarship",
                  research: "Research: Video anomaly detection"
                },
                {
                  name: "Jiin Im (임지인, MS 2기)",
                  photo: "/Jiin Im.jpg",
                  contact: "skqldl33-at-hanyang.ac.kr",
                  scholarship: "Awarded Hanyang HY-In Scholarship",
                  research: "Research: Privacy-preserving feature learning"
                },
                {
                  name: "Jae Hyeok Choi (최재혁, MS 2기)",
                  photo: "/Jae Hyeok Choi.png",
                  contact: "sunhp1333-at-hanyang.ac.kr",
                  scholarship: "Awarded Dept. AI-Semi Scholarship",
                  research: "Research: Anomaly generation"
                },
                {
                  name: "Sun Jo (조순, MS 1기)",
                  photo: "/Sun Jo.png",
                  contact: "choyw5-at-hanyang.ac.kr",
                  scholarship: "Awarded Dept. AI Scholarship",
                  research: "Research: Image segmentation"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-[350px] w-[300px] mx-auto">
                    {member.name.includes("HyeongSik Kim") ? (
                      <Link href="https://github.com/syt06007" target="_blank">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-contain cursor-pointer"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>{member.research}</li>
                      <li>{member.scholarship}</li>
                      <li className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {member.contact}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Research Interns Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Research Interns</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-[300px] w-[300px] mx-auto">
                <Image
                  src="/Yoo Rim Cho.jpg"
                  alt="Yoo Rim Cho"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Yoo Rim Cho (조유림)</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    csacyr-at-hanyang.ac.kr
                  </li>
                  <li>Research: Depth fusion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Alumni Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Alumni</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Master's Students</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">Chunghwan Lee (이정환) - 2022.03~2024.02</p>
                    <p className="text-gray-600">Graduated with a first-authored CVPR paper, now a research intern @ Naver Labs</p>
                  </li>
                  <li>
                    <p className="font-semibold">Sanghyuk Moon (문상혁) - 2022.03~2024.02</p>
                    <p className="text-gray-600">Re-submitted JCR Q1 journal paper as a co-first author</p>
                  </li>
                  <li>
                    <p className="font-semibold">Jeonggyu Park (박종규) - 2022.03~2024.02</p>
                    <p className="text-gray-600">Graduated with a first-authored ICASSP paper, is now working @ SK C&C.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Chanhyuk Yun (윤찬혁) - 2022.03~2024.02</p>
                    <p className="text-gray-600">Graduated with a co-authored CVPR paper</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Researcher</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">Hyeonjeong Park (2022.10~2023.07)</p>
                    <p className="text-gray-600">PhD Student @ Univ. Illinois Chicago</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Undergraduate Interns</h3>
                <ul className="space-y-2">
                  <li>Se Jong Ryu - MS Student @ KAIST (2024.04~2024.10)</li>
                  <li>Seong Ho Kim - MS Student @ KAIST (2024.04~2024.10)</li>
                  <li>Jiin Im - MS Student @ HY-Vision Lab, Hanyang University (2023.01~2024.02)</li>
                  <li>Hyebin Ahn - MS Student @ KAIST (2022.06~2022.08)</li>
                  <li>Sangin Mun - Intern @ Samsung Electronics (2022.05~2022.08)</li>
                  <li>Gaon Choi - Alternative Military Service @ Jeuneung IT (2021.09~2022.02)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

