import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Design'} 
                        paragraph={<ul>
                            <li>
                                Semintic HTML5 for accessibility
                            </li>
                            <li>
                                Responsive CSS3 with CSS grid and flexbox
                            </li>
                            <li>
                                Modern Javascript (ES6+) for interactive fetching data, and integrating with APIs
                            </li>
                            <li>
                                Sass for organized and flexible styles
                            </li>
                            <li>
                                Bootstrab 5 for rapid UI devlopment
                            </li>
                        </ul>}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Back End'} 
                            paragraph={<ul>
                            <li>
                                RESt APIs with Node.js and Express
                            </li>
                            <li>
                                NPM for package management and scripting
                            </li>
                            <li>
                                MongoDB for scalable data storge
                            </li>
                            <li>
                                Mongoose for database querying
                            </li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            
                        </ul>}
                        />
                        
                    </div>
                    <ServiceCard 
                        image={gamedev} 
                        title={'Game Development'} 
                        paragraph={<ul>
                            <li>
                                Git for version control and feature branching
                            </li>
                            <li>
                                Github for collaboration and open source controbution
                            </li>
                        </ul>}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
