import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
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

  constructor(
    public questionBankService: QuestionBankService,
    private toastr: ToastrService,
    private loadingService: LoadingService,
  ) {}

  /**
   * Method to call service to upload file
   */
  public addQuestions(): void {
    this.loadingService.show();
    this.questionBankService
      .uploadQuestions(this.uploadFile as File)
      .pipe(
        finalize(() => {
          this.loadingService.hide();
          this.uploadFile = undefined;
          this.uploadQuestionProgress = 0;
        }),
      )
      .subscribe(() => {
        this.toastr.success('Question(s) uploaded successfully');
      }),
      (_error: any) => {
        this.toastr.error('Question uploading failed. Please try again ');
      };
  }

  /**
   * Method to process file uploaded via browse button
   * @param event Broswer event
   */
  public onFileChange(event: Event) {
    this.uploadQuestionProgress = 0;
    this.uploadFilesSimulator(0);
    const target = event.target as HTMLInputElement;
    this.uploadFile = target?.files?.item(0) as File;
  }

  /**
   * Method to handle dropped file
   * @param event Drag event
   * @returns Boolean for invalid file and void for valid file
   */
  public dropHandler(event: DragEvent): boolean | void {
    event.preventDefault();
    this.uploadQuestionProgress = 0;
    if (event?.dataTransfer?.items) {
      const fileItem = [...(event.dataTransfer.items as any)].find((item) => item.kind === 'file');
      this.uploadFile = fileItem?.getAsFile();
    } else {
      this.uploadFile = event.dataTransfer?.files?.item(0) as File;
    }

    // validation for valid file type
    const extension = this.uploadFile?.name.split('.') as string[];
    if (extension[extension?.length - 1] !== 'csv') {
      this.toastr.error('Invalid file type, please try uploading CSV file');
      this.uploadFile = undefined;
      this.uploadQuestionProgress = 0;
      return;
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * Method to prevent default drag event
   * @param event Browser event
   */
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
