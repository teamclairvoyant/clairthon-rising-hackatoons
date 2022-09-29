/**
 * Documentation for test details for a candidate
 */
export interface CandidateTestDetails {
  candidateDetailsId: string;
  email: string;
  id: string;
  name: string;
  openPosition: string;
  techExperience: number;
  technology: string[];
  testQuestions: TestQuestions[];
  testTaken: boolean;
}

export interface TestQuestions {
  question: string;
  questionId: string;
  'option 1': string;
  'option 2': string;
  'option 3': string;
  'option 4': string;
  candidateAnswer: string;
}
