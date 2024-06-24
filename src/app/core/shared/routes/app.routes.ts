import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../pages/form-page/form-page.component').then(
        (m) => m.FormPageComponent,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('../../pages/not-found-page/not-found-page.component').then(
        (m) => m.NotFoundPageComponent,
      ),
  },
];
