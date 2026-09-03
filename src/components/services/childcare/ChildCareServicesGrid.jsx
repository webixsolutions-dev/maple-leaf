import CategoryServicesSection from '../CategoryServicesSection';
import { CHILD_CARE_SERVICES } from '../serviceDetailsData';

const ChildCareServicesGrid = () => (
  <CategoryServicesSection
    title="Our Child Care Services"
    services={CHILD_CARE_SERVICES}
    gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
  />
);

export default ChildCareServicesGrid;
