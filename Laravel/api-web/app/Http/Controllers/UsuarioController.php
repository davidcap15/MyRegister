<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Person;
use DB;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Person::where('estatus','=',1)->get();
        $personas = [];
        foreach($data as $key => $value){
           $usuarios[$key] = [
                'id'=>$value['id'],
                'paterno'=>$value['paterno'],
                'materno'=>$value['materno'],
                'nombre'=>$value['nombre'],
                
                'correo'=>$value->usuarios->email,
                'estatus'=>$value['estatus'],
             ];
        }
        return response()->json($usuarios);
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
            $usuarios = new User();
            $usuarios->name = $datos['paterno']." ".$datos['materno']." ".$datos['nombre'];
            $usuarios->email = $datos['usuario'];
            $usuarios->password =bcrypt($datos['password']);
            $usuarios->save();

            $persona = new Person();
            $persona->paterno =  $datos['paterno'];
            $persona->materno =  $datos['materno'];
            $persona->nombre =  $datos['nombre'];
            $persona->estatus=1;
            $persona->id_usuario=$usuarios->id;
            $persona->save();
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
        $otraVar = Person::find($id);
        $otroDato = User::where('id','=',$otraVar->id_usuario)->first();
        
        $masvar = [
            'id'=>$otraVar['id'],
            'paterno'=>$otraVar['paterno'],
            'materno'=>$otraVar['materno'],
            'nombre'=>$otraVar['nombre'],
            
            'correo'=>$otroDato['email']
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
            $persona = Person::find($id);
            $persona->paterno =  $datos['paterno'];
            $persona->materno =  $datos['materno'];
            $persona->nombre =  $datos['nombre'];
            
            $persona->update();

            $usuarios = User::where('id','=',$persona->id_usuario)->first();
            $usuarios->name = $datos['paterno']." ".$datos['materno']." ".$datos['nombre'];
            $usuarios->email = $datos['usuario'];
            isset($datos['password'])  ? $usuarios->password = bcrypt($datos['password']):null;
            $usuarios->update();
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
        $persona = Person::find($id);
        $persona->estatus=0;
        $persona->update();
        return response()->json(array('success' => true));
    }
}