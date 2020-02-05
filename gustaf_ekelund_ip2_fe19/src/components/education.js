import React from 'react';
import Components from '../styles/ComponentStyles/Components.module.scss';

const Education = () => {


    const educations = [
        {
            yearStart: 2019,
            yearEnd: 'Pending',
            education: 'Front End Developer',
            school: 'KYH'
        },
        {
            yearStart: 2018,
            yearEnd: 2018,
            education: 'Internal ledership course “Seven good habits”',
            school: 'inContext'
        },
        {
            yearStart: 2014,
            yearEnd: '2017',
            education: 'Bachelor’s Degree in biomechanical engineering',
            school: 'Högskolan i Halmstad'
        },
        {
            yearStart: 2012,
            yearEnd: 2012,
            education: 'Graphic Design Course',
            school: 'Berghs School of Communication'
        },
        {
            yearStart: 2010,
            yearEnd: 2010,
            education: 'Diploma Event Management',
            school: 'Martin College (Sydney, Australien)'
        },
    ]

    return (
        <div className={Components.flexContainerColumn}>

            <h1>Education</h1>

            {educations.map((education) => {
                return (
                    <div key={education.yearStart + education.yearEnd} className={[Components.flexContainerRow, Components.Mobile].join(' ')}>
                        <p key={education.yearStart} className={Components.textStyleMedium}>{education.yearStart} - {education.yearEnd}</p>
                        <ul key={education.education + education.education} style={{ listStyle: "none" }}>
                            <li key={education.education} className={Components.textStyleLarge}>{education.education}</li>
                            <li key={education.school} className={Components.textStyleSmall}>{education.school}</li>
                        </ul>
                    </div>
                )
            })
            }
        </div>
    );
}

export default Education;