import { Component, ViewEncapsulation } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { DhCropperModalComponent } from '../cropper-modal/dh-cropper-modal.component';
import { take } from 'rxjs/operators';
import {DhHero} from "../../../../../../interfaces/dh-hero.interface";

@Component({
  selector: 'dh-heroes',
  templateUrl: './dh-heroes.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DhHeroesComponent {
  public heroes: DhHero[];

  constructor(private readonly _modalService: NzModalService) {
    this.heroes = this._initializeHeroes();
  }

  public openCropperModal(hero: DhHero): void {
    const modalRef: NzModalRef = this._modalService.create({
      nzTitle: `Update image of ${hero.name}`,
      nzContent: DhCropperModalComponent,
      nzComponentParams: { hero },
      nzFooter: null,
      nzWidth: 600,
      nzBodyStyle: {
        'max-height': '80vh',
        'overflow-y': 'auto',
        'padding': '24px'
      }
    });

    this._handleModalAfterClose(modalRef, hero);
  }

  private _handleModalAfterClose(modalRef: NzModalRef, hero: DhHero): void {
    modalRef.afterClose
      .pipe(take(1))
      .subscribe((croppedImage: string | undefined) => {
        if (croppedImage) {
          this._updateHeroImage(hero, croppedImage);
        }
      });
  }

  private _initializeHeroes(): DhHero[] {
    return [
      { name: 'Abaddon', img: 'assets/images/heroes/abaddon_lg.png' },
      { name: 'Alchemist', img: 'assets/images/heroes/alchemist_lg.png' },
      { name: 'Ancient Apparition', img: 'assets/images/heroes/ancient_apparition_lg.png' },
      { name: 'Anti-Mage', img: 'assets/images/heroes/antimage_lg.png' },
      { name: 'Arc Warden', img: 'assets/images/heroes/arc_warden_lg.png' },
      { name: 'Axe', img: 'assets/images/heroes/axe_lg.png' },
      { name: 'Bane', img: 'assets/images/heroes/bane_lg.png' },
      { name: 'Batrider', img: 'assets/images/heroes/batrider_lg.png' },
      { name: 'Beastmaster', img: 'assets/images/heroes/beastmaster_lg.png' },
      { name: 'Bloodseeker', img: 'assets/images/heroes/bloodseeker_lg.png' },
      { name: 'Bounty Hunter', img: 'assets/images/heroes/bounty_hunter_lg.png' },
      { name: 'Brewmaster', img: 'assets/images/heroes/brewmaster_lg.png' },
      { name: 'Bristleback', img: 'assets/images/heroes/bristleback_lg.png' },
      { name: 'Broodmother', img: 'assets/images/heroes/broodmother_lg.png' },
      { name: 'Centaur Warrunner', img: 'assets/images/heroes/centaur_lg.png' },
      { name: 'Chaos Knight', img: 'assets/images/heroes/chaos_knight_lg.png' },
      { name: 'Chen', img: 'assets/images/heroes/chen_lg.png' },
      { name: 'Clinkz', img: 'assets/images/heroes/clinkz_lg.png' },
      { name: 'Crystal Maiden', img: 'assets/images/heroes/crystal_maiden_lg.png' },
      { name: 'Dark Seer', img: 'assets/images/heroes/dark_seer_lg.png' },
      { name: 'Dazzle', img: 'assets/images/heroes/dazzle_lg.png' },
      { name: 'Death Prophet', img: 'assets/images/heroes/death_prophet_lg.png' },
      { name: 'Disruptor', img: 'assets/images/heroes/disruptor_lg.png' },
      { name: 'Doom', img: 'assets/images/heroes/doom_bringer_lg.png' }
    ];
  }

  private _updateHeroImage(hero: DhHero, croppedImage: string): void {
    hero.img = croppedImage;
  }
}
