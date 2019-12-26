<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listado;
use App\Users;
use App\Categoria;
use DB;
class ListadoController extends Controller
{
    public function index()
    {
        //
        $data = Listado::where('estatus','=',1)->get();
        $lista = [];
        foreach($data as $key => $value){
           $lista[$key] = [
                'id'=>$value['id'],
                'id_usuario'=>$value->usuarios->name,
                'id_categoria'=>$value->categoria->nombre,
                'estatus'=>$value['estatus'],
             ];
        }
        return response()->json($lista);
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
            
            $lista = new Listado();
            $lista->id_usuario=$datos['id_usuario'];
            $lista->id_categoria=$datos['id_categoria'];
            $lista->estatus=1;
            $lista->save();

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
        $otraVar = Listado::find($id);
        $otroDato = User::where('id','=',$otraVar->id_usuario)->first();
        $otroDato = Categoria::where('id','=',$otraVar->id_categoria)->first();
        
        $masvar = [
            'id'=>$otraVar['id'],
            'id_usuario'=>$otroDato['id_usuario'],
            'id_categoria'=>$otroDato['id_categoria'],
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
            $lista = Listado::find($id);
            $lista->update();

            $usuarios = User::where('id','=',$lista->id_usuario)->first();
            $usuarios->id_usuario = $datos['id_usuario'];

            $usuarios->update();

            $categorias = Categoria::where('id','=',$lista->id_categoria)->first();
            $categorias->id_categoria = $datos['id_categoria'];
            $categorias->update();
            
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
        $lista = Listado::find($id);
        $lista->estatus=0;
        $lista->update();
        return response()->json(array('success' => true));
    }
}