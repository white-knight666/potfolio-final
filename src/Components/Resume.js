import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2022 - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'Freelancer'}
                        
                    />
                    <ResumeItem 
                        year={'2019 - 2021'} 
                        title={'Technical support'}
                        subTitle={'OPPO'}
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'Present - 2022'} 
                        title={'Matrix Master'}
                        subTitle={'Matrix Master'}
                    />
                    <ResumeItem 
                        year={'2020 - 2021'} 
                        title={'Baccalaureate Degree'}
                        subTitle={'Damascus University'}
                        
                    />
                    <ResumeItem 
                        year={'2016 - 2017'} 
                        title={'High School Graduation'}
                        subTitle={'Musalam Abden school'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
