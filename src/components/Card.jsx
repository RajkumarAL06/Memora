import React from 'react'
import Carddesign from '../components/Carddesign'

const cards=
  [
    {
      title:'Patient Dashboard',
      para:'View patient details,progress and activity history.',
      link:'/patdashboard',
      bg:'bg-[#FCE8EC]',
      border:'border-[#F2B8C6]',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNTrsY8gjq_87QyeIwsoQp-VR70YglUCjXORfigRalQ&s=10'
    },
    {
      title:'Upload Information',
      para:'Add patient detils,medical records,interest and more.',
      link:'/information',
      bg: "bg-[#EEF0FF]",
      border: 'border-[#B9C0F5]',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZcAvbbPzztupNXfuU9Nuho_rihcgEqviGcbUX07AyQ&s=10'
    },
    {
      title:'Report',
      para:'Check performance and progress over time.',
      link:'/report',
      bg: "bg-[#EAF7F2]",
      border: 'border-[#A9DCC8]',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gckAzo9ZfqLDZoc7feY-v2-OYQDMYYMEhs0PJ0e8-A&s=10'
    },
    {
      title:'AI Chatboat',
      para:'Get instant answere and support anytime.',
      link:'/ai',
      bg: "bg-[#FFF3E3]",
      border: 'border-[#F5CF9A]',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVDJWgivUoR4VlyTTCbxQz5MWRiNSh3_iR1b5tYzZ_w&s=10'

    },
    {
      title:'Image & Videos',
      para:'Upload image and videos and check.',
      link:'/imgdeo',
      bg: "bg-[#EEF2FF]",
      border: 'border-[#B5C4F5]',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoiAlg8kCYImPo-NUSBhiMjfaShW2KQS9iOLeMOAbpkQ&s=10'
    },
    {
      title:'Patient Profile',
      para:'See patient profile',
      link:'/patientprofile',
      bg: "bg-[#FCE8EB]",
      border: 'border-[#F2B5C0]',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfLMbD6K5PFKTo2TPPwrO1EmLOT8eLgLzTWrYQaHXgA&s=10'
    }
  ];

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      {cards.map(function(elem,idx){
        return(
         <div key={idx}>
          <Carddesign Title={elem.title} Para={elem.para} Link={elem.link} Bg={elem.bg} Border={elem.border} Img={elem.img}/>
         </div>
        )
      })}
      
    </div>
  )
}

export default Card
