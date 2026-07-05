import ProgramLayout from './ProgramLayout';
import programsData from './programsData';

// Route: /programs/toddler  →  "Toddler Program (2-3 Years)"
const ToddlerProgram = () => <ProgramLayout program={programsData.toddler} />;

export default ToddlerProgram;
