import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.scss']
})
export class VolumeComponent {
  @Output() volumeChange = new EventEmitter<number>();
  volume: number = 50;

  changeVolume() {
    this.volumeChange.emit(this.volume);
  }
}
