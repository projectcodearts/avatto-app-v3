import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EntrypointComponent } from './components/entrypoint/entrypoint.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entrypoint',
    pathMatch: 'full'
  },
  {
    path: 'entrypoint',
    component: EntrypointComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./allPages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./allPages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./allPages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./allPages/aboutus-page/aboutus-page.module').then( m => m.AboutusPagePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./allPages/product-page/product-page.module').then( m => m.ProductPagePageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./allPages/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./allPages/user-address/user-address.module').then( m => m.UserAddressPageModule)
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./allPages/product-page/product-page-details/product-page-details.module').then( m => m.ProductPageDetailsPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./allPages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'categories/:id',
    loadChildren: () => import('./allPages/categories/category-details/category-details.module').then( m => m.CategoryDetailsPageModule)
  },
  {
    path: 'eligiblity',
    loadChildren: () => import('./allPages/eligiblity-page/eligiblity-page.module').then( m => m.EligiblityPagePageModule)
  },
  {
    path: 'syllabus',
    loadChildren: () => import('./allPages/syllabus-page/syllabus-page.module').then( m => m.SyllabusPagePageModule)
  },
  {
    path: 'explain',
    loadChildren: () => import('./allPages/quiz-explain/quiz-explain.module').then( m => m.QuizExplainPageModule)
  },
  {
    path: 'papers',
    loadChildren: () => import('./allPages/papers-page/papers-page.module').then( m => m.PapersPagePageModule)
  },
  {
    path: 'mocktest',
    loadChildren: () => import('./allPages/mocktest-page/mocktest-page.module').then( m => m.MocktestPagePageModule)
  },{
    path: 'result',
    loadChildren: () => import('./allPages/result/result.module').then( m => m.ResultPageModule)
  },{
    path: 'quiz/:id',
    loadChildren: () => import('./allPages/quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'practice-question',
    loadChildren: () => import('./allPages/practice-question/practice-question.module').then( m => m.PracticeQuestionPageModule)
  },
  {
    path: 'practice-question/:id',
    loadChildren: () => import('./allPages/practice-question-details/practice-question-details.module').then( m => m.PracticeQuestionDetailsPageModule)
  },
  
  {
    path: 'mcq/:id',
    loadChildren: () => import('./allPages/mcq-page/mcq-page.module').then( m => m.McqPagePageModule)
  },   
  {
    path: 'cart',
    loadChildren: () => import('./allPages/cart-page/cart-page.module').then( m => m.CartPagePageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./allPages/checkout-page/checkout-page.module').then( m => m.CheckoutPagePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./allPages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'practice-quiz/:id',
    loadChildren: () => import('./allPages/practice-quiz/practice-quiz.module').then( m => m.PracticeQuizPageModule)
  },
  {
    path: 'short-question-listing/:id',
    loadChildren: () => import('./allPages/short-question-listing/short-question-listing.module').then( m => m.ShortQuestionListingPageModule)
  },
  {
    path: 'syllabus-details/:id',
    loadChildren: () => import('./allPages/syllabus-details/syllabus-details.module').then( m => m.SyllabusDetailsPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./allPages/quiz-main-page/quiz-main-page.module').then( m => m.QuizMainPagePageModule)
  },

  {
    path: 'quiz-explain',
    loadChildren: () => import('./allPages/quiz-explain/quiz-explain.module').then( m => m.QuizExplainPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./allPages/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'user-address',
    loadChildren: () => import('./allPages/user-address/user-address.module').then( m => m.UserAddressPageModule)
  },
  {
    path: 'short-question-detail/:id',
    loadChildren: () => import('./allPages/short-question-detail/short-question-detail.module').then( m => m.ShortQuestionDetailPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./allPages/profile-page/profile-page.module').then( m => m.ProfilePagePageModule)
  },
  {
    path: 'search-result',
    loadChildren: () => import('./allPages/search-result-page/search-result-page.module').then( m => m.SearchResultPagePageModule)
  },
  
  {
    path: 'search-result/:id',
    loadChildren: () => import('./allPages/search-result-page/search-result-details-page/search-result-details-page.module').then( m => m.SearchResultDetailsPagePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./allPages/pagenotfound/pagenotfound.module').then( m => m.PagenotfoundPageModule)
  }
  

  

  


  


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
