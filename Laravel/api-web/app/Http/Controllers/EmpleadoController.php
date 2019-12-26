<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Empleado;
use App\ObservacionH;
use App\Herramienta;
use DB;
class EmpleadoController extends Controller
{public function index()
    {
        //
        $data = Empleado::where('estatus','=',1)->get();
        $empleado = [];
        foreach($data as $key => $value){
           $empleado[$key] = [
                'id'=>$value['id'],
                'fechasalida'=>$value['fechasalida'],
                'id_observacionh'=>$value->ObservacionH->fechaentrada,
                'id_herramienta'=>$value->herramienta->nombre,
                'estatus'=>$value['estatus'],
             ];
        }
        return response()->json($empleado);
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
            
            $empleado = new Empleado();
            $empleado->fechasalida =  $datos['fechasalida'];
            $empleado->id_observacionh=$datos['id_observacionh'];
            $empleado->id_herramienta=$datos['id_herramienta'];
            $empleado->estatus=1;
            $empleado->save();

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
        $otraVar = Empleado::find($id);
        $otroDato = ObservacionH::where('id','=',$otraVar->id_observacionh)->first();
        $otroDato = Herramienta::where('id','=',$otraVar->id_herramienta)->first();
        
        $masvar = [
            'id'=>$otraVar['id'],
            'fechasalida'=>$otraVar['fechasalida'],
            'id_observacionh'=>$otroDato['id_observacionh'],
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
            $empleado = Empleado::find($id);
            $empleado->fechasalida =  $datos['fechasalida'];
            $empleado->update();

            $observacion = ObeservacionH::where('id','=',$empleado->id_observacionh)->first();
            $observacion->id_observacionh = $datos['id_observacionh'];

            $observacion->update();

            $herramientas = Herramienta::where('id','=',$empleado->id_herramienta)->first();
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
        $empleado = Empleado::find($id);
        $empleado->estatus=0;
        $empleado->update();
        return response()->json(array('success' => true));
    }
}