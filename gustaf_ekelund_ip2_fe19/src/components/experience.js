import React from 'react';
import Components from '../styles/ComponentStyles/Components.module.scss';

const Experience = () => {

    const experiences = [
        {
            yearStart: 2017,
            yearEnd: 2019,
            role: 'Material Coordinator',
            employer: 'Scania DT'
        },
        {
            yearStart: 2011,
            yearEnd: 2013,
            role: 'Conference host',
            employer: 'City Conference Center'
        },
        {
            yearStart: 2009,
            yearEnd: 2010,
            role: 'Marketing Assistant',
            employer: 'Study Group Australia'
        },
        {
            yearStart: 2007,
            yearEnd: 2009,
            role: 'Shift Manager',
            employer: 'Mc Donalds'
        },
        {
            yearStart: 2006,
            yearEnd: 2007,
            role: 'Assistant Manager',
            employer: 'Attacus bygg AB'
        },
    ]

    return (
        <div className={Components.flexContainerColumn}>
            <h1>Experience</h1>

            {experiences.map((experience) => {
                return (
                    <div className={[Components.flexContainerRow, Components.Mobile].join(' ')}>
                        <p className={Components.textStyleMedium}>{experience.yearStart} - {experience.yearEnd}</p>
                        <ul style={{ listStyle: "none" }}>
                            <li className={Components.textStyleLarge}>{experience.role}</li>
                            <li className={Components.textStyleSmall}>{experience.employer}</li>
                        </ul>
                    </div>
                )
            })
            }
        </div>
    );
}

export default Experience;