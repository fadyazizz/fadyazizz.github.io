import React, { useState, useLayoutEffect, useRef } from 'react'
import '../css/cv.css'
import Circle from '../images/circle.png'
import Card from './Card'
import TimeLineLine from '../images/timeLineLine.png'
import Image from '../images/intellect.jpg'
import Bank from '../images/bank.jpg'
import Consult from '../images/agreement.jpg'
import Court from '../images/court.jpg'
import Consultant from '../images/consultant.jpg'
import RealEstate from '../images/realestate.jpg'
import Gears from '../images/gears1.jpg'
import Appraise from '../images/appraise1.jpg'
import Arab from '../images/arabUnion1.jpg'
import Integration from '../images/integration.jpg'
import Economic from '../images/economic.jpg'
import Nature from '../images/nature.jpg'
import Water from '../images/water.jpg'
import Property from '../images/property.jpg'
import Expert from '../images/expertReal.jpg'
import World from '../images/World.jpg'
import ArabInvest from '../images/arabInvest.jpg'
import FaceBook from '../images/facebook.png'
import Instagram from '../images/instagram.png'
import Twit from '../images/twitter.png'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import Particles from 'react-particles-js'
export default function CV(props) {
  const [show, doShow] = useState({ itemOne: 'false' })
  const card = useRef(null)

  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top
    const bottomPos = (element) => element.getBoundingClientRect().bottom
    const div1Pos = topPos(card.current)

    const div1BottomPos = bottomPos(card.current)

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight

      if (div1Pos + 50 < scrollPos) {
        console.log('hereeee')
        doShow((state) => ({ ...state, itemOne: 'true' }))
      }
      if (div1Pos > scrollPos) {
        doShow((state) => ({ ...state, itemOne: 'false' }))
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <React.Fragment>
      <div className='backGround'></div>

      <div className='grid'>
        <div className='firstDiv'>
          <div className='canvasStyle'>
            <Particles
              options={{
                background: {
                  color: {
                    value: '#0d47a1',
                  },
                },
                fpsLimit: 60,
                interactivity: {
                  detectsOn: 'canvas',
                  events: {
                    onClick: {
                      enable: true,
                      mode: 'push',
                    },
                    onHover: {
                      enable: true,
                      mode: 'repulse',
                    },
                    resize: false,
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 40,
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: '#ffffff',
                  },
                  links: {
                    color: '#ffffff',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: 'none',
                    enable: true,
                    outMode: 'bounce',
                    random: false,
                    speed: 6,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: 'circle',
                  },
                  size: {
                    random: true,
                    value: 5,
                  },
                },
                detectRetina: true,
              }}
              params={{
                particles: {
                  number: {
                    value: 200,
                    density: {
                      enable: true,
                      value_area: 2000,
                    },
                  },
                },
              }}
            />
          </div>
          <div className='textContainer'>
            <p className='centerText'>You have reached</p>
            <p className='text2'>Dr.Hamada's </p>
            <p className='text3'>work portofolio</p>
          </div>
          <div className='FirstDivTimeLine'>
            <div className='stylingCircleFirstDiv'>
              <img src={Circle} className='timeLineImageCircle'></img>
            </div>
            <div className='stylingLineFirstDiv'>
              <img src={TimeLineLine} className='timeLineImageLine'></img>
            </div>
          </div>
        </div>
        <div className='secondDiv'>
          {/* <div className='SecondDivTimeLine'></div> */}
          <div className='pos1'>
            <img src={TimeLineLine} className='timeLineLine1'></img>
            <img src={TimeLineLine} className='extension1'></img>
            <img src={Circle} className='circle1'></img>
            <div className='dividerPos1'>---------------</div>
            <div className='cardPos1'>
              <Card
                i={Image}
                text={['#intellectual', '#property', '#doctorate']}
              ></Card>
            </div>
            <div className='textPos1'>
              <span className='EnglishSide1'>
                Doctorate In Intellectual property Administration
              </span>
              <span className='ArabicSide1'>
                دكتوراة فى ادارة الملكية الفكرية
              </span>
            </div>
          </div>
          <div className='pos2'>
            <div className='dividerPos2'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine2'></img>
            <img src={Circle} className='circle2'></img>

            <div className='cardPos2'>
              <Card
                i={Bank}
                text={['#Evaluator', '#Central_Bank', '#Approved']}
              ></Card>
            </div>
            <div className='textPos2'>
              <span className='EnglishSide2'>
                Evaluator Approved by the Central Bank of Egypt
              </span>
              <span className='ArabicSide2'>
                خبيـر التقييـم المعتمـد فـي البنـك المـركـزي المصـري
              </span>
            </div>
          </div>

          <div className='pos3'>
            <div className='dividerPos3'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine3'></img>
            <img src={Circle} className='circle3'></img>

            <div className='cardPos3'>
              <Card
                i={Consult}
                text={['#Head', '#Board_of_Trustees', '#Consultants']}
              ></Card>
            </div>
            <div className='textPos3'>
              <span className='EnglishSide3'>
                Head Board of Trustees Consultants
              </span>
              <span className='ArabicSide3'>
                رئيـس مجلـس ادارة الامنـاء الاستشـاريـون
              </span>
            </div>
          </div>
          <div className='pos4'>
            <div className='dividerPos4'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine4'></img>
            <img src={Circle} className='circle4'></img>

            <div className='cardPos4'>
              <Card
                i={Court}
                text={['#Expert', '#Economic', '#Ministry_Of_Justice']}
              ></Card>
            </div>
            <div className='textPos4'>
              <span className='EnglishSide4'>
                Experts Specialized Economic Courts, Ministry of Justice
              </span>
              <span className='ArabicSide4'>
                خبيـر الملكيـة الفكريـة بالمحاكم الاقتصادية المتخصصة
              </span>
            </div>
          </div>
          <div className='pos5'>
            <div className='dividerPos5'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine5'></img>
            <img src={Circle} className='circle5'></img>

            <div className='cardPos5'>
              <Card
                i={Consultant}
                text={['#International', '#Arbitration', '#Consultant']}
              ></Card>
            </div>
            <div className='textPos5'>
              <span className='EnglishSide5'>
                International Arbitration Consultant
              </span>
              <span className='ArabicSide5'>مستشـا التحكيـم الـدولـي</span>
            </div>
          </div>

          <div className='pos6'>
            <div className='dividerPos6'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine6'></img>
            <img src={Circle} className='circle6'></img>

            <div className='cardPos6'>
              <Card
                i={RealEstate}
                text={['#Head', '#Board_Of_Directors', '#Real_Estate']}
              ></Card>
            </div>
            <div className='textPos6'>
              <span className='EnglishSide6'>
                Head Board of Directors International Real Estate Agency
              </span>
              <span className='ArabicSide6'>
                رئيـس مجلـس ادارة الـوكـالـة العقـاريـة الـدوليـة
              </span>
            </div>
          </div>

          <div className='pos7'>
            <div className='dividerPos7'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine7'></img>
            <img src={Circle} className='circle7'></img>

            <div className='cardPos7'>
              <Card
                i={Gears}
                text={['#Head', '#Board_Of_Directors', '#Technical']}
              ></Card>
            </div>
            <div className='textPos7'>
              <span className='EnglishSide7'>
                Head Board of Directors Egyptian Society for Technical
                Evaluation Experts
              </span>
              <span className='ArabicSide7'>
                رئيـس مجلـس ادارة الجمعيـة المصـريـة لخبـراء التقييـم الفنـي
              </span>
            </div>
          </div>
          <div className='pos8'>
            <div className='dividerPos8'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine8'></img>
            <img src={Circle} className='circle8'></img>

            <div className='cardPos8'>
              <Card
                i={Appraise}
                text={['#Appraisers', '#Arab_Of_Union', '#Real_Estate']}
              ></Card>
            </div>
            <div className='textPos8'>
              <span className='EnglishSide8'>
                Secretary General Appraisers Arab Union for Real Estate
                Development
              </span>
              <span className='ArabicSide8'>
                اميـن عـام خبـراء التقييـم بالاتحـاد العـربـي للتنميـة
                العقـاريـة
              </span>
            </div>
          </div>
          <div className='pos9'>
            <div className='dividerPos9'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine9'></img>
            <img src={Circle} className='circle9'></img>

            <div className='cardPos9'>
              <Card
                i={Arab}
                margin={'5%'}
                text={['#Founding_Member', '#Arab_Union', '#Real_Estate']}
              ></Card>
            </div>
            <div className='textPos9'>
              <span className='EnglishSide9'>
                Founding member & adviser Arab Union for Real Estate Development
              </span>
              <span className='ArabicSide9'>
                عضـو مـؤسـس و مستشـار الاتحـاد العـربـي للتنميـة العقـاريـة
              </span>
            </div>
          </div>
          <div className='pos10'>
            <div className='dividerPos10'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine10'></img>
            <img src={Circle} className='circle10'></img>

            <div className='cardPos10'>
              <Card
                i={Integration}
                margin='7%'
                text={['#Arab_Federation', '#Integration', '#Development']}
              ></Card>
            </div>
            <div className='textPos10'>
              <span className='EnglishSide10'>
                Vice- President Arab Federation Council for Integration &
                Development
              </span>
              <span className='ArabicSide10'>
                نـائـب رئـيس المجـلسى الــعربـى الافــريـقى للتكــامـل
                والتنميــة
              </span>
            </div>
          </div>
          <div className='pos11'>
            <div className='dividerPos11'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine11'></img>
            <img src={Circle} className='circle11'></img>

            <div className='cardPos11'>
              <Card
                i={Economic}
                margin='5%'
                text={['#Chairman', '#Economic_Adminstrative', '#Commission']}
              ></Card>
            </div>
            <div className='textPos11'>
              <span className='EnglishSide11'>
                Chairman Of The Economic And Administrative Commission
              </span>
              <span className='ArabicSide11'>
                رئـيس الهـيـئـة الاقتصــاديـــة والادرايـــة
              </span>
            </div>
          </div>

          <div className='pos12'>
            <div className='dividerPos12'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine12'></img>
            <img src={Circle} className='circle12'></img>

            <div className='cardPos12'>
              <Card
                i={Nature}
                margin='7%'
                text={['#Expert', '#Assessment', '#Environmental_Impact']}
              ></Card>
            </div>
            <div className='textPos12'>
              <span className='EnglishSide12'>
                Expert assessment environmental impact of the project
              </span>
              <span className='ArabicSide12'>
                خبيـر تقييـم الاثـر البيئـي للمشـروعات
              </span>
            </div>
          </div>
          <div className='pos13'>
            <div className='dividerPos13'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine13'></img>
            <img src={Circle} className='circle13'></img>

            <div className='cardPos13'>
              <Card
                i={Water}
                margin='8%'
                text={['#Founding_Member', '#Arab', '#Water_Council']}
              ></Card>
            </div>
            <div className='textPos13'>
              <span className='EnglishSide13'>
                A founding member Arab Water Council
              </span>
              <span className='ArabicSide13'>
                عضـو مـؤسـس المجلـس العـربـي للميـاة
              </span>
            </div>
          </div>

          <div className='pos14'>
            <div className='dividerPos14'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine14'></img>
            <img src={Circle} className='circle14'></img>

            <div className='cardPos14'>
              <Card
                i={Property}
                margin='10%'
                text={['#Egyptian', '#Octagon_World', '#Property']}
              ></Card>
            </div>
            <div className='textPos14'>
              <span className='EnglishSide14'>
                Assembly member the Egyptian octagon World property
              </span>
              <span className='ArabicSide14'>
                عضـو الجمعيـة العلميـة المصـريـة لمثمنـي الامـلاك
              </span>
            </div>
          </div>

          <div className='pos15'>
            <div className='dividerPos15'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine15'></img>
            <img src={Circle} className='circle15'></img>

            <div className='cardPos15'>
              <Card
                i={Expert}
                margin='5%'
                text={[
                  '#Certified',
                  '#Real_Estate',
                  '#World_Council',
                  '#ICREA',
                ]}
              ></Card>
            </div>
            <div className='textPos15'>
              <span className='EnglishSide15'>
                Certified Real Estate an international expert in the World
                Council ICREA
              </span>
              <span className='ArabicSide15'>
                ICREA خبيـر دولـي عقــاري معتمـد فـي المجلـس العالمـي
              </span>
            </div>
          </div>
          <div className='pos16'>
            <div className='dividerPos16'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine16'></img>
            <img src={Circle} className='circle16'></img>

            <div className='cardPos16'>
              <Card
                i={World}
                margin='10%'
                text={['#Egyptian', '#Council', '#Foreign_Affairs']}
              ></Card>
            </div>
            <div className='textPos16'>
              <span className='EnglishSide16'>
                A member Egyptian council for foreign affairs
              </span>
              <span className='ArabicSide16'>
                عضـو المجلس المصري للشئـون الخارجيـة
              </span>
            </div>
          </div>

          <div className='pos17'>
            <div className='dividerPos17'>---------------</div>
            <img src={TimeLineLine} className='timeLineLine17'></img>
            <img src={Circle} className='circle17'></img>

            <div className='cardPos17'>
              <Card
                i={ArabInvest}
                text={['#Member', '#Federation', '#Arab_Investors']}
              ></Card>
            </div>
            <div className='textPos17'>
              <span className='EnglishSide17'>Member of U.A.I.</span>
              <span className='ArabicSide17'>
                عضـو اتحـاد المستثمرين العـرب
              </span>
            </div>
          </div>
        </div>
        <div animation={show.itemOne} className='footerNav' ref={card}>
          <div>
            <p className='copyRights'>Copyright © 2021 by AlNour</p>
            <div className='socialMediaContainer'>
              <p className='socialMedia'>
                Social Media:
                <div className='icons'>
                  <img
                    style={{ marginRight: '2%' }}
                    width='3%'
                    src={FaceBook}
                    alt=''
                  ></img>
                  <img
                    width='3%'
                    style={{ marginRight: '2%' }}
                    src={Twit}
                    alt=''
                  ></img>
                  <img width='3%' src={Instagram} alt=''></img>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
