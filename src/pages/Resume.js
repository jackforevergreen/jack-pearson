import React from 'react';

const ResumeCard = ({ title, content }) => (
  <div className="mb-6 border border-gray-200 rounded-lg shadow-sm">
    <div className="px-4 py-2 bg-gray-100 border-b border-gray-200">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <div className="p-4">{content}</div>
  </div>
);

const Resume = () => (
  <div className="p-6 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold mb-4">Jack Pearson Resume</h1>
    <p className="mb-4">
      <a href="mailto:jackpearson@pitt.edu" className="text-blue-600 hover:underline">jackpearson@pitt.edu</a> | (267) - 218 - 8860 | 
      LinkedIn: <a href="https://www.linkedin.com/in/jackbpearson/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">jackbpearson</a>
    </p>

    <ResumeCard
      title="Education"
      content={
        <div>
          <p><strong>University of Pittsburgh,</strong> Fredrick Honors College, College of Business Administration</p>
          <p>August 2021-December 2024</p>
          <p>Bachelors of Philosophy in Business Administration, Major in Finance, Minor in Spanish</p>
          <p>GPA 3.6/4</p>
          <p><strong>Relevant Coursework:</strong> Consulting Field Project (Katz), Environmental Economics (CMU), Markets and Trading, Sustainability Honors</p>
        </div>
      }
    />

    <ResumeCard
      title="Experience"
      content={
        <div>
          <h4 className="font-semibold">Forevergreen, Pittsburgh, PA</h4>
          <p><em>Co-Founder & CPO</em> | October 2023-present</p>
          <ul className="list-disc pl-5">
            <li>Raised over 20.5k in non-equity financing and founded a team of 6 working to provide consumer access to carbon credits.</li>
            <li>Develop an App to calculate, track, and offset your carbon footprint, coded in Typescript with React Native and Expo.</li>
          </ul>

          <h4 className="font-semibold mt-4">BNP Paribas, New York City, NY</h4>
          <p><em>Sales and Trading Intern</em> | June 2024-August 2024</p>
          <ul className="list-disc pl-5">
            <li>Pitched a bond trade as a High Yield Credit Analyst, building financial models and shadowing traders across the bank.</li>
            <li>Directly support Software and Tech Analyst in Equity research analyst during launch, pulling and tracking data, building valuation models from scratch.</li>
          </ul>

          <h4 className="font-semibold mt-4">Federated Hermes, Pittsburgh, PA</h4>
          <p><em>Intern</em> | January 2024-May 2024</p>
          <ul className="list-disc pl-5">
            <li>Collected and analyzed financial reporting data on environmental and social contributions large public companies.</li>
            <li>Researched ESG/Responsible Investing policies and strategies for major Asset Mangers on the East Coast.</li>
          </ul>

          <h4 className="font-semibold mt-4">Diamond Tropical Hardwoods, Telford, PA</h4>
          <p><em>Web Developer</em> | March 2019-May 2024</p>
          <ul className="list-disc pl-5">
            <li>Developed and led a marketing internship program, boosting traffic the website I built, which generated over $200k in revenue and fulfilled 600+ customer orders.</li>
            <li>Processed customer payments, reconciled accounts, managed inventory, and balanced customer ledgers in Sage 50 software.</li>
            <li>Coordinated logistics of shipments, optimized delivery routes to ensure smooth warehouse operations.</li>
          </ul>
        </div>
      }
    />

    <ResumeCard
      title="Leadership and Activities"
      content={
        <div>
          <p><strong>Pitt Men's Water Polo Club</strong>, Pittsburgh, PA</p>
          <p><em>Vice President</em> | August 2023-December 2023</p>

          <p><strong>Center For Organ Recovery & Education,</strong> Consulting Field Project, Pittsburgh, PA</p>
          <p><em>Graduate Consultant</em> | August 2023-December 2023</p>
          <ul className="list-disc pl-5">
            <li>Built and Excel Model to address staffing concerns based on the expected donation rate of organs. (offered a job by CORE)</li>
          </ul>
        </div>
      }
    />

    <ResumeCard
      title="Certifications"
      content={
        <ul className="list-disc pl-5">
          <li>Bloomberg Terminal</li>
          <li>Google Analytics Certification</li>
          <li>Replit 100 Days of Code (Python)</li>
        </ul>
      }
    />

    <ResumeCard
      title="Skills and Interests"
      content={
        <div>
          <p><strong>Language Skills:</strong> Fluent in English and Spanish</p>
          <p><strong>Technical Skills:</strong> Sage50 Accounting, Excel, Python, JavaScript, Typescript, HTML, CSS, GitHub, Final Cut Pro, Photoshop</p>
          <p><strong>Interests:</strong> Sustainability, guitar, running marathons, investing, reading, philosophy, woodworking, writing, chess</p>
        </div>
      }
    />
  </div>
);

export default Resume;