import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FeatureComponent } from './feature.component';
import { HeaderModule } from '../shared/layout/header/header.module';
import { SidebarModule } from '../shared/layout/sidebar/sidebar.module';
import { FooterModule } from '../shared/layout/footer/footer.module';
import { DialogModule } from '../shared/partial/dialog/dialog.module';
import { UsersService } from '../core/service/users/users.service';
import { SharedModule } from 'app/shared/module/shared.module';
import { TodosComponent } from './todos/todos.component';
import { TodosHeaderComponent } from './todos/todos-header/todos-header.component';
import { TodosFooterComponent } from './todos/todos-footer/todos-footer.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TodoFilterPipe } from 'app/shared/pipe/filter/todo-filter.pipe';
import { FeatureRoutingModule } from './feature.routing';

@NgModule({
  imports: [
    HeaderModule,
    SidebarModule,
    FooterModule,
    DialogModule,
    SharedModule,
    ReactiveFormsModule,
    FeatureRoutingModule
  ],
  declarations: [
    FeatureComponent,
    TodosComponent,
    TodosHeaderComponent,
    TodosFooterComponent,
    TodoItemComponent,
    TodoFilterPipe
  ],
  providers: [
    UsersService
  ]
})

export class FeatureModule { }
