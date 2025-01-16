'use client'

import { useState } from 'react'
import Image from 'next/image'
import Layout from '../components/layout'
import { Link2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { internationalPublications } from '../data/publications-data'

type PublicationType = 'all' | 'international' | 'domestic' | 'patent'

export default function Publications() {
  const [filter, setFilter] = useState<PublicationType>('all');

  const shouldShow = (type: PublicationType) => {
    return filter === 'all' || filter === type;
  };

  const groupedByYear = internationalPublications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, typeof internationalPublications>);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Publications</h1>

        <div className="mb-16 overflow-x-auto">
          <div className="flex justify-start md:justify-center gap-4 min-w-max px-4">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button
              variant={filter === 'international' ? 'default' : 'outline'}
              onClick={() => setFilter('international')}
            >
              International
            </Button>
            <Button
              variant={filter === 'domestic' ? 'default' : 'outline'}
              onClick={() => setFilter('domestic')}
            >
              Domestic
            </Button>
            <Button
              variant={filter === 'patent' ? 'default' : 'outline'}
              onClick={() => setFilter('patent')}
            >
              Patents
            </Button>
          </div>
        </div>

        {shouldShow('international') && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">International Publications</h2>
            {Object.entries(groupedByYear)
              .sort((a, b) => Number(b[0]) - Number(a[0]))
              .map(([year, publications]) => (
                <div key={year} className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4">{year}</h3>
                  <div className="space-y-8">
                    {publications.map((pub) => (
                      <div key={pub.id} className="bg-white rounded-lg shadow-lg p-6">
                        <div className="md:flex gap-8">
                          <div className="w-full">
                            <h4 className="text-xl font-bold mb-2">{pub.title}</h4>
                            <p className="mb-2">{pub.authors}</p>
                            <p className="mb-4">{pub.conference}</p>
                            <div className="flex gap-4">
                              {pub.links?.paper && (
                                <a
                                  href={pub.links.paper}
                                  className="inline-flex items-center text-blue-600 hover:underline"
                                >
                                  <Link2 className="w-4 h-4 mr-1" />
                                  Paper
                                </a>
                              )}
                              {pub.links?.code && (
                                <a
                                  href={pub.links.code}
                                  className="inline-flex items-center text-blue-600 hover:underline"
                                >
                                  <Link2 className="w-4 h-4 mr-1" />
                                  Code
                                </a>
                              )}
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm">Read More</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[600px] max-h-[70vh] overflow-y-auto w-[90vw]">
                                  <DialogHeader className="space-y-2">
                                    <DialogTitle className="text-lg">{pub.title}</DialogTitle>
                                    <DialogDescription className="text-sm">{pub.authors}</DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-3 py-3">
                                    <Image
                                      src={pub.mainFigure}
                                      alt="Main figure"
                                      width={400}
                                      height={300}
                                      className="w-full h-auto object-cover rounded-lg"
                                    />
                                    <p className="text-sm text-gray-500 leading-relaxed">{pub.abstract}</p>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </section>
        )}

        {/* Domestic Publications */}
        {shouldShow('domestic') && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Domestic Publications</h2>
            <p className="text-gray-600 mb-6">
              Domestic papers refer to 4 to 6-page documents (in Korean or English) archived in South Korean journals or conference proceedings.
              Below does not include sole-abstract submissions.
            </p>
            <div className="space-y-12">
              {/* 2024 */}
              <div>
                <h3 className="text-2xl font-bold mb-6">2024</h3>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <ul className="space-y-6">
                    <li>
                      <h4 className="font-semibold">대조 학습을 통한 비디오 이상 탐지를 위한 시각적 특징과 텍스트 특징 정렬</h4>
                      <p className="text-gray-600">유혁준, 홍제형</p>
                      <p className="text-gray-600 italic">2024 대한전자공학회 하계학술대회(oral), 제주</p>
                    </li>
                    <li>
                      <h4 className="font-semibold">YOLO 및 SAM 모델 기반 용접 X-ray 결함 영상 증강 기법</h4>
                      <p className="text-gray-600">최재혁, 홍제형</p>
                      <p className="text-gray-600 italic">2024 대한전자공학회 하계학술대회(oral), 제주</p>
                    </li>
                    <li>
                      <h4 className="font-semibold">학습 기반 파일 조각 분류 기법 연구 동향</h4>
                      <p className="text-gray-600">김형식, 홍제형</p>
                      <p className="text-gray-600 italic">2024 대한전자공학회 하계학술대회(oral), 제주</p>
                    </li>
                    <li>
                      <h4 className="font-semibold">시각적 국소화를 위한 2차원 균일 선군 쿼리에서의 밀도 기반 특징점 복원에 관한 연구</h4>
                      <p className="text-gray-600">이종우, 홍제형</p>
                      <p className="text-gray-600 italic">제 36 회 영상처리 및 이해에 관한 워크샵 (IPIU 2024), 제주</p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* 2023 */}
              <div>
                <h3 className="text-2xl font-bold mb-6">2023</h3>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <ul className="space-y-6">
                    <li>
                      <h4 className="font-semibold">비정상 특성을 고려한 메모리뱅크 기반 비정상 탐지 기법</h4>
                      <p className="text-gray-600">임지인, 홍제형</p>
                      <p className="text-gray-600 italic">2023 대한전자공학회 하계학술대회 (oral), [LG전자 관심 논문상], 제주</p>
                    </li>
                    <li>
                      <h4 className="font-semibold">3차원 비균일 방향성 선군 데이터를 이용한 Privacy-Preserving 이미지 기반 Localization 기법</h4>
                      <p className="text-gray-600">문희준, 홍제형</p>
                      <p className="text-gray-600 italic">2023 대한전자공학회 하계학술대회 (oral), [LG전자 관심 논문상], 제주</p>
                    </li>
                    <li>
                      <h4 className="font-semibold">딥러닝 기반 축 대칭 물체의 회전축 추정 기법</h4>
                      <p className="text-gray-600">류시성, 이주헌†, 홍제형†</p>
                      <p className="text-gray-600 italic">2023 대한전자공학회 하계학술대회 (oral), [LG전자 관심 논문상], 제주</p>
                    </li>
                    <li>
                      <h4 className="font-semibold">정상 데이터 복원을 통한 영상 기반 반도체 웨이퍼 결함 검출 기법</h4>
                      <p className="text-gray-600">박태경, 한승주, 홍제형</p>
                      <p className="text-gray-600 italic">2023 대한전자공학회 하계학술대회, 제주</p>
                    </li>
                    <li>
                      <h4 className="font-semibold">홀로렌즈2 기반 손동작 인식 연구를 위한 손 영상 분할</h4>
                      <p className="text-gray-600">박정우, 홍제형</p>
                      <p className="text-gray-600 italic">2023 대한전자공학회 하계학술대회, 제주</p>
                    </li>
                    <li>
                      <h4 className="font-semibold">Positional Encoding 기법을 활용한 유동 속도 예측 물리 인공 신경망 구현</h4>
                      <p className="text-gray-600">김진현, 윤찬혁, 김준, 송시몬†, 홍제형†</p>
                      <p className="text-gray-600 italic">2023 대한전자공학회 하계학술대회, 제주</p>
                    </li>
                    <li>
                      <h4 className="font-semibold">차량 공력 성능 개선을 위한 인공지능 모델 기반 후류 분석 기법</h4>
                      <p className="text-gray-600">윤찬혁, 김준, 조성식, 홍제형†, 송시몬†</p>
                      <p className="text-gray-600 italic">2023 대한기계학회 유체공학부문 춘계학술대회(oral), 서울대학교</p>
                    </li>
                    <li>
                      <h4 className="font-semibold">조건부 적대적 신경망에 대한 선택적 망각 기법</h4>
                      <p className="text-gray-600">문상혁, 홍제형</p>
                      <p className="text-gray-600 italic">제 35 회 영상처리 및 이해에 관한 워크샵 (IPIU 2023), 제주</p>
                    </li>
                    <li>
                      <h4 className="font-semibold">후류 차영상을 활용한 멀티 레이블 기반 자동차 공력성능 관련 디자인 인자 분류 기법</h4>
                      <p className="text-gray-600">윤찬혁, 김준, 조정식, 홍제형†, 송시몬†</p>
                      <p className="text-gray-600 italic">제 35 회 영상처리 및 이해에 관한 워크샵 (IPIU 2023), 제주</p>
                    </li>
                    <li>
                      <h4 className="font-semibold">트랜스포머 디코더 기반 레고 모형 생성을 위한 조립 시퀀스 예측 방법</h4>
                      <p className="text-gray-600">박종규, 이주헌†, 홍제형†</p>
                      <p className="text-gray-600 italic">제 35 회 영상처리 및 이해에 관한 워크샵 (IPIU 2023), 제주</p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* 2022 */}
              <div>
                <h3 className="text-2xl font-bold mb-6">2022</h3>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <ul className="space-y-6">
                    <li>
                      <h4 className="font-semibold">깊이 추정을 통한 사람 3차원 형상 추정 성능 향상 연구</h4>
                      <p className="text-gray-600">문상인*, 김도훈*, 장현지*, 홍제형</p>
                      <p className="text-gray-600 italic">2022 대한전자공학회 추계학술대회 (oral), 곤지암</p>
                    </li>
                    <li>
                      <h4 className="font-semibold">A Contrastive Learning Framework for Weakly Supervised Video Anomaly Detection</h4>
                      <p className="text-gray-600">박현정, 홍제형</p>
                      <p className="text-gray-600 italic">2022 한국방송미디어공학회 추계학술대회, 서울</p>
                    </li>
                    <li>
                      <h4 className="font-semibold">준지도학습의 이상행동감지에서의 이상행동종류별 균형의 중요성 분석</h4>
                      <p className="text-gray-600">박태경, 박현정, 홍제형</p>
                      <p className="text-gray-600 italic">2022 한국방송미디어공학회 추계학술대회, 서울</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Patents */}
        {shouldShow('patent') && (
          <section>
            <h2 className="text-3xl font-bold mb-8">Patents</h2>

            {/* Registered Patents */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Registered</h3>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <ul className="space-y-6">
                  <li>
                    <p className="font-semibold">(2024 US) Device and method for authenticating user based on facial characteristics and mask characteristics of the user</p>
                    <p className="text-gray-600">I.-J. Kim, G.P. Nam, H. Park, J. Cho and J.-H. Hong</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2024 Korea) 훼손 물체의 효율적인 복원을 위한 복원 그래프 생성 방법 및 이를 사용한 가상 정합 시스템</p>
                    <p className="text-gray-600">김진욱, 유성종, 홍제형, 아샤드무함마드지샨</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2023 Korea) 물체의 원형을 복원하기 위해 물체의 회전축을 추출하는 방법 및 이를 수행하는 가상 정합 시스템</p>
                    <p className="text-gray-600">김진욱, 홍제형, 유성종, 아샤드무함마드지샨</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2023 Korea) 3개 이상의 센싱 축을 갖는, 다수의 필드 센서를 자가 교정하는 방법 및 이를 수행하는 시스템</p>
                    <p className="text-gray-600">김익재, 홍제형, 강동훈</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2023 Korea) 3개 이상의 센싱 축을 갖는, 하나 이상의 필드 센서를 자가 교정하는 방법 및 이를 수행하는 시스템</p>
                    <p className="text-gray-600">김익재, 홍제형, 강동훈</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2023 Korea) 사용자의 얼굴 속성 및 마스크 속성 기반 사용자 인증 장치 및 방법</p>
                    <p className="text-gray-600">김익재, 남기표, 박해솔, 조정현, 홍제형</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2022 US) Method for self-calibrating multiple field sensors having three or more sensing axes and system performing the same</p>
                    <p className="text-gray-600">I.-J. Kim, J.H. Hong and D. Kang</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2021 Korea) 도자기 입술 정보 및 베이스 정보를 활용한 도자기 편의 가상 정합 방법 및 시스템</p>
                    <p className="text-gray-600">김진욱, 홍제형, 아샤드무함마드지샨, 유성종</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2021 Korea) 회전축 정보 기반의 도자기 파편의 형상 특징 추출 장치 및 이를 이용한 도자기 파편의 가상 정합 시스템</p>
                    <p className="text-gray-600">김진욱, 홍제형, 아샤드무함마드지샨, 유성종</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2020 Korea) 가상 정합을 위한 도자기 파편의 스캔 시스템 및 방법</p>
                    <p className="text-gray-600">김영민, 김진욱, 홍제형, 안재홍</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2020 Korea) 파단선의 특성을 활용한 도자기 파편의 가상 정합 시스템 및 방법</p>
                    <p className="text-gray-600">김영민, 김진욱, 홍제형</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Submitted Patents */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Submitted</h3>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <ul className="space-y-6">
                  <li>
                    <p className="font-semibold">(2024 Korea) 웨이퍼의 결함을 검출하고 분류하는 전자 장치 및 그 동작 방법</p>
                    <p className="text-gray-600">홍제형, 문상혁, 박태경</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2024 PCT) 3D 선군 데이터 기반 시각적 국소화 방법 및 이를 실행하는 장치</p>
                    <p className="text-gray-600">Je Hyeong Hong, Heejoon Moon and Chunghwan Lee</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2024 Korea) 비지도 학습 기반 비정상 검출 시스템</p>
                    <p className="text-gray-600">홍제형, 임지인</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2024 Korea) 3D 선군 데이터 기반 시각적 국소화 방법 및 이를 실행하는 장치</p>
                    <p className="text-gray-600">홍제형, 문희준, 이정환</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2024 Korea) 웨이퍼의 결함을 검출하고 분류하는 전자 장치 및 그 동작 방법</p>
                    <p className="text-gray-600">홍제형, 문상혁, 박태경, 한승주</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2024 Korea) 어텐션 기법을 활용한 다양한 유형 및 크기의 데이터 조각 분류 방법 및 그 데이터 처리 장치</p>
                    <p className="text-gray-600">홍제형, 박종규, 류시성</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2024 Korea) 개인정보 유출 방지를 위한 시각적 국소화 방법 및 이를 실행하는 장치</p>
                    <p className="text-gray-600">홍제형, 윤찬혁, 이종우</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2024 US) Localization Method and Apparatus Using Line Cloud Map Data, Line Cloud Map Data Generation Method</p>
                    <p className="text-gray-600">Je Hyeong Hong, Chunghwan Lee and Chanhyuk Yun</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2023 US) Method and Apparatus with Defect Detection</p>
                    <p className="text-gray-600">Je Hyeong Hong, Sanghyuk Moon, Hyeonjeong Park and Seungju Han</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2023 Korea) 벡터장 분석 시스템 및 분석 방법</p>
                    <p className="text-gray-600">윤찬혁, 김준, 홍제형, 송시몬, 장일훈, 김진현</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2023 Korea) 비정상 검출을 위한 비지도 기반 학습 방법 및 검출 시스템</p>
                    <p className="text-gray-600">박현정, 홍제형</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2023 Korea) 단일 모델을 이용한 여러 가지 유형 및 다양한 크기의 데이터 생성 기법</p>
                    <p className="text-gray-600">박종규, 홍제형</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2023 Korea) 결함 검출 모델을 학습시키는 학습 방법 및 학습 장치</p>
                    <p className="text-gray-600">홍제형, 문상혁, 박현정, 한승주</p>
                  </li>
                  <li>
                    <p className="font-semibold">(2023 Korea) 선군 맵 데이터를 이용하는 위치 추정 방법 및 장치, 선군 맵 데이터 생성 방법</p>
                    <p className="text-gray-600">홍제형, 이정환, 윤찬혁</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

      </div>
    </Layout>
  )
}

