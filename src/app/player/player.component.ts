import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  currentSong = {
    title: 'Song Title',
    artist: 'Artist Name',
    albumArt: 'https://via.placeholder.com/200'
  };

  isPlaying = false;
  progress = 50; // Example progress

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    // Add logic to play/pause audio
  }

  nextSong() {
    // Add logic to play the next song
  }

  prevSong() {
    // Add logic to play the previous song
  }
}
