import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoService } from './shared/todo.service';
import { todoReducer } from './state/todo.reducer';
import { TodoEffects } from './state/todo.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      todo: todoReducer
    }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [
    TodoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
