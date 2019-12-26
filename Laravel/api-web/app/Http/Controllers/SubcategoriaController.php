<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subcategoria;
use DB;

class SubcategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Subcategoria::where('estatus','=',1)->get();
        $subcategorias = [];
        foreach($data as $key => $value){
           $subcategorias[$key] = [
                'id'=>$value['id'],
                'nombresub'=>$value['nombresub'],
                'estatus'=>$value['estatus'],
            ];
        }
        return response()->json($subcategorias);
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
            
            $subcategorias = new Subcategoria();
            $subcategorias->nombresub =  $datos['nombresub'];
            $subcategorias->estatus=1;
            $subcategorias->save();

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
        $otraVar = Subcategoria::find($id);
        
        $masvar = [
            'id'=>$otraVar['id'],
            'nombresub'=>$otraVar['nombresub'],
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
            $subcategorias = Subcategoria::find($id);
            $subcategorias->nombresub =  $datos['nombresub'];
            $subcategorias->update();

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
        $subcategorias = Subcategoria::find($id);
        $subcategorias->estatus=0;
        $subcategorias->update();
        return response()->json(array('success' => true));
    }
}
