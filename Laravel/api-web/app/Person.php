<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    //
    protected $table="person";
    protected $fillable = [
        'paterno', 'materno', 'nombre','id_usuario'
    ];
    


    
    public function usuarios(){
        return $this->belongsTo(User::class,'id_usuario','id');
    }
}
