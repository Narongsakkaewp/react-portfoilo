import React, { useEffect, useState } from 'react';
import { projectData } from './Data';
import { projectCategory } from './Data';
import WorkItems from './WorkItems';

const Project = () => {
    const [item, setItem] = useState({ name: 'All' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'All') {
            setProjects(projectData);
        } else {
            const newProjects = projectData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    };

    return (
        <div>
            <div className="work__filters">
                {projectCategory.map((item, index) => {
                    return (
                        <span
                            onClick={(e) => {
                                handleClick(e, index)
                            }}
                            className={`${active === index ? 'active-work ' : ''}work__item`}
                            key={index}
                        >
                            {item.name}
                        </span>
                    );
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
};

export default Project;