// eslint-disable-next-line no-undef  
var db = require("mongoose");
var Schema = db.Schema;

// eslint-disable-next-line no-undef
module.exports = {
  area: db.model(
    "areas", Schema({ // OK
      area: { type: String, unique: true },
      alias: { type: String, unique: true }
    })
  ),

  cargo: db.model(
    "cargos", Schema({ 
      cargo: { type: String, unique: true }
    })
  ),

  coordinador: db.model(
    "coordinadores", Schema({
      nombre: { type: String, unique: true },
      usuario: { type: String, unique: true }
    })
  ),

  corregimiento: db.model(
    "corregimientos", Schema({
      distritoid: { type: Schema.ObjectId, ref: "distritos" },
      corregimiento: { type: String }
    })
  ),
  direccion: db.model(
    "direcciones", Schema({
      empleadoid: { type: Schema.ObjectId, ref: "empleados" },
      corregimientoid: { type: Schema.ObjectId, ref: "corregimientos" },
      direccion: String
    })
  ),

  distrito: db.model(
    "distritos", Schema({
      provinciaid: { type: Schema.ObjectId, ref: "provincias" },
      distrito: { type: String }
    })
  ),

  empleado: db.model(
    "empleados", Schema({
      nombre: String,
      apellido: String,
      genero: { type: Schema.ObjectId, ref: "generos" },
      estado_civil: { type: Schema.ObjectId, ref: "estados_civiles" },
      cedula: { type: String, unique: true },
      nacimientodt: Date,
      estado: { type: Schema.ObjectId, ref: "estados" }
    })
  ),

  equipo: db.model(
    "equipos", Schema({
      area: { type: Schema.ObjectId, ref: "areas" },
      coordinador: { type: Schema.ObjectId, ref: "coordinadores" },
      supervisor: { type: Schema.ObjectId, ref: "supervisores" },
      workgroupid: { type: String, unique: true }
    })
  ),

  estado_civil: db.model(
    "estados_civiles", Schema({
      estado_civil: { type: String, unique: true }
    })
  ),

  estado: db.model(
    "estados", Schema({
      estado: { type: String, unique: true }
    })
  ),
  
  genero: db.model(
    "generos", Schema({
      genero: { type: String, unique: true }
    })
  ),

  inf_contacto: db.model(
    "inf_contactos", Schema({
      empleadoid: { type: Schema.ObjectId, ref: "empleados" },
      telefono: String,
      celular: String,
      email: String
    })
  ),

  inf_emergencia: db.model(
    "inf_emergencias", Schema({
      empleadoid: { type: Schema.ObjectId, ref: "empleados" },
      contacto: String,
      parentesco: String,
      telefono: String
    })
  ),

  inf_laboral: db.model(
    "inf_laborales", Schema({
      empleadoid: { type: Schema.ObjectId, ref: "empleados" },
      usuario: String,
      codempleado: String,
      marcacion: String,
      cargoid: { type: Schema.ObjectId, ref: "cargos" },
      equipoid: { type: Schema.ObjectId, ref: "equipos" },
      ingresodt: Date
    })
  ),

  inf_medica: db.model(
    "inf_medica", Schema({
      empleadoid: { type: Schema.ObjectId, ref: "empleados" },
      condicion_medica: String,
      tipo_sangre: { type: Schema.ObjectId, ref: "tipo_sangre" },
      medico: String
    })
  ),

  salida: db.model(
    "salidas", Schema({
      empleadoid: { type: Schema.ObjectId, ref: "empleados" },
      salidadt: Date,
      motivosalida: { type: Schema.ObjectId, ref: "motivo_salidas" },
      notas: String
    })
  ),

  motivo_salida: db.model(
    "motivo_salidas", Schema({
      motivo_salida: String
    })
  ),

  perfil: db.model(
    "perfiles", Schema({
      perfil: { type: String, unique: true }
    })
  ),

  permiso: db.model(
    "permisos", Schema({
      perfilid: { type: Schema.ObjectId, ref: "perfiles" },
      rolid: { type: Schema.ObjectId, ref: "rol" }
    })
  ),

  provincia: db.model(
    "provincias", Schema({
      provincia: String
    })
  ),

  rol: db.model(
    "roles", Schema({
      rol: String,
      detalle: String
    })
  ),

  supervisor: db.model(
    "supervisores", Schema({
      nombre: String,
      usuario: String
    })
  ),

  tipo_sangre: db.model(
    "tipo_sangres", Schema({
      tipo_sangre: String
    })
  ),

  accesos: db.model(
    "accesos", Schema({
      empleadoid: { type: Schema.ObjectId, ref: "empleados" },
      usuario: {type: String, unique: true},
      perfilid: { type: Schema.ObjectId, ref: "perfiles" },
      avatar: String,
      clave: String,
      accesodt: Date
    })
  )
};