<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Herramienta extends Model
{
    protected $table="herramienta";
    protected $fillable = [
        'nombre', 'cantidad', 'descripcion','id_categoria', 'id_subcategoria'
    ];
    


    
    public function categoria(){
        return $this->belongsTo(categoria::class,'id_categoria','id');
    }

  public function subcategoria(){
            return $this->belongsTo(subcategoria::class,'id_subcategoria','id');



    }
}
