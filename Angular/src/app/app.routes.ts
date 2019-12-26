import { RouterModule, Routes, Route } from '@angular/router';
import { SliderComponent } from './components/slider/slider.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
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
///////////////////////////////////////////////////////////////////////////////////////////////
import { ListasComponent } from './components/listas/listas.component';

const APP_ROUTES: Routes = [

///////////////////////////////////////////////////////////////////////////////////////////////
    { path: 'listas', component: ListasComponent},
///////////////////////////////////////////////////////////////////////////////////////////////
    { path: 'nuevo/:id' , component: NuevoComponent},
    { path: 'nuevos', component: NuevosComponent},
///////////////////////////////////////////////////////////////////////////////////////////////
    { path: 'entrega/:id' , component: EntregaComponent},
    { path: 'entregas', component: EntregasComponent},
///////////////////////////////////////////////////////////////////////////////////////////////
    { path: 'devolucion/:id' , component: DevolucionComponent},
    { path: 'devoluciones', component: DevolucionesComponent},
///////////////////////////////////////////////////////////////////////////////////////////////
    { path: 'subcategoria/:id' , component: SubcategoriaComponent},
    { path: 'subcategorias', component: SubcategoriasComponent},
///////////////////////////////////////////////////////////////////////////////////////////////
    { path: 'categoria/:id' , component: CategoriaComponent},
    { path: 'categorias', component: CategoriasComponent},
///////////////////////////////////////////////////////////////////////////////////////////////
    { path: 'usuario/:id' , component: UsuarioComponent},
    { path: 'usuarios', component: UsuariosComponent},
///////////////////////////////////////////////////////////////////////////////////////////////
    { path: 'ingreso-herramienta', component: IngresoHerramientaComponent},
    { path: 'catalogo', component: CatalogoComponent},
    { path: 'vision', component: VisionComponent},
    { path: 'mision', component: MisionComponent},
    { path: 'quienessomos', component: QuienesSomosComponent},
    { path: 'slider', component: SliderComponent},
    { path: '**', pathMatch: 'full' , redirectTo: 'slider' }
];
export const  APP_ROUTING = RouterModule.forRoot(APP_ROUTES);



