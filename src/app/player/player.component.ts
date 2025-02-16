import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  songs = [
    { title: "Song 1", artist: "Artist 1", albumArt: "assets/httpsyoutubee9k04nnastasixwtexzgwvjlbtfqr.jpg", url: "assets/httpsyoutubee9k04nnastasixwtexzgwvjlbtfqr.mp3" },
    { title: "Song 2", artist: "Artist 2", albumArt: "assets/song2.jpg", url: "assets/song2.mp3" }
  ];

  currentIndex = 0;
  currentSong = this.songs[this.currentIndex];
  isPlaying = false;
  progress = 0;

  ngAfterViewInit() {
    this.audioPlayer.nativeElement.src = this.currentSong.url;
  }

  prevSong() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.changeSong();
    }
  }

  nextSong() {
    if (this.currentIndex < this.songs.length - 1) {
      this.currentIndex++;
      this.changeSong();
    }
  }

  togglePlay() {
    const player = this.audioPlayer.nativeElement;
    if (this.isPlaying) {
      player.pause();
    } else {
      player.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  selectSong(song: any) {
    this.currentIndex = this.songs.indexOf(song);
    this.changeSong();
  }

  changeSong() {
    const player = this.audioPlayer.nativeElement;
    this.currentSong = this.songs[this.currentIndex];
    player.src = this.currentSong.url;
    player.play();
    this.isPlaying = true;
  }

  updateProgress() {
    const player = this.audioPlayer.nativeElement;
    this.progress = (player.currentTime / player.duration) * 100 || 0;
  }
 
    volume: number = 50; // Default volume
  
    updateVolume(newVolume: number) {
      this.volume = newVolume;
      this.audioPlayer.nativeElement.volume = newVolume / 100; // Update audio volume
      console.log('Volume updated:', this.volume);
    }
  }
  

