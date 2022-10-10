using api.Comandos;
using api.Data;
using api.Respuestas;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace api.Controllers;

[ApiController]
public class EmpleadoController: ControllerBase
{
    private readonly pintureriaContext _context;
    public EmpleadoController(pintureriaContext context)
    {
        _context = context;
    }

    [HttpPost]
    [Route("empleado/login")]
    public async Task<ActionResult<LoginRespuesta>> login(LoginComando cmd){
        try{
            if(cmd.Usuario == null || cmd.Contrasena == null){
                return BadRequest("Faltan Datos");
            }
            var existe = await _context.Empleados.Where(x=> x.Usuario == cmd.Usuario && x.Contrasena == cmd.Contrasena).FirstOrDefaultAsync();

            if (existe == null)
            {
                return BadRequest("Usuario o contraseña incorrectos");
            }
            var request = new LoginRespuesta(){
                Legajo = existe.Legajo,
                Nombre = existe.Nombre,
                Apellido = existe.Apellido,
                IdTipoEmpleado = existe.IdTipoEmpleado
            };

            return Ok(request);

        }
        catch(Exception e){
            return BadRequest("Aca " + e.Message);
        }
    }

}