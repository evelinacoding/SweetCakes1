import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from 'ionicons/dist/loader';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  defineCustomElements(window)
