using System;
using System.Collections.Generic;

namespace api.Data
{
    public partial class Detallepedido
    {
        public uint IdDetallePedido { get; set; }
        public int Cantidad { get; set; }
        public uint IdProducto { get; set; }
    }
}
