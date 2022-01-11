import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from './services/modal/modal.service';
import { ApiService } from './services/api/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    locList: any;
    loading: boolean = true;
    nodata: boolean = false;

    ngOnInit(): void {
        (async () => {
            let ApiS = new ApiService();
            let data = await ApiS.getLocations()

            // jen pro test dlouheho nacitani ********
            //await new Promise((resolve, reject) => setTimeout(resolve, 1000));

            this.locList = data
            this.loading = false;
            if (data.length == 0) this.nodata = true
        })();
    }

    @ViewChild('modal', { read: ViewContainerRef })
    containerRef?: ViewContainerRef;

    constructor(private modalService: ModalService) {
    }

    openModal(): void {
        if (!this.containerRef) {
            console.error('Container ref for modal does not exist!');
            return;
        }

        this.modalService.openModal(this.containerRef, 'Modal was successfully opened');
    }
}
