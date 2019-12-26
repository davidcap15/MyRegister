import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
///////////////////////////////////////////////////////////////////////////////////////////////
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { SliderComponent } from './components/slider/slider.component';
import { APP_ROUTING } from './app.routes';
import { MisionComponent } from './components/mision/mision.component';
import { VisionComponent } from './components/vision/vision.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { IngresoHerramientaComponent } from './components/ingreso-herramienta/ingreso-herramienta.component';
///////////////////////////////////////////////////////////////////////////////////////////////
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
///////////////////////////////////////////////////////////////////////////////////////////////
import { CategoriaComponent } from './components/categoria/categoria.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
///////////////////////////////////////////////////////////////////////////////////////////////
import { SubcategoriaComponent } from './components/subcategoria/subcategoria.component';
import { SubcategoriasComponent } from './components/subcategorias/subcategorias.component';
///////////////////////////////////////////////////////////////////////////////////////////////
import { EntregaComponent } from './components/entrega/entrega.component';
import { EntregasComponent } from './components/entregas/entregas.component';
///////////////////////////////////////////////////////////////////////////////////////////////
import { DevolucionComponent } from './components/devolucion/devolucion.component';
import { DevolucionesComponent } from './components/devoluciones/devoluciones.component';
///////////////////////////////////////////////////////////////////////////////////////////////
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { NuevosComponent } from './components/nuevos/nuevos.component';
import { IngresoHerramientasComponent } from './components/ingreso-herramientas/ingreso-herramientas.component';
///////////////////////////////////////////////////////////////////////////////////////////////
import { ListaComponent } from './components/lista/lista.component';
import { ListasComponent } from './components/listas/listas.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    QuienesSomosComponent,
    MisionComponent,
    VisionComponent,
    CatalogoComponent,
    IngresoHerramientaComponent,
    UsuarioComponent,
    UsuariosComponent,
    CategoriaComponent,
    CategoriasComponent,
    SubcategoriaComponent,
    SubcategoriasComponent,
    EntregaComponent,
    EntregasComponent,
    DevolucionComponent,
    DevolucionesComponent,
    NuevoComponent,
    NuevosComponent,
    IngresoHerramientasComponent,
    ListaComponent,
    ListasComponent,
 ],
  
 
 imports: [
   
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
