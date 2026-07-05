import ProgramLayout from './ProgramLayout';
import programsData from './programsData';

// Route: /programs/preschool  →  "Preschool / Montessori Casa"
const PreschoolProgram = () => (
  <ProgramLayout program={programsData.preschool} />
);

export default PreschoolProgram;
