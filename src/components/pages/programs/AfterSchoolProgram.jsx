import ProgramLayout from './ProgramLayout';
import programsData from './programsData';

// Route: /programs/after-school  →  "Before & After School Care"
const AfterSchoolProgram = () => (
  <ProgramLayout program={programsData['after-school']} />
);

export default AfterSchoolProgram;
