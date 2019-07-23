module.exports = {
    create: {
        success: {
            title: 'Proceso completado!',
            type: 'success',
            message: 'Los datos se han registrado satisfactoriamente'
        },
        error: {
            title: 'Error interno!',
            type: 'warning',
            message: 'No ha sido posible registrar los datos!\nContacte con el administrador.'
        },
        not_found: {
            title: 'Error interno!',
            type: 'danger',
            message: 'Se ha producido un error al intentar registrar los datos!\nContacte con el administrador.'
        }
    },
    read: {
        success: {
            title: 'Datos obtenidos!',
            type: 'success',
            message: 'Se han obtenido los datos solicitados'
        },
        error: {
            title: 'Error interno!',
            type: 'warning',
            message: 'No ha sido posible obtener los datos!\nContacte con el administrador.'
        },
        not_found: {
            title: 'Error interno!',
            type: 'danger',
            message: 'Se ha producido un error al intentar obteber los datos!\n Es posible que ho hayan datos disponibles.\nContacte con el administrador.'
        }
    },
    filter: {
        success: {
            title: 'Datos obtenidos!',
            type: 'success',
            message: 'Se han obtenido los datos solicitados'
        },
        error: {
            title: 'Error interno!',
            type: 'warning',
            message: 'No ha sido posible obtener los datos!\nContacte con el administrador.'
        },
        not_found: {
            title: 'Error interno!',
            type: 'danger',
            message: 'Se ha producido un error al intentar obteber los datos!\n Es posible que ho hayan datos disponibles.\nContacte con el administrador.'
        }
    },
    update: {
        success: {
            title: 'Datos actualizados!',
            type: 'success',
            message: 'Se han actualizado los datos satisfactoriamente.'
        },
        error: {
            title: 'Error interno!',
            type: 'warning',
            message: 'No ha sido posible actualizar los registros!\nContacte con el administrador.'
        },
        not_found: {
            title: 'Error interno!',
            type: 'danger',
            message: 'Se ha producido un error al intentar actualizar los registros!\nContacte con el administrador.'
        }
    },
    delete: {
        success: {
            title: 'Datos eliminados!',
            type: 'success',
            message: 'Se han elimiando los datos satisfactoriamente.'
        },
        error: {
            title: 'Error interno!',
            type: 'warning',
            message: 'No ha sido posible eliminar los registros!\nContacte con el administrador.'
        },
        not_found: {
            title: 'Error interno!',
            type: 'danger',
            message: 'Se ha producido un error al intentar elimianr los registros!\nContacte con el administrador.'
        }
    },
}