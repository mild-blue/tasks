import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private componentRef?: ComponentRef<ModalComponent>;

  constructor() {
  }

  openModal(containerRef: ViewContainerRef, modalBody: string): void {
    this.componentRef = containerRef.createComponent(ModalComponent);
    this.componentRef.instance.modalBody = modalBody;
    this.componentRef.instance.closeModalEvent.subscribe(() => this.closeModal());
  }

  closeModal(): void {
    this.componentRef?.destroy();
  }
}
