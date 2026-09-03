import CategoryServicesSection from '../CategoryServicesSection';
import { HOME_CLEANING_SERVICES } from '../serviceDetailsData';

const HomeCleaningServicesGrid = () => (
  <CategoryServicesSection
    title="Our Home Cleaning Services"
    services={HOME_CLEANING_SERVICES}
    gridClassName="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
  />
);

export default HomeCleaningServicesGrid;
