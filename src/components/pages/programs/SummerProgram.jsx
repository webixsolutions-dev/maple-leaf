import ProgramLayout from './ProgramLayout';
import programsData from './programsData';

// Route: /programs/summer  →  "Summer Programs & Camps"
const SummerProgram = () => <ProgramLayout program={programsData.summer} />;

export default SummerProgram;
