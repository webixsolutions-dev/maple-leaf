import CategoryServicesSection from '../CategoryServicesSection';
import { SENIOR_PERSONAL_CARE_SERVICES } from '../serviceDetailsData';

const SeniorPersonalCareServicesGrid = () => (
  <CategoryServicesSection
    title="Our Senior & Personal Care Services"
    services={SENIOR_PERSONAL_CARE_SERVICES}
    gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
  />
);

export default SeniorPersonalCareServicesGrid;
