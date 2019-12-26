<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ObservacionH extends Model
{
    protected $table="observacionh";
    protected $fillable = [
        'fechadevolucion','id_usuario','id_herramienta',
    ];

    public function usuarios(){
        return $this->belongsTo(User::class,'id_usuario','id');
    }

    public function herramienta(){
        return $this->belongsTo(Herramienta::class,'id_herramienta','id');
    }
}
