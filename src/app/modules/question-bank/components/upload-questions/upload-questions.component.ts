import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { QuestionBankService } from '../../services/question-bank.service';

@Component({
  selector: 'app-upload-questions',
  templateUrl: './upload-questions.component.html',
  styleUrls: ['./upload-questions.component.scss'],
})
export class UploadQuestionsComponent {
  /**
   * Upload progress percentage
   */
  uploadQuestionProgress = 0;
  /**
   * File object for storing uploaded file
   */
  uploadFile?: File;

  constructor(private questionBankService: QuestionBankService, private toastr: ToastrService) {}

  public addQuestions(): void {
    this.questionBankService.uploadQuestions(this.uploadFile as File).subscribe(() => {
      this.toastr.success('Question(s) uploaded successfully');
    }),
      (_error: any) => {
        this.toastr.error('Question uploading failed. Please try again ');
      };
  }

  public onFileChange(event: Event) {
    this.uploadFilesSimulator(0);
    const target = event.target as HTMLInputElement;
    this.uploadFile = target?.files?.item(0) as File;
    console.log('file', this.uploadFile);
  }

  public dropHandler(event: DragEvent) {
    event.preventDefault();
    this.uploadFilesSimulator(0);
    if (event?.dataTransfer?.items) {
      const fileItem = [...(event.dataTransfer.items as any)].find((item) => item.kind === 'file');
      this.uploadFile = fileItem?.getAsFile();
    } else {
      this.uploadFile = event.dataTransfer?.files?.item(0) as File;
    }
  }

  public dragOverHandler(event: Event) {
    event.preventDefault();
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  public formatBytes(bytes: any, decimals?: any) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  /**
   * Simulate the upload process
   */
  public uploadFilesSimulator(index: number) {
    setTimeout(() => {
      const progressInterval = setInterval(() => {
        if (this.uploadQuestionProgress === 100) {
          clearInterval(progressInterval);
          this.uploadFilesSimulator(index + 1);
        } else {
          this.uploadQuestionProgress += 5;
        }
      }, 200);
    }, 1000);
  }
}
