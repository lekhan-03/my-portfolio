import './Services.css';

const Services = () => {
  const servicesData = [
    { title: "Web Development", desc: "Building fast, responsive websites using React." },
    { title: "Data Analytics and Visualization", desc: "Transforming data into solutions and visualizing the data using  Python, SQL ,PowerBI" },
    { title: "Frontend DevelopMent", desc: "Designing intuitive user interfaces for Website using Figma, Tailwind CSS" },
    { title: "Gen AI and LLMs", desc: "Architecting end-to-end AI applications for medical diagnosis and content creation." }
  ];

  return (
    <section id="services" className="services-section">
      <div className="section-head">
        <h2>My Skills</h2>
      </div>
      <div className="services-grid">
        {servicesData.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">◆</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;