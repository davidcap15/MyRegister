<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    protected $table="empleado";
    protected $fillable = [
        'fechasalida','id_observacionh','id_herramienta',
    ];

    public function observacion(){
        return $this->belongsTo(ObservacionH::class,'id_observacionh','id');
    }

    public function herramienta(){
        return $this->belongsTo(Herramienta::class,'id_herramienta','id');
    }
}
