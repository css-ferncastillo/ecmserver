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
            distritoid: { type: String },
            corregimiento: { type: String }
        })
    ),
    direccion: db.model(
        "direcciones", Schema({
            provinciaid: { type: Schema.ObjectId, ref: "provincias" },
            distritoid: { type: Schema.ObjectId, ref: "distritos" },
            corregimientoid: { type: Schema.ObjectId, ref: "corregimientos" },
            direccion: String
        })
    ),

    distrito: db.model(
        "distritos", Schema({
            provinciaid: { type: String },
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
            nacimientodt: Date
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
            telefono: String,
            celular: String,
            email: String
        })
    ),

    inf_emergencia: db.model(
        "inf_emergencias", Schema({
            contacto: String,
            parentesco: String,
            telefono: String
        })
    ),

    inf_laboral: db.model(
        "inf_laborales", Schema({
            usuario: String,
            codempleado: String,
            marcacion: String,
            cargoid: { type: Schema.ObjectId, ref: "cargos" },
            equipoid: { type: Schema.ObjectId, ref: "equipos" },
            ingresodt: Date,
            estado: { type: Schema.ObjectId, ref: "estados" },
            salario: { type: Number }
        })
    ),

    inf_medica: db.model(
        "inf_medicas", Schema({
            condicion_medica: String,
            tipo_sangre: { type: Schema.ObjectId, ref: "tipo_sangre" },
            medico: String
        })
    ),

    salida: db.model(
        "inf_salidas", Schema({
            salidadt: Date,
            motivosalida: { type: Schema.ObjectId, ref: "motivo_salidas" },
            notas: String
        })
    ),

    userdata: db.model(
        "userdatas", Schema({
            inf_empleado: { type: Schema.ObjectId, ref: 'empleados' },
            inf_contacto: { type: Schema.ObjectId, ref: 'inf_contactos' },
            inf_emergencia: { type: Schema.ObjectId, ref: 'inf_emergencias' },
            inf_laboral: { type: Schema.ObjectId, ref: 'inf_laborales' },
            inf_medica: { type: Schema.ObjectId, ref: 'inf_medica' },
            inf_salida: { type: Schema.ObjectId, ref: 'inf_salidas' },
            inf_direccion: { type: Schema.ObjectId, ref: 'direcciones' },
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
    avatar: db.model(
        "avatars", Schema({
            avatar: String
        })
    ),

    accesos: db.model(
        "accesos", Schema({
            empleadoid: { type: Schema.ObjectId, ref: "empleados" },
            usuario: { type: String, unique: true },
            perfilid: { type: Schema.ObjectId, ref: "perfiles" },
            avatar: String,
            clave: String,
            accesodt: Date
        })
    )
};