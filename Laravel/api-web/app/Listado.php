<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Listado extends Model
{
    protected $table="listado";
    protected $fillable = [
        'id_usuario','id_categoria',
    ];

    public function usuarios(){
        return $this->belongsTo(User::class,'id_usuario','id');
    }

    public function categoria(){
        return $this->belongsTo(Categoria::class,'id_categoria','id');
    }
}
