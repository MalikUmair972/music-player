import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
updateVolume($event: number) {
throw new Error('Method not implemented.');
}
  playlist: any[] = [];

  onFileSelected(event: any) {
    const fileInput = event.target; // ✅ Ensure correct target
    if (fileInput && fileInput.files && fileInput.files.length > 0) {  // ✅ Check if files exist
      const file = fileInput.files[0];  
      const audioUrl = URL.createObjectURL(file);
      this.playlist.push({ name: file.name, url: audioUrl });
    } else {
      console.error("No file selected!");  // ✅ Debugging message
    }
  }
}
