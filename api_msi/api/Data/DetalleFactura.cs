using System;
using System.Collections.Generic;

namespace api.Data
{
    public partial class DetalleFactura
    {
        public uint IdDetalleFactura { get; set; }
        public int Cantidad { get; set; }
        public string? Precio { get; set; }
        public uint IdFactura { get; set; }
    }
}
