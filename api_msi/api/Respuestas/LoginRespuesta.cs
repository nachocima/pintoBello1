namespace api.Respuestas;

public class LoginRespuesta
{
     public string Legajo { get; set; } = null!;
    public string Nombre { get; set; } = null!;
    public string Apellido { get; set; } = null!;
     public uint IdTipoEmpleado { get; set; }
}

