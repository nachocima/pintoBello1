using System;
using System.Collections.Generic;

namespace api.Data
{
    public partial class Barrio
    {
        public Barrio()
        {
            Clientes = new HashSet<Cliente>();
        }

        public uint IdBarrios { get; set; }
        public string Descripcion { get; set; } = null!;

        public virtual ICollection<Cliente> Clientes { get; set; }
    }
}
