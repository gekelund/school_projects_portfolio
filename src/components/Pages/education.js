import React from 'react';
import { educations } from './information';
import EducationStyle from './PageStyling/education.module.scss';

const Education = () => {

    return (
        <div className={EducationStyle.wrapper}>

            <h1>Education</h1>

            {educations.map((education) => {
                return (
                    <ul className={EducationStyle.container} key={education.yearStart + education.yearEnd}>
                        <li key={education.yearStart}>{education.yearStart} - {education.yearEnd}</li>
                        <li key={education.education}>{education.education}</li>
                        <li key={education.school}>{education.school}</li>
                    </ul>
                )
            })
            }
        </div>
    );
}

export default Education;