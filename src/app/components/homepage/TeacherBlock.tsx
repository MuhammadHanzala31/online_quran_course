import React from 'react'

interface props {
  title? : string, 
  description? : string, 
  bgColor? : string,
  textColor? : string
}

export default function TeacherBlock({title, description, bgColor, textColor} : props) {
  return (
    <div className={`lg:w-1/2 w-full ${bgColor ? bgColor : 'bg-white'} shadow-2xl p-3 pb-9 flex flex-col `}>
       <h3 className={`${textColor ? textColor : 'text-[#5da37e]'} text-[24px] font-semibold font-poppins text-center`}>{title ? title : 'Male Tutors'}</h3>
       <p className={`${textColor ? textColor : 'text-black'} font-normal font-poppins text-[16px] text-center`}>{description ? description : 'Experienced scholars providing patient, clear, and structured Quran lessons tailored to male students.'}</p>
    </div>
  )
}
