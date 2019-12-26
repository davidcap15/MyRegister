<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categoria;
use DB;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Categoria::where('estatus','=',1)->get();
        $categorias = [];
        foreach($data as $key => $value){
           $categorias[$key] = [
                'id'=>$value['id'],
                'nombrecat'=>$value['nombrecat'],
                'estatus'=>$value['estatus'],
            ];
        }
        return response()->json($categorias);
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
            
            $categorias = new Categoria();
            $categorias->nombrecat =  $datos['nombrecat'];
            $categorias->estatus=1;
            $categorias->save();

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
        $otraVar = Categoria::find($id);
        
        $masvar = [
            'id'=>$otraVar['id'],
            'nombrecat'=>$otraVar['nombrecat'],
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
            $categorias = Categoria::find($id);
            $categorias->nombrecat =  $datos['nombrecat'];
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
        
        $categorias = Categoria::find($id);
        $categorias->estatus=0;
        $categorias->update();
        return response()->json(array('success' => true));
    }
}
