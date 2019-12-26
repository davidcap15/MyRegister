<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableEmpleado extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empleado', function (Blueprint $table) {
            $table->increments('id');
            $table->date('fechasalida');
            $table->boolean('estatus');
            $table->integer('id_observacionh')->unsigned();
            $table->foreign('id_observacionh')->references('id')->on('observacionh');
            $table->integer('id_herramienta')->unsigned();
            $table->foreign('id_herramienta')->references('id')->on('herramienta');
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('empleado');
    }
}
