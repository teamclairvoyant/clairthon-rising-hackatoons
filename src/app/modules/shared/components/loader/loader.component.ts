import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  loader$?: BehaviorSubject<boolean>;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loader$ = this.loadingService.loader$;
  }
}
