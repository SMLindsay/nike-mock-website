import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9 dark:text-white">
      {/* MAPPING OVER SERVICES ARRAY TO CREATE SERVICE CARD COMPONENTS */}
      {services.map((service) => (
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services