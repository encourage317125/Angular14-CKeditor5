import { Component } from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// import * as ClassicEditor from '@ckeditor/ckeditor5-build-decoupled-document';
// import * as InlineEditor from '@ckeditor/ckeditor5-build-inline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  public Editor: any = ClassicEditor;
}
