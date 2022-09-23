/**
 * Interface model for candidate registration form
 */
export interface RegistrationForm {
  /**
   * Unique ID for candidate
   */
  id: string;
  /**
   * Candidate name
   */
  name: string;
  /**
   * Candidate email
   */
  email: string;
  /**
   * Candidate contact number
   */
  contactNumber?: string;
  /**
   * Candidate technical skills
   */
  techSkills: { id: number; name: string }[];
  /**
   * Candidate technical experience
   */
  techExperience: string;
  /**
   * Date of completion test
   */
  completionDate?: string;
  /**
   * Pass/fail result
   */
  result?: string;
  /**
   * Open posistion for interview
   */
  openPosition?: string;
}
