import { CoreModule } from './core/core.module';
import { appRouting } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { ZeroPaddingPipe } from './shared/pipes/zero-padding.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TypescriptComponent } from './features/typescript/typescript.component';
import { DataBindingComponent } from './features/data-binding/data-binding.component';
import { EventBindingComponent } from './features/event-binding/event-binding.component';
import { BuiltInDirectivesComponent } from './features/built-in-directives/built-in-directives.component';
import { CustomPipesComponent } from './features/custom-pipes/custom-pipes.component';
import { ComponentInteractionComponent } from './features/component-interaction/component-interaction.component';
import { ParentComponent } from './features/component-interaction/parent/parent.component';
import { ChildComponent } from './features/component-interaction/parent/child/child.component';
import { TemplateDrivenComponent } from './features/forms/template-driven/template-driven.component';
@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    DataBindingComponent,
    EventBindingComponent,
    BuiltInDirectivesComponent,
    CustomPipesComponent,

    // pipes
    ZeroPaddingPipe,

    ComponentInteractionComponent,
    ParentComponent,
    ChildComponent,
    TemplateDrivenComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
