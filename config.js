module.exports = {
    sqlConfig: {
      user: 'admin',//usuario para acceder al servidor de la base de datos
      password: '1234',//contraseña para acceder al servidor de la base de datos
      database: 'SistemaIncidencias',//nombre de la base de datos
      server: '127.0.0.1',//servidor de la base de datos
      options: {
        encrypt: false,               // Usa false si no necesitas cifrado
        trustServerCertificate: true  // Deja en true en desarrollo
      }
    }
  };
  