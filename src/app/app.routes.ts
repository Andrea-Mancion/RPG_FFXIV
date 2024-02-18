import { RouterModule, Routes } from '@angular/router';
import { CheckCharactersComponent } from './pages/check-characters/check-characters.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'check-characters',
        title: 'Check Characters',
        component: CheckCharactersComponent
    }
];

export class AppRoutingModule {}
