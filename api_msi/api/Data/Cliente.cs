using System;
using System.Collections.Generic;

namespace api.Data
{
    public partial class Cliente
    {
        public uint IdCliente { get; set; }
        public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public string Dni { get; set; } = null!;
        public string Telefono { get; set; } = null!;
        public string Mail { get; set; } = null!;
        public DateOnly FechNac { get; set; }
        public uint IdBarrios { get; set; }

        public virtual Barrio IdBarriosNavigation { get; set; } = null!;
    }
}
