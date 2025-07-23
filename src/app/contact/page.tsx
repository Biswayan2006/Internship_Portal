"use client";

import React, { useState } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const ContactPage = () => {
  // This data would eventually come from an admin-editable source
  const contactData = {
    title: "Contact Internship Providers",
    description: "Connect directly with companies and professionals offering internship opportunities",
    email: "opportunities@internsonboard.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Street, Tech Hub, CA 94103",
    socialLinks: [
      { name: "LinkedIn", url: "https://linkedin.com/company/internsonboard", icon: "linkedin" },
      { name: "Twitter", url: "https://twitter.com/internsonboard", icon: "twitter" }
    ],
    providerContacts: [
      {
        name: "Michael Chen",
        role: "Senior Engineering Manager",
        company: "Google",
        pastExperience: "Former Engineering Lead at Microsoft and Amazon",
        email: "mchen@google.com",
        phone: "+1 (555) 234-5678",
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michaelchentech",
        internshipTypes: "Software Engineering, UX Design, Product Management",
        avatar: "https://randomuser.me/api/portraits/men/54.jpg"
      },
      {
        name: "James Wilson",
        role: "VP of Talent Acquisition",
        company: "Salesforce",
        pastExperience: "15+ years in tech recruiting at Oracle and IBM",
        email: "jwilson@salesforce.com",
        phone: "+1 (555) 345-6789",
        linkedin: "https://linkedin.com/in/jameswilson",
        twitter: "https://twitter.com/jameswilsonhr",
        internshipTypes: "Business Development, Marketing, Sales, Customer Success",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        name: "Priya Patel",
        role: "University Relations Program Manager",
        company: "LinkedIn",
        pastExperience: "Former University Recruiter at Facebook",
        email: "ppatel@linkedin.com",
        phone: "+1 (555) 456-7890",
        linkedin: "https://linkedin.com/in/priyapatel",
        twitter: "https://twitter.com/priyapatel",
        internshipTypes: "Software Engineering, Data Science, Product Design, Business Operations",
        avatar: "https://randomuser.me/api/portraits/women/67.jpg"
      },
      {
        name: "David Park",
        role: "CTO",
        company: "EdTech Innovations",
        pastExperience: "Former Engineering Director at Khan Academy",
        email: "dpark@edtechinnovations.com",
        phone: "+1 (555) 567-8901",
        linkedin: "https://linkedin.com/in/davidpark",
        twitter: "https://twitter.com/davidparktech",
        internshipTypes: "Full-stack Development, Data Science, AI/ML Engineering",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        name: "Aisha Rahman",
        role: "Program Director",
        company: "Diversity in Tech Initiative",
        pastExperience: "Former D&I Lead at Microsoft and Intel",
        email: "arahman@diversityintech.org",
        phone: "+1 (555) 678-9012",
        linkedin: "https://linkedin.com/in/aisharahman",
        twitter: "https://twitter.com/aisharahman",
        internshipTypes: "Software Development, Product Management, UX Research, Digital Marketing",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
      },
      {
        name: "Dr. Sarah Johnson",
        role: "Director of Internship Programs",
        company: "Stanford Career Development Center",
        pastExperience: "Former Career Counselor at UC Berkeley",
        email: "sjohnson@stanford.edu",
        phone: "+1 (555) 789-0123",
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/drsarahjohnson",
        internshipTypes: "Research Assistantships, Academic Administration, Education Technology",
        avatar: "https://randomuser.me/api/portraits/women/23.jpg"
      }
    ]
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log("Form submitted:", formData);
    
    // Simulate success response
    setFormStatus("success");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center mb-4">{contactData.title}</h1>
        <p className="text-center text-lg text-neutral-700 dark:text-neutral-300 mb-12 max-w-2xl mx-auto">
          {contactData.description}
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-soft p-6">
              <h2 className="text-xl font-semibold mb-6">Get In Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <EnvelopeIcon className="h-6 w-6 text-primary-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href={`mailto:${contactData.email}`} 
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {contactData.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-primary-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a 
                      href={`tel:${contactData.phone.replace(/[^0-9+]/g, '')}`} 
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {contactData.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-primary-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      {contactData.address}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  {contactData.socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neutral-100 dark:bg-neutral-700 hover:bg-primary-100 dark:hover:bg-primary-900 p-2 rounded-full transition-colors"
                      aria-label={link.name}
                    >
                      <span className="sr-only">{link.name}</span>
                      <svg className="h-5 w-5 text-neutral-700 dark:text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                        {link.icon === "linkedin" && (
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        )}
                        {link.icon === "twitter" && (
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        )}
                        {link.icon === "instagram" && (
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-soft p-6">
              <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
              
              {formStatus === "success" && (
                <div className="mb-6 p-4 bg-success-100 dark:bg-success-900/30 text-success-800 dark:text-success-200 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              
              {formStatus === "error" && (
                <div className="mb-6 p-4 bg-danger-100 dark:bg-danger-900/30 text-danger-800 dark:text-danger-200 rounded-lg">
                  There was an error sending your message. Please try again.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary px-6 py-3"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Team Contacts */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">Internship Opportunity Providers</h2>
          <div className="grid grid-cols-1 gap-8">
            {contactData.providerContacts.map((provider, index) => (
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
                      <p className="text-primary-600 dark:text-primary-400 mb-1 font-medium">{provider.role}</p>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-1 text-lg font-semibold">{provider.company}</p>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-3 text-sm italic">{provider.pastExperience}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <p className="text-lg font-semibold mb-1">Internship Types</p>
                      <p className="text-neutral-700 dark:text-neutral-300">{provider.internshipTypes}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <EnvelopeIcon className="h-5 w-5 text-neutral-500 mr-2" />
                        <a 
                          href={`mailto:${provider.email}`} 
                          className="text-primary-600 dark:text-primary-400 hover:underline"
                        >
                          {provider.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center mb-2">
                        <PhoneIcon className="h-5 w-5 text-neutral-500 mr-2" />
                        <a 
                          href={`tel:${provider.phone}`} 
                          className="text-primary-600 dark:text-primary-400 hover:underline"
                        >
                          {provider.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <svg className="h-5 w-5 text-neutral-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        <a 
                          href={provider.linkedin} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 hover:underline"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                      
                      {provider.twitter && (
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-neutral-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                          <a 
                            href={provider.twitter} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:underline"
                          >
                            Twitter Profile
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;