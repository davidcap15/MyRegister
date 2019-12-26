<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableHerramienta extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('herramienta', function (Blueprint $table) {
        $table->increments('id');
        $table->string('nombre');
        $table->string('descripcion');
        $table->integer('cantidad');
        $table->boolean('estatus');
        $table->integer('id_categoria')->unsigned();
        $table->foreign('id_categoria')->references('id')->on('categoria');
    

        $table->integer('id_subcategoria')->unsigned();
        $table->foreign('id_subcategoria')->references('id')->on('subcategoria');
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
        Schema::dropIfExists('herramienta');
    }

}