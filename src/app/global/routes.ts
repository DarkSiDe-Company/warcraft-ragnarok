import { Routes } from '@angular/router';

enum PATH_MATCH {
    FULL = 'full',
    PREFIX = 'prefix'
}

export const ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('../pages/main-page/main-page.module').then(m => m.MainPageModule)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: PATH_MATCH.FULL
    }
]