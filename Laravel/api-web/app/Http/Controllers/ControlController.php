<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Herramienta;
use App\ControlH;
use App\Users;
use DB;
class ControlController extends Controller
{
    public function index()
    {
        //
        $data = ControlH::where('estatus','=',1)->get();
        $control = [];
        foreach($data as $key => $value){
           $control[$key] = [
                'id'=>$value['id'],
                'fechaentrega'=>$value['fechaentrega'],
                'id_usuario'=>$value->usuarios->name,
                'id_herramienta'=>$value->herramienta->nombre,
                'estatus'=>$value['estatus'],
             ];
        }
        return response()->json($control);
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
            
            $control = new ControlH();
            $control->fechaentrega =  $datos['fechaentrega'];
            $control->id_usuario=$datos['id_usuario'];
            $control->id_herramienta=$datos['id_herramienta'];
            $control->estatus=1;
            $control->save();

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
        $otraVar = ControlH::find($id);
        $otroDato = User::where('id','=',$otraVar->id_usuario)->first();
        $otroDato = Herramienta::where('id','=',$otraVar->id_herramienta)->first();
        
        $masvar = [
            'id'=>$otraVar['id'],
            'fechaentrega'=>$otraVar['fechaentrega'],
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
            $control = ControlH::find($id);
            $control->fechaentrega =  $datos['fechaentrega'];
            $control->update();

            $usuarios = User::where('id','=',$control->id_usuario)->first();
            $usuarios->id_usuario = $datos['id_usuario'];

            $usuarios->update();

            $herramientas = Herramienta::where('id','=',$control->id_herramienta)->first();
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
        $control = ControlH::find($id);
        $control->estatus=0;
        $control->update();
        return response()->json(array('success' => true));
    }
}