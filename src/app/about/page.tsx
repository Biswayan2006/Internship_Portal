import React from "react";

const AboutPage = () => {
  // This data would eventually come from an admin-editable source
  const aboutData = {
    title: "Internship Opportunity Providers",
    mission: "Meet the companies and professionals offering quality internship opportunities",
    description: [
      "Our platform connects students with leading companies and professionals who are committed to providing valuable internship experiences.",
      "These organizations and mentors offer opportunities across various industries, from tech and finance to healthcare and creative fields.",
      "Each internship provider has been carefully vetted to ensure they offer meaningful work experiences, proper mentorship, and valuable skill development."
    ],
    partnershipTypes: [
      {
        title: "Corporate Partners",
        description: "Large companies offering structured internship programs with dedicated mentors and potential for full-time employment."
      },
      {
        title: "Startup Opportunities",
        description: "Early-stage companies providing hands-on experience across multiple roles and direct impact on business growth."
      },
      {
        title: "Industry Mentors",
        description: "Experienced professionals who provide one-on-one guidance and project-based internships in specialized fields."
      },
      {
        title: "Research Institutions",
        description: "Academic and research organizations offering internships focused on innovation and cutting-edge developments."
      }
    ],
    providers: [
      {
        name: "Google",
        representative: "Michael Chen",
        role: "Senior Engineering Manager",
        internshipTypes: "Software Engineering, UX Design, Product Management",
        programDetails: "Google's internship program runs year-round with the most positions available during summer. Interns work on real projects alongside full-time Googlers, and many receive full-time offers after graduation. The program includes technical training, mentorship, and networking opportunities.",
        requirements: "Currently enrolled in a Bachelor's, Master's or PhD program in Computer Science or related technical field. Strong coding skills in one or more programming languages.",
        applicationProcess: "Online application, technical interviews, and team matching process. Applications for summer internships typically open in September of the previous year.",
        avatar: "https://randomuser.me/api/portraits/men/54.jpg"
      },
      {
        name: "Salesforce",
        representative: "James Wilson",
        role: "VP of Talent Acquisition",
        internshipTypes: "Business Development, Marketing, Sales, Customer Success",
        programDetails: "Salesforce Futureforce internship program provides hands-on experience in the cloud computing industry. Interns receive competitive compensation, housing stipends for relocating interns, and access to executive speakers and networking events.",
        requirements: "Currently pursuing a degree with a graduation date within 12 months of internship start date. Strong academic performance and leadership experience preferred.",
        applicationProcess: "Online application followed by phone screening and virtual interviews. Applications accepted on a rolling basis with peak hiring in fall for summer positions.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        name: "EdTech Innovations",
        representative: "David Park",
        role: "CTO",
        internshipTypes: "Full-stack Development, Data Science, AI/ML Engineering",
        programDetails: "As a growing EdTech startup, we offer interns the opportunity to work directly with our core engineering team on products used by thousands of students and educators. Our internship program focuses on rapid skill development and real product contributions.",
        requirements: "Strong programming fundamentals and interest in education technology. Experience with modern web frameworks (React, Node.js) or machine learning libraries preferred but not required.",
        applicationProcess: "Submit resume and code samples or portfolio. Interview process includes a technical assessment and culture fit conversation with the team.",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        name: "LinkedIn",
        representative: "Priya Patel",
        role: "University Relations Program Manager",
        internshipTypes: "Software Engineering, Data Science, Product Design, Business Operations",
        programDetails: "LinkedIn's internship program provides students with opportunities to work on meaningful projects that impact millions of users. The program includes technical and professional development workshops, executive speakers, and networking events.",
        requirements: "Currently pursuing a Bachelor's or Master's degree in a relevant field. Strong analytical skills and passion for LinkedIn's mission of connecting professionals.",
        applicationProcess: "Online application through LinkedIn's careers page, followed by phone screens and virtual onsite interviews. Applications for summer internships open in early fall.",
        avatar: "https://randomuser.me/api/portraits/women/67.jpg"
      },
      {
        name: "Diversity in Tech Initiative",
        representative: "Aisha Rahman",
        role: "Program Director",
        internshipTypes: "Software Development, Product Management, UX Research, Digital Marketing",
        programDetails: "Our initiative partners with tech companies to provide internship opportunities specifically for students from underrepresented backgrounds. The program includes technical training, mentorship from industry professionals, and career development workshops.",
        requirements: "Open to students from underrepresented groups in tech, including women, BIPOC, LGBTQ+, and students with disabilities. No specific technical requirements - we focus on potential and passion.",
        applicationProcess: "Application includes resume, personal statement, and optional portfolio. We also accept nominations from university partners and community organizations.",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
      },
      {
        name: "Stanford Career Development Center",
        representative: "Dr. Sarah Johnson",
        role: "Director of Internship Programs",
        internshipTypes: "Research Assistantships, Academic Administration, Education Technology",
        programDetails: "We coordinate internship placements across Stanford University departments and research centers. These positions offer students exposure to academic research, higher education administration, and educational innovation projects.",
        requirements: "Open to current undergraduate and graduate students from any accredited institution. Specific requirements vary by position, with research roles typically requiring relevant coursework or experience.",
        applicationProcess: "Centralized application system with position-specific requirements. Application deadlines vary throughout the year, with most positions posted 2-3 months before start date.",
        avatar: "https://randomuser.me/api/portraits/women/23.jpg"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center mb-8">{aboutData.title}</h1>
        
        <div className="text-center mb-12">
          <p className="text-xl font-medium text-primary-600 dark:text-primary-400 mb-6">
            {aboutData.mission}
          </p>
          
          {aboutData.description.map((paragraph, index) => (
            <p key={index} className="mb-4 text-neutral-700 dark:text-neutral-300">
              {paragraph}
            </p>
          ))}
        </div>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Internship Partnership Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData.partnershipTypes.map((type, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-soft"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-600 dark:text-primary-400">
                  {type.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">Internship Opportunity Providers</h2>
          <div className="grid grid-cols-1 gap-8">
            {aboutData.providers.map((provider, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-soft flex flex-col md:flex-row"
              >
                <div className="md:w-1/4 h-48 md:h-auto relative">
                  <img 
                    src={provider.avatar} 
                    alt={provider.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{provider.name}</h3>
                      <p className="text-lg mb-1"><span className="font-medium">Representative:</span> {provider.representative}</p>
                      <p className="text-primary-600 dark:text-primary-400 mb-3 font-medium">{provider.role}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <p className="text-lg font-semibold mb-1">Internship Types</p>
                      <p className="text-neutral-700 dark:text-neutral-300">{provider.internshipTypes}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-semibold mb-1">Program Details</p>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">{provider.programDetails}</p>
                    
                    <p className="font-semibold mb-1">Requirements</p>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">{provider.requirements}</p>
                    
                    <p className="font-semibold mb-1">Application Process</p>
                    <p className="text-neutral-700 dark:text-neutral-300">{provider.applicationProcess}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <div className="mt-16 text-center">
          <p className="text-neutral-500 dark:text-neutral-400">
            Want to join our team or partner with us? <a href="/contact" className="text-primary-600 dark:text-primary-400 hover:underline">Get in touch</a>.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;