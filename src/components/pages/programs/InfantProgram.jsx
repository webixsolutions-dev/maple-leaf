import ProgramLayout from './ProgramLayout';
import programsData from './programsData';

// Route: /programs/infant  →  "Infant Program (Phase 4)"
const InfantProgram = () => <ProgramLayout program={programsData.infant} />;

export default InfantProgram;
