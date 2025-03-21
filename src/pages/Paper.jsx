import React from "react";

function paper() {
  return (
    <>
      <div className="h-auto sm:text-justify px-10 mt-16">
        <h1 className="inline text-xs font-bold xs:max-sm:text-lg sm:text-xl bg-yellow-300 border-black border-2 p-2 text-black rounded-[7px] shadow-heading">
          Paper Submission Guidlines
        </h1>
        <ul className="list-disc mt-8 list-inside w-[90%] ml-2 sm:ml10">
          <li className="sm:text-lg text-base mb-4">
            <strong>Title:</strong> A concise and informative title.
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>Authors:</strong> Full names, affiliations and e-mail
            addresses of all authors.
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>Abstract:</strong> A summary (150-250 words) of the
            research, objectives, methodology, results, and conclusions.
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>Keywords:</strong> 4-5 keywords relevant to the paper.
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>Main Content:</strong> Should typically include:
            <ul className="list-disc  list-inside w-[90%] ml-[10%] sm:ml10">
              <li className="sm:text-lg text-base ">Introduction</li>
              <li className="sm:text-lg text-base">Literature Review</li>
              <li className="sm:text-lg text-base ">Methodology</li>
              <li className="sm:text-lg text-base ">Results and Discussion</li>
              <li className="sm:text-lg text-base ">
                Conclusion and future work
              </li>
            </ul>
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>References:</strong> Use APA style.
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>Font and Size:</strong> Use Times New Roman, 12 point font
            size.
          </li>{" "}
          <li className="sm:text-lg text-base mb-4">
            <strong>Heading Size:</strong> Times New Roman 14 point font size.
          </li>{" "}
          <li className="sm:text-lg text-base mb-4">
            <strong>Margins:</strong> 1 inch margins on all sides.
          </li>{" "}
          <li className="sm:text-lg text-base mb-4">
            <strong>Spacing:</strong> Single or double spacing as per template
            instructions.
          </li>
        </ul>
      </div>
      <div className="h-auto sm:text-justify p-10 mt-2">
        <h1 className="inline text-xs font-bold xs:max-sm:text-lg sm:text-xl bg-yellow-300 border-black border-2 p-2 text-black rounded-[7px] shadow-heading">
            Paper Submission Details
        </h1>
        <ul className="list-disc mt-8 list-inside space-y-4">
          <li>
            <strong>Submission Process:</strong>
            <ul className="list-disc list-inside ml-5 space-y-2">
              <li>Papers must be original and exceed 6000 words.</li>
              <li>Papers must not have been submitted elsewhere.</li>
              <li>Re-use of published material must be minimal, with proper permission.</li>
              <li>Double-blind peer reviewing will be followed.</li>
              <li>Only papers passing both organizer and publisher review will be included.</li>
              <li>For research paper with multiple authors, one author must register as corresponding author. Once selected,Paper presentation is necessary to receive the certificate</li>
            </ul>
          </li>
          
         
          
        </ul>
      </div>
      <div className="h-auto sm:text-justify p-10 mt-2">
        <h1 className="inline text-xs font-bold xs:max-sm:text-lg sm:text-xl bg-yellow-300 border-black border-2 p-2 text-black rounded-[7px] shadow-heading">
        Publication
        </h1>
          <h2 className="text-lg mt-6">Accepted Paper after rigorous review process will be published in:</h2>
          <ul className="list-disc list-inside w-[90%] ml-5 sm:ml10">
          <li className="sm:text-lg text-base mb-4">
            <strong>Springer Proceedings (Proposed)</strong> with Scopus Indexing
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>Sage Publications (Special Issue)</strong> - Scopus Indexed
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>abstract booklet</strong> with ISBN Number
          </li>
        </ul>
        <span className="flex gap-6 mt-4 ml-10 items-center">
        <img src="/images/sage-logo.png" alt="sage" className="h-[10vh]" />
        <img src="/images/Scopus_logo.svg.png" alt="scopus" className="h-[10vh]" />
        </span>
        <img src="/images/springer-logo.png" alt="" className="h-[10vh] ml-32" />
        <div className="pt-16">
        <h1 className="inline  font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 p-2 text-black rounded-[7px] shadow-heading">Important Dates</h1>
      <div className="grid sm:grid-cols-custom grid-cols-custom-1 mt-8">
      <div className="grid grid-rows-6 sm:gap-4 gap-6 mt-4">
        <p className='text-lg font-bold'>Call for Paper Open</p>
        <p className='text-lg font-bold'>Submission Deadline</p>
        <p className='text-lg font-bold'>Acceptance Notification</p>
        <p className='text-lg font-bold'>Registration Deadline</p>
        <p className='text-lg font-bold'>Conference Date</p>
        <p className='text-lg font-bold'></p>
      </div>
      <div className="grid grid-rows-6 sm:gap-4 gap-6 mt-4 ">
        <p>: 14 Jan., 2025</p>
        <p>: 22 Feb., 2025</p>
        <p>: 23 Feb., 2025</p>
        <p>: 24 Feb., 2025</p> 
        <p>: 19 Mar., 2025 (IIPA Campus) </p>
        <p>  20 Mar., 2025 (VIPS-TC Campus)</p>
       </div>
       </div>
      </div>
      </div>
    
    </>
  );
}

export default paper;
