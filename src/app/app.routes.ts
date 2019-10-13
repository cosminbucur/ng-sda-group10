import { TemplateDrivenComponent } from './features/forms/template-driven/template-driven.component';
import { ComponentInteractionComponent } from './features/component-interaction/component-interaction.component';
import { CustomPipesComponent } from './features/custom-pipes/custom-pipes.component';
import { BuiltInDirectivesComponent } from './features/built-in-directives/built-in-directives.component';
import { EventBindingComponent } from './features/event-binding/event-binding.component';
import { DataBindingComponent } from './features/data-binding/data-binding.component';
import { AppComponent } from './app.component';
import { TypescriptComponent } from './features/typescript/typescript.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'event-binding', component: EventBindingComponent },
    { path: 'typescript', component: TypescriptComponent },
    { path: 'built-in-directives', component: BuiltInDirectivesComponent },
    { path: 'custom-pipes', component: CustomPipesComponent },
    { path: 'component-interaction', component: ComponentInteractionComponent },
    { path: 'template-driven', component: TemplateDrivenComponent },
    { path: '', pathMatch: 'full', component: AppComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
