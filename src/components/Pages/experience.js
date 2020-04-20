import React from 'react';
import { experiences } from './information';
import EducationStyle from './PageStyling/education.module.scss';

const Experience = () => {

    return (
        <div className={EducationStyle.wrapper}>
            <h1>Experience</h1>

            {experiences.map((experience) => {
                return (
                    <ul className={EducationStyle.container} key={experience.role + experience.role}>
                        <li key={experience.yearEnd + experience.yearStart}>{experience.yearStart} - {experience.yearEnd}</li>
                        <li key={experience.role}>{experience.role}</li>
                        <li key={experience.employer}>{experience.employer}</li>
                    </ul>
                )
            })
            }
        </div>
    );
}

export default Experience;