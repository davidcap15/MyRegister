<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//////////////////////////UsuarioController///////////////////////////////////
Route::get('usuarios','UsuarioController@index');
Route::post('usuarios','UsuarioController@store');
Route::get('usuarios/{id}','UsuarioController@edit');
Route::put('usuarios/{id}','UsuarioController@update');
Route::delete('usuarios/{id}','UsuarioController@destroy');


//////////////////////////RegistroController///////////////////////////////////
Route::get('registro','RegistroController@index');
Route::post('registro','RegistroController@store');
Route::get('registro/{id}','RegistroController@edit');
Route::put('registro/{id}','RegistroController@update');
Route::delete('registro/{id}','RegistroController@destroy');

//////////////////////////CategoriaController///////////////////////////////////
Route::get('categoria','CategoriaController@index');
Route::post('categoria','CategoriaController@store');
Route::get('categoria/{id}','CategoriaController@edit');
Route::put('categoria/{id}','CategoriaController@update');
Route::delete('categoria/{id}','CategoriaController@destroy');

//////////////////////////SubcategoriaController///////////////////////////////////
Route::get('subcategoria','SubcategoriaController@index');
Route::post('subcategoria','SubcategoriaController@store');
Route::get('subcategoria/{id}','SubcategoriaController@edit');
Route::put('subcategoria/{id}','SubcategoriaController@update');
Route::delete('subcategoria/{id}','SubcategoriaController@destroy');

//////////////////////////ControlController///////////////////////////////////
Route::get('control','ControlController@index');
Route::post('control','ControlController@store');
//////NO DISPONIBLE//////////
Route::put('control/{id}','ControlController@update');
//////NO DISPONIBLE//////////

//////////////////////////ObservacionController///////////////////////////////////
Route::get('observacion','ObservacionController@index');
Route::post('observacion','ObservacionController@store');
//////NO DISPONIBLE//////////
Route::put('observacion/{id}','ObservacionController@update');
//////NO DISPONIBLE//////////

//////////////////////////EmpleadoController///////////////////////////////////
Route::get('empleado','EmpleadoController@index');
Route::post('empleado','EmpleadoController@store');
Route::get('empleado/{id}','EmpleadoController@edit');
Route::put('empleado/{id}','EmpleadoController@update');
Route::delete('empleado/{id}','EmpleadoController@destroy');

//////////////////////////ListadoController///////////////////////////////////
Route::get('lista','ListadoController@index');
Route::post('lista','ListadoController@store');
Route::get('lista/{id}','ListadoController@edit');
Route::put('lista/{id}','ListadoController@update');
Route::delete('lista/{id}','ListadoController@destroy');