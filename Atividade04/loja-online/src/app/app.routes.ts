import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 
import { PainelPrincipalComponent } from './componentes/painel-principal/painel-principal.component'; 
 
const routes: Routes = [ 
 { path: 'painel-principal', component: PainelPrincipalComponent }, 
 { path: '', redirectTo: '/painel-principal', pathMatch: 'full' } 
]; 
 
@NgModule({ 
 imports: [RouterModule.forRoot(routes)], 
 exports: [RouterModule] 
}) 
export class AppRoutingModule { } 