<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ObservacionH;
use App\Users;
use App\Herramienta;
use DB;
class ObservacionController extends Controller
{
    public function index()
    {
        //
        $data = ObservacionH::where('estatus','=',1)->get();
        $observacion = [];
        foreach($data as $key => $value){
           $observacion[$key] = [
                'id'=>$value['id'],
                'fechadevolucion'=>$value['fechadevolucion'],
                'id_usuario'=>$value->usuarios->name,
                'id_herramienta'=>$value->herramienta->nombre,
                'estatus'=>$value['estatus'],
             ];
        }
        return response()->json($observacion);
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
            
            $observacion = new ObservacionH();
            $observacion->fechadevolucion =  $datos['fechadevolucion'];
            $observacion->id_usuario=$datos['id_usuario'];
            $observacion->id_herramienta=$datos['id_herramienta'];
            $observacion->estatus=1;
            $observacion->save();

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
        $otraVar = ObservacionH::find($id);
        $otroDato = User::where('id','=',$otraVar->id_usuario)->first();
        $otroDato = Herramienta::where('id','=',$otraVar->id_herramienta)->first();
        
        $masvar = [
            'id'=>$otraVar['id'],
            'fechadevolucion'=>$otraVar['fechadevolucion'],
            'id_usuario'=>$otroDato['id_usuario'],
            'id_herramienta'=>$otroDato['id_herramienta'],
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
            $observacion = ObservacionH::find($id);
            $observacion->fechadevolucion =  $datos['fechadevolucion'];
            $observacion->update();

            $usuarios = User::where('id','=',$control->id_usuario)->first();
            $usuarios->id_usuario = $datos['id_usuario'];

            $usuarios->update();

            $herramientas = Herramienta::where('id','=',$herramientas->id_herramienta)->first();
            $herramientas->id_herramienta = $datos['id_herramienta'];
            $herramientas->update();
            
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
        $observacion = ObservacionH::find($id);
        $observacion->estatus=0;
        $observacion->update();
        return response()->json(array('success' => true));
    }
}