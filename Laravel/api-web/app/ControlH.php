<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ControlH extends Model
{
    protected $table="controlh";
    protected $fillable = [
        'fechaentrega','id_usuario','id_herramienta',
    ];

    public function usuarios(){
        return $this->belongsTo(User::class,'id_usuario','id');
    }

    public function herramienta(){
        return $this->belongsTo(Herramienta::class,'id_herramienta','id');
    }

}