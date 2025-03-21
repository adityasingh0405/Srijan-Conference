import React, { useEffect } from "react";
import Carousel from "../components/Carousel";

function Home() {

  const handleClick = () => {
    window.location.href = "./registration";
  };


  return (
   <>
    <Carousel/>  
    <div className="sm:text-justify px-10 mt-16 h-auto ">
        <div>
        <h1 className="inline font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 rounded-[7px] shadow-heading p-4 text-black ">About Conference</h1>
          <p className="mt-8">
            The Indian Institute of Public Administration (IIPA), in collaboration
            with Vivekananda Institute of Professional Studies - Technical Campus
            (VIPS-TC), is hosting the upcoming International Conference on
            "Integrating Climate Action, AI, SDGs, and Water Management" (ICASW),
            scheduled for March 19-20, 2025. This event envisages to be a
            transformative platform aimed at fostering interdisciplinary
            collaboration.
        </p>
        <p className="mt-3">
            With the global challenges posed by climate change, water scarcity, and
            environmental degradation, the International Conference will bring
            together experts from diverse fields, including climate science,
            artificial intelligence, sustainable development, and public policy. It
            will provide a unique forum for policymakers, academicians, researchers,
            conservationists, and industry leaders to exchange insights on
            innovative approaches to climate action and water management and
            conservation.
        </p>
        <p className="mt-3">
            Key themes of ICASW include AI-driven solutions for environmental
            monitoring, sustainable urban and rural water systems, nature-based
            solutions for climate resilience, and strategies to achieve the United
            Nations' Sustainable Development Goals (SDGs). Through technical
            sessions, keynote speeches, and interactive panel discussions, the event
            will explore cutting-edge technologies and collaborative policy
            frameworks to address the interconnected challenges of climate change
            and water resource management. By integrating advanced technologies like
            AI with sustainable development initiatives, ICASW aims to promote
            holistic strategies that balance ecological preservation with societal
            well-being, thereby contributing to resilient and sustainable
            communities.
          </p>
        </div>
        <div className="mt-16">
        <h1 className="inline  rounded-br-3xlinline font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 rounded-[7px] shadow-heading p-4 text-black">Conference Tracks</h1>
            <ol className="pt-8 text-md list-decimal list-inside">
                <li>Mitigation and Adaptation Strategies for Climate Change in India.</li>
                <li>Integration of Sustainable Development Goals (SDGs) in Climate Action Plan.</li>
                <li> Harnessing Artificial Intelligence for Climate Resilience in Water Management.</li>
                <li> Policy Frameworks for Sustainable Water Resource Management in the Face of Climate Change.</li>
                <li>Community Engagement and Capacity Building for Climate Resilient Water Practices.</li>
                <li>Innovative Technologies for Water Conservation and Quality Monitoring.</li>
                <li> Addressing Equity and Social Justice in Access to Clean Water in India.</li>
                <li>Impact of Climate Change on Agriculture and Livelihoods: Water Resource Perspectives.</li>
                <li>Cross-Sector Collaboration for Sustainable Water Governance and Climate Resilience.</li>
                <li>Future Projections: AI-driven Solutions for Anticipating and Mitigating Climate-induced Water Challenges in India.</li>
                <li>Green material and technologies for sustainability.</li>
                <li>Green Mobility.</li>
                <li>Environmental assisted Degradation.</li>
                <li>Environmental & forest policies and laws</li>
            </ol>
        </div>
        <div className="w-full flex justify-center mt-8">
        <button className="shadow-[0_0_0.2rem_black] p-4 rounded-lg text-[#08240d] bg-[#c4f3c4] font-semibold hover:scale-110 hover:font-bold" onClick={handleClick}>Register Now</button>
        </div>
    </div>
    </>
  );
}

export default Home;
