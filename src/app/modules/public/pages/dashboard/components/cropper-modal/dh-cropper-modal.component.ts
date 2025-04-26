import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {DhHero} from "../../../../../../interfaces/dh-hero.interface";

@Component({
  selector: 'dh-cropper-modal',
  templateUrl: './dh-cropper-modal.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DhCropperModalComponent {
  @Input() public hero!: DhHero;

  public imageChangedEvent: Event | null;
  public croppedImage: string | null;

  constructor(private readonly _modalRef: NzModalRef<DhCropperModalComponent>) {
    this.imageChangedEvent = null;
    this.croppedImage = null;
  }

  public beforeUpload = (file: NzUploadFile): boolean => {
    this.imageChangedEvent = { target: { files: [file as any] } } as unknown as Event;
    return false;
  };

  public onImageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64 || null;
  }

  public confirmCrop(): void {
    if (this.croppedImage) {
      this._modalRef.close(this.croppedImage);
    }
  }

  public cancel(): void {
    this._modalRef.destroy();
  }
}
