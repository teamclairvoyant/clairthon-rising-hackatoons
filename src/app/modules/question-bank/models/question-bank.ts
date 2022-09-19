/**
 * Documentation for question 
 */
export interface UploadQuestion {
  /**
   * Coding or text question
   */
  question: any;
  /**
   * Technology question belongs to
   */
  technology: string;
  /**
   * Experience level for which questions can be asked, it will be in years
   */
  experience: number;
  /**
   * Difficulty level of question
   */
  difficultyLevel: DifficultyLevel;
  /**
   * Correct answer for coding test type question
   */
  correctAnswer?: string;
  /**
   * Options for coding test question 
   */
  options?:any[]
  /**
   * Question can be either for coding test or for bank 
   */
  questionCategory: Category;
}

/**
 * Enum for Difficulty level
 */
export enum DifficultyLevel {
  Beginner,
  Intermediate,
  Expert,
}

/**
 * Enum for Category
 */
export enum Category {
 CodingTest,
 QuestionBank
}