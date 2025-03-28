import React from "react";
import Work from "../Components/Work";
import {workDetails, eduDetails, skills} from "../data/Details";
import SkillDetail from "./SkillDetail";


function Resume() {
    return (
        <main className="container mx-auto max-width pt-10 pb-20 ">
            <section>
                <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    Skills
                </h1>

                {React.Children.toArray(
                    skills.map(({Title, Detail}) => (
                        <SkillDetail title={Title} detail={Detail}></SkillDetail>
                    ))
                )}
            </section>
            <section>
                <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    Work Experience
                </h1>
                {React.Children.toArray(
                    workDetails.map(({Position, Company, Location, Type, Duration}) => (
                        <Work
                            position={Position}
                            company={Company}
                            location={Location}
                            type={Type}
                            duration={Duration}
                        />
                    ))
                )}
            </section>
            <section>
                <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    Education
                </h1>
                {React.Children.toArray(
                    eduDetails.map(({Position, Company, Location, Type, Duration}) => (
                        <Work
                            position={Position}
                            company={Company}
                            location={Location}
                            type={Type}
                            duration={Duration}
                        />
                    ))
                )}
            </section>

        </main>
    );
}

export default Resume;
