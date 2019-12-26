<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Herramienta;
use App\Categoria;
use App\Subcategoria;
use DB;

class RegistroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $data = Herramienta::where('estatus','=',1)->get();
        $herramientas = [];
        foreach($data as $key => $value){
           $herramientas[$key] = [
                'id'=>$value['id'],
            'nombre'=>$value['nombre'],
                'cantidad'=>$value['cantidad'],
                'descripcion'=>$value['descripcion'],


               'id_subcategoria'=>$value->subcategoria->nombresub,
                'id_categoria'=>$value->categoria->nombrecat,


            'estatus'=>$value['estatus'],

             ];
     }
        return response()->json($herramientas);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $datos = $request->all();
        DB::beginTransaction();
        try {
            $herramientas = new Herramienta();
            $herramientas->nombre= $datos['nombre'];
            $herramientas->cantidad=$datos['cantidad'];
            $herramientas->descripcion=$datos['descripcion'];


            $herramientas->id_subcategoria=$datos['id_subcategoria'];
            $herramientas->id_categoria=$datos['id_categoria'];
            $herramientas->estatus=1;
            $herramientas->save();

            DB::commit();
            return response()->json(array('success' => true));
        }catch (Exception $e) {
            DB::rollBack();
            return response()->json(array('success' => false));
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $otraVar = Herramienta::find($id);
        // $otroDato = Subcategoria::where('id','=',$otraVar->id_nombresub)->first();
        // $otroDato = Categoria::where('id','=',$otraVar->id_nombrecat)->first();
        
        $masvar = [
            'id'=>$otraVar['id'],
            'nombre'=>$otraVar['nombre'],
            'cantidad'=>$otraVar['cantidad'],
            'descripcion'=>$otraVar['descripcion'],
            'id_subcategoria'=>$otraVar['id_subcategoria'],
            'id_categoria'=>$otraVar['id_categoria'],
        ];
        return response()->json($masvar);        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $datos = $request->all();
        DB::beginTransaction();
        try {
            $herramientas = Herramienta::find($id);
            $herramientas->nombre =  $datos['nombre'];
            $herramientas->cantidad =  $datos['cantidad'];
            $herramientas->descripcion =  $datos['descripcion'];
            $herramientas->id_subcategoria = $datos['id_subcategoria'];
            $herramientas->id_categoria = $datos['id_categoria'];
            $herramientas->update();

            // $subcategorias = Subcategoria::where('id','=',$herramientas->id_subcategoria)->first();
            

            // $subcategorias->update();

            // // $categorias = Categoria::where('id','=',$herramientas->id_categoria)->first();
          
            // $categorias->update();
            
            DB::commit();
            return response()->json(array('success' => true));
        }catch (Exception $e) {
            DB::rollBack();
            return response()->json(array('success' => false));
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $herramientas = Herramienta::find($id);
        $herramientas->estatus=0;
        $herramientas->update();
        return response()->json(array('success' => true));
    }
}