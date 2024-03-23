import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostItemComponent } from './posts-list/post-item/post-item.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module'
// import { UserModule } from './user/user.module';
import { ThemeModule } from './theme/theme.module';
import { WelcomeComponent } from './introduction/introduction.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { DetailsPostComponent } from './details-post/details-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationsComponent } from './locations/locations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';

import { ReduxSimulationComponent } from './redux-simulation/redux-simulation.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThemesListComponent,
    PostsListComponent,
    PostItemComponent,
    HomeComponent,
    WelcomeComponent,
    NotFoundComponent,
    AuthenticateComponent,
    DetailsPostComponent,
    LocationsComponent,
    ReduxSimulationComponent,


  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    // UserModule, removing for lazy loading
    ThemeModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),

  ],
  providers: [
    appInterceptorProvider,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { verticalPosition: 'top' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
