import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { ModalService } from './services/modal/modal.service';
import { ApiService } from './services/api/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    locList: any;
    loading: boolean = true;
    noData: boolean = false;

    constructor(private modalService: ModalService, private apiService: ApiService) {
    }

    ngOnInit(): void {
        (async () => {
            let data = await this.apiService.getLocations();

            // jen pro test dlouheho nacitani ********
            // await new Promise((resolve, reject) => setTimeout(resolve, 1000));

            this.locList = data;
            this.loading = false;
            if (data.length == 0) this.noData = true;
        })();
    }

    @ViewChild('modal', { read: ViewContainerRef })
    containerRef?: ViewContainerRef;

    openModal(): void {
        if (!this.containerRef) {
            console.error('Container ref for modal does not exist!');
            return;
        }

        this.modalService.openModal(this.containerRef, 'Modal was successfully opened');
    }
}
